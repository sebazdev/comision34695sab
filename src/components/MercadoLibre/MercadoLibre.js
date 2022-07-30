import { useState, useEffect } from 'react'

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=auto')
    //         .then(response => response.json())
    //         .then(json => {
    //             setProducts(json.results)
    //         })
    // }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => response.json())
            .then(json => {
                setProducts(json.results)
 
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <>
            <h1>MercadoLibre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>buscar</button>
            </form>
            <div>
                {products.map(prod => {
                    return (
                        <div key={prod.id}>
                            <p>{prod.title}</p>
                            <img src={prod.thumbnail} alt={prod.title}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MercadoLibre