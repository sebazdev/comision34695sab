import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsDeAlfredo, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProductsDeAlfredo

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
        // if(!categoryId) {
        //     getProductsDeAlfredo().then(products => {
        //         setProducts(products)
        //     })
        // } else {
        //     getProductsByCategory(categoryId).then(products => {
        //         setProducts(products)
        //     })
        // }
    }, [categoryId])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer