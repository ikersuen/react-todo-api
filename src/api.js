export default {
    getAll: () => fetch("http://localhost:8080/api/todos", {mode: 'cors'}),
    createTodo: (newTodoItem) => fetch("http://localhost:8080/api/todos", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(newTodoItem)
      })
}