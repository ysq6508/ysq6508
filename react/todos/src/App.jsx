import { Component } from "react";
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'

// es6 js 适合大型企业级开发 模块化 module
// class extends super static 传统面向对象的能力
class App extends Component {
constructor(props) {
  super(props) // 将父类的构造函数执行一下
  // 私有数据 数据的状态 申明自己的属性
  this.state = {
    todos: []
  }
}
// 修改状态
  addTodo = (text) => {
    // Component上有setState 方法，修改我们的状态，页面上响应式更新
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false
        }
      ]
    })
  }

  // 抽象方法
  // 界面不一样的，重写这个方法
  render() {
    return (
    <div>
      <h1>Hello React</h1>
      <div>
        <TodosForm addTodo={this.addTodo}/>
        <TodosList />
      </div>
    </div>
  )
  }
}

export default App