// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import React, { useState } from 'react'

const allItems = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
]

function App() {
  const [items, setItems] = useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(id) {
    setItems(items.filter(i => i.id !== id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {items.map(({ id, value }) => (
          <li key={id}>
            <button onClick={() => removeItem(id)}>remove</button>{' '}
            <label htmlFor={`${id}-input`}>{value}</label>{' '}
            <input id={`${id}-input`} defaultValue={value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
