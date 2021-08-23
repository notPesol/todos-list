import { useState } from "react"

const Todo = ({ index, todo, markTodo, removeTodo, editTodo }) => {
  const [value, setValue] = useState('');
  const [isEdit, setisEdit] = useState(false);

  const saveTodo = () => {
    if (!value) return
    editTodo(index, value);
    setisEdit(false)
  }
  return (
    <div>
      {!isEdit ? (
        <span style={{ textDecoration: todo.isDone && "line-through red 2px" }}>{todo.text}</span>
      ) : (
        <div>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={saveTodo}>
            Save
          </button>
        </div>
      )}
      <div>
        <button onClick={() => markTodo(index)}>✓</button>
        <button onClick={() => removeTodo(index)}>✕</button>
        <button onClick={() => setisEdit(!isEdit)}>edit</button>
      </div>
    </div>
  )
}

export default Todo;
