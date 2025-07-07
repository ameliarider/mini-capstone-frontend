export function ProductsIndex({products, onShow, onCart}) {
  return (
    <div>
      <h2>Products</h2>
      <p>Total products: {products.length}</p>
      {products.map((product) => (
        <div key={product.id}>
          <h3>Product name: {product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Supplier: {product.supplier}</p>
          <button onClick={() => onShow(product)}>More Info</button>
          <button onClick={() => onCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}