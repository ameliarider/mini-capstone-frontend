export function ProductsShow ({ product, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(product, params, successCallback);
  }
  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" defaultValue={product.name} />
        </div>
        <div>
          Description: <input name="description" type="text" defaultValue={product.description} />
        </div>
        <div>
          Price: <input name="price" type="integer" defaultValue={product.price} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}