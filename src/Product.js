import './Product.css'

export default function Product({ product, addProduct, id }) {
    return (
        <div className="Product">
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={() => addProduct(id)}>Add to Cart</button>
        </div>
    )
}