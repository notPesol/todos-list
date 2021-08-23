import { useState } from "react"

import FormTodo from "./FormTodo";
import Todo from "./Todo";
const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: 'test',
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    if (window.confirm('Delete ?')) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }

  }

  const editTodo = (index, text) => {
    const newTodo = [...todos];
    newTodo[index].text = text;
    setTodos(newTodo);
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div>
              <div>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todos;
