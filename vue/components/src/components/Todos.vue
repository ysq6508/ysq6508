<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input type="text" class="new-todo" placeholder="想做的事" @keyup.enter="addTodo">
        </header>

        <section class="main">
            <input type="checkbox" class="toggle-all">
            <label for="toggle-all">Mark all as complete</label>

            <ul class="todo-list">
                <li class="todo" v-for="todo in state.todos">
                    <div class="view">
                        <input type="checkbox" class="toggle" v-model="todo.completed">
                        <label>{{todo.title}}</label>
                        <button class="destroy"></button>
                    </div>
                </li>
            </ul>
        </section>

    </section>    
</template>
  
  <script setup>
  import { reactive } from 'vue'

  const state = reactive({
    todos: [
        {id: 1, title: '吃饭', completed: false},
        {id: 2, title: '睡觉', completed: true},
        {id: 3, title: '打豆豆', completed: false}
    ]
  })

  // 1. 输入new todo 增加列表
  // 2. 手动完成某件事项
  // 3. 手动移除某事项
  // 4. 全选 || 全不选
    
  </script>
  
  <style lang="css" scoped>
  
  </style>
  