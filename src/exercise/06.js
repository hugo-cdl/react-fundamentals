// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = e => {
    const { value } = e.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input
          value={username}
          onChange={handleChange}
          id='usernameInput'
          type="text"
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
