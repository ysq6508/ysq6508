// todoList 的响应式业务封装为hook函数
import { ref, computed } from "vue" 
export const useTodos = () => {
    let title = ref('') // 用于新增任务时input的双向绑定
    const todos = ref([
        {
            'title': '学习hooks, 去字节',
            'done': false
        }
    ])

    function addTodo() {
        todos.value.push({
            'title': title.value,
            'done': false
        })
    }

    function clear() {
        todos.value = todos.value.filter(v => !v.done) // 删除所有已完成任务
    }

    let active = computed(() => {
        return todos.value.filter(v => !v.done).length;  // 还有未完成的任务数目
    })

    let all = computed(() => {
        return todos.value.length;  // 所有任务数目
    })

    let allDone = computed({
        get: function() {
            return active.value == 0
        },
        set: function(value) {
            todos.value.forEach((todo) => {
                todo.done = value
            })
        }
    })

    return {
        title,
        todos,
        addTodo,
        clear,
        active,
        all,
        allDone
    }
}