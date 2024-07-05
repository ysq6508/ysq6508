import { Component } from "react";
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'

// es6 js 适合大型企业级开发 模块化 module
// class extends super static 传统面向对象的能力
class App extends Component {
constructor(props) {
  super(props) // 将父类的构造函数执行一下
  // 私有数据 数据的状态 申明自己的属性
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  this.state = {
    todos: savedTodos
  }
}
// 修改状态
  addTodo = (text) => {
    // Component上有setState 方法，修改我们的状态，页面上响应式更新
    // 状态就如纸巾
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

  // 数据编程
  // 数据和界面状态是一一对应的
  deleteTodo = (index) => {
    const newTodos = [...this.state.todos]
    newTodos.splice(index, 1) // 删除某项，修改原数组
    this.setState({
      todos: newTodos
    })
  }

  toggleTodo = (index) => {
    const newTodos = [...this.state.todos]
    newTodos[index].completed = !newTodos[index].completed
    this.setState({
      todos: newTodos
    })
  }

  editTodo = (index, newText) => {
    const newTodos = [...this.state.todos]
    newTodos[index].text = newText
    this.setState({
      todos: newTodos
    })
  }

  // 钩子函数
  componentDidUpdate() {
    // console.log('update....');
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  // 抽象方法
  // 界面不一样的，重写这个方法
  render() {
    return (
    <div>
      <h1>Hello React</h1>
      <div>
        <TodosForm addTodo={this.addTodo}/>
        <TodosList 
        todos={this.state.todos}
        deleteTodo={this.deleteTodo}
        toggleTodo={this.toggleTodo}
        editTodo={this.editTodo}
        />
      </div>
    </div>
  )
  }
}

export default App