import { Component } from "react";
import './TodosForm.css';

class TodosForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        inputText: '聚会'
      }
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    // 在用户提交表单时不刷新页面，而是检查用户输入的文本是否非空，如果非空，则调用父组件提供的addTodo方法来添加一个新的待办事项
    handleSubmit = (event) => {
      event.preventDefault(); // 为了阻止表单的默认提交行为
      
      if(this.state.inputText.trim()) { // 去除首尾空白后是否非空
        this.props.addTodo(this.state.inputText); // 调用从父组件传递下来的addTodo函数，并将this.state.inputText作为参数传递
        this.setState({
          inputText: ''
        })
      }
    }

    render() {
      return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input type="text" 
        placeholder="请输入待办事项" 
        className="todo-form__input" 
        value={this.state.inputText}
        onChange={this.handleChange}
        /> 
        <button type="submit" className="todo-form__button">Add</button>
      </form>
      )
    }
}

export default TodosForm;