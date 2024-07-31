import { useState, useRef, useEffect } from 'react'

function App() {
  // ref 对象 响应式的，可以监听
  const worker = useRef(null)
  // 让页面最快速度出来
  useEffect(() => {
    // api请求
    // worker 初始化 比较大消耗的
    // 只实例化一次
    if (!worker.current) {
      worker.current = new Worker(
        new URL('./worker.js', import.meta.url),
        { type: 'module' }
      )
    }

    worker.current.addEventListener('message', (e) => {
      console.log(e.data);
    })

    worker.current.postMessage ({
      text: 'i love coding'
    })
    
  })
  return (
    <>
      
    </>
  )
}

export default App
