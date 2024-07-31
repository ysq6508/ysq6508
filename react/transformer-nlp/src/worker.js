import {
    pipeline,
    env,
} from "https://jsd.cdn.zzko.cn/npm/@xenova/transformers@2.6.0";
env.allowLocalModels = false;


// document  this 不能用 
self.addEventListener('message', async (event) => {
    const text = event.data.text
    const pipe = await pipeline('sentiment-analysis')
    // console.log(pipe)
    const result = await pipe(event.data.text);
    // console.log(result);
    self.postMessage({
        result: result[0].label,
    })
})