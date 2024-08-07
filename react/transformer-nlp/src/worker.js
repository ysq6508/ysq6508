import {
    pipeline,
    env,
} from "https://jsd.cdn.zzko.cn/npm/@xenova/transformers@2.6.0";
env.allowLocalModels = false;

/**
 *本类采用了单例模式来确保仅加载一个管道实例。这是因为加载管道是一个代价高昂的操作，
 * 我们不希望每次需要翻译句子时都执行这一操作。
 */
class MyTranslationPipeline {
    static task = 'translation';
    static model = 'Xenova/nllb-200-distilled-600M';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback });
        }

        return this.instance;
    }
}

// 监听主线程消息
self.addEventListener('message', async (event) => {
    // 获取翻译管道，首次调用时，这将加载管道并将其保存以供将来使用
    let translator = await MyTranslationPipeline.getInstance(x => {
        // 我们还向管道中添加了一个进度回调，以便我们可以
        // 跟踪模型加载的过程。
        self.postMessage(x);
    });

    // 执行翻译
    let output = await translator(event.data.text, {
        tgt_lang: event.data.tgt_lang,
        src_lang: event.data.src_lang,

        // 允许部分输出
        callback_function: x => {
            self.postMessage({
                status: 'update',
                output: translator.tokenizer.decode(x[0].output_token_ids, { skip_special_tokens: true })
            });
        }
    });

    // 将输出发送回主线程
    self.postMessage({
        status: 'complete',
        output: output,
    });
});
