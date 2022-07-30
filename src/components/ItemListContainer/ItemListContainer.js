import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsDeAlfredo } from '../../asyncMock'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting, setPage }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsDeAlfredo().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products} setPage={setPage}/>
        </>
    )
}

export default ItemListContainer