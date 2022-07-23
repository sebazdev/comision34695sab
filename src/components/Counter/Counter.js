import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)
    const [title, setTitle] = useState('Hola')

    // useEffect(() => {
    //     console.log('el componente se monto')

    //     return () => console.log('se va a desmontar el componente')
    // }, [])

    useEffect(() => {
        console.log('cambio el title')

        return () => console.log('antes de cambiar title')
    }, [title])

    const increment = () => {
        // count++
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    // console.log('render')
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => setTitle(title === 'Hola' ? 'Chau' : 'Hola')}>Saludar</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Counter