// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef } from 'react'

function UsernameForm({ onSubmitUsername }) {
  const usernameInputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input ref={usernameInputRef} id='usernameInput' type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
