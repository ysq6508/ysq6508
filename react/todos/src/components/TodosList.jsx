import { Component } from "react";
import TodoItem from './TodoItem';
import './TodosList.css';

class TodosList extends Component {
    render() {
      return (
      <div>
        <h1>Todo List</h1>
        <TodoItem />
      </div>
      )
    }
}

export default TodosList;