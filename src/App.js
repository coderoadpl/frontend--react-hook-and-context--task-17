import React from 'react'

export const App = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [count])

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
