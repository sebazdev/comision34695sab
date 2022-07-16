import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)
    const [text, setText] = useState('Text')
    // let count = 10

    const increment = () => {
        // count++
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{text}</h1>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Counter