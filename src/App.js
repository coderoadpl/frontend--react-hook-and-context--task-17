import React from 'react'

export const App = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  )
}

export default App
