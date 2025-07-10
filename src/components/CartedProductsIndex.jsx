export function CartedProductsIndex({cartedProducts, onDestroy}) {
  return (
    <div>
      <p>Total products: {cartedProducts.length}</p>
      <p>----------------</p>
      {cartedProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name} | Quantity: {product.quantity}</p>
          <p>${product.price} each</p>
          <button onClick={() => onDestroy(product)}>Remove from Cart</button>
          <p>----------------</p>
        </div>
      ))}
    </div>
  )
}