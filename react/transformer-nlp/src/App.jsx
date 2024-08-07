import { useEffect, useRef, useState } from 'react'
import LanguageSelector from './components/LanguageSelector';
import Progress from './components/Progress';

import './App.css'

function App() {

  // 管理状态变量
  const [ready, setReady] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [progressItems, setProgressItems] = useState([]);

  const [input, setInput] = useState('I love walking my dog.');
  const [sourceLanguage, setSourceLanguage] = useState('eng_Latn');
  const [targetLanguage, setTargetLanguage] = useState('fra_Latn');
  const [output, setOutput] = useState('');

  // 创建一个可变的引用对象
  const worker = useRef(null);

  // 确保只在首次渲染时被初始化为一个新的 Worker 实例。
  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL('./worker.js', import.meta.url), {
        type: 'module'
      });
    }

    // 创建一个回调函数，用于处理来自工作线程的消息
    const onMessageReceived = (e) => {
      switch (e.data.status) {
        case 'initiate':
          // 模型文件开始加载：向进度列表中添加一个新的进度项
          setReady(false);
          setProgressItems(prev => [...prev, e.data]);
          break;

        case 'progress':
          // 模型文件加载进度：更新进度列表中的一个进度项
          setProgressItems(
            prev => prev.map(item => {
              if (item.file === e.data.file) {
                return { ...item, progress: e.data.progress }
              }
              return item;
            })
          );
          break;

        case 'done':
          // 模型文件加载完成：从进度列表中移除对应的进度项
          setProgressItems(
            prev => prev.filter(item => item.file !== e.data.file)
          );
          break;

        case 'ready':
          // 管道准备就绪：工作线程已准备好接收消息
          setReady(true);
          break;

        case 'update':
          // 生成更新：更新输出文本
          setOutput(e.data.output);
          break;

        case 'complete':
          // 生成完成：重新启用“翻译”按钮
          setDisabled(false);
          break;
      }
    };

    // 将回调函数附加为事件监听器
    worker.current.addEventListener('message', onMessageReceived);

    // 定义一个清理函数，用于在组件卸载时执行
    return () => worker.current.removeEventListener('message', onMessageReceived);
  });

  const translate = () => {
    setDisabled(true);
    worker.current.postMessage({
      text: input,
      src_lang: sourceLanguage,
      tgt_lang: targetLanguage,
    });
  }

  return (
    <>
      <h1>Transformers.js</h1>
      <h2>ML-powered multilingual translation in React!</h2>

      <div className='container'>
        <div className='language-container'>
          <LanguageSelector type={"Source"} defaultLanguage={"eng_Latn"} onChange={x => setSourceLanguage(x.target.value)} />
          <LanguageSelector type={"Target"} defaultLanguage={"fra_Latn"} onChange={x => setTargetLanguage(x.target.value)} />
        </div>

        <div className='textbox-container'>
          <textarea value={input} rows={3} onChange={e => setInput(e.target.value)}></textarea>
          <textarea value={output} rows={3} readOnly></textarea>
        </div>
      </div>

      <button disabled={disabled} onClick={translate}>Translate</button>

      <div className='progress-bars-container'>
        {ready === false && (
          <label>Loading models... (only run once)</label>
        )}
        {progressItems.map(data => (
          <div key={data.file}>
            <Progress text={data.file} percentage={data.progress} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
