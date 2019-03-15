import React, { useState } from 'react'

import { useStore } from '../../store'
import * as todosActions from './actions'

export default function TodosList() {
  const { todos, dispatch } = useStore()

  const [input, setInput] = useState('')

  function handleChange(e) {
    setInput(e.target.value)
  }

  function addTodo(e) {
    e.preventDefault()
    dispatch(todosActions.add({ id: Math.random(), title: input }))
    setInput('')
  }

  function removeTodo(id) {
    dispatch(todosActions.remove(id))
  }

  return (
    <div>
      <h1>TodosList</h1>
      <form onSubmit={addTodo}>
        <input
          style={{ marginRight: '8px' }}
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
        {todos.loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {todos.data.map(todo => (
              <li key={todo.id}>
                <span style={{ marginRight: '8px' }}>{todo.title}</span>
                <button type="button" onClick={() => removeTodo(todo.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  )
}
