// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(e.target.elements['usernameInput'].value)
  }

  const handleChange = e => {
    const { value } = e.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lowercase')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input onChange={handleChange} id='usernameInput' type="text" />
        {error && (
          <div style={{ color: 'red' }} role='alert'>{error}</div>
        )}
      </div>
      <button disabled={Boolean(error)} type="submit">
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
