import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsDeAlfredo } from '../../asyncMock'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsDeAlfredo().then(products => {
            setProducts(products)
        })
    }, [])

    // const productsComp = products.map(prod => <li key={prod.id}>{prod.name}</li>)
    return (
        <>
            <h1>{greeting}</h1>
            {/* <ul> */}
                {/* {productsComp} */}
                {/* {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>         */}
            <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer