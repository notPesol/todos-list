import { useState } from "react"

const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return

    addTodo(value);
    setValue('')

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="add">Add todo</label>
          <input type="text"
            id="add"
            value={value}
            autoComplete='off'
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormTodo
