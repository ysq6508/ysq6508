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

    render() {
      return (
      <form className="todo-form">
        <input type="text" 
        placeholder="请输入待办事项" 
        className="todo-form__input" 
        value={this.state.inputText}
        onChange={this.handleChange}/> 
      </form>
      )
    }
}

export default TodosForm;