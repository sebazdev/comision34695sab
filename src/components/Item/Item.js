const Item = ({product}) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name}/>
        </li>
    )
}

export default Item