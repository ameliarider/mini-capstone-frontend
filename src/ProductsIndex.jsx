export function ProductsIndex({products}) {
  return (
    <div>
      <h2>Products</h2>
      <p>Total products: {products.length}</p>
      {products.map((product) => (
        <div key={product.id}>
          <h3>Product name: {product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}