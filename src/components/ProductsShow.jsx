export function ProductsShow ({ product, onUpdate , onDestroy, isLoggedIn, isAdmin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(product, params, successCallback);
  }
  return (
    <div>
      <h1>{product.name}</h1><br />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <div>  
        {isLoggedIn && isAdmin ? (
          <>
            <form onSubmit={handleSubmit}>
              <div>
                Name: <input name="name" type="text" defaultValue={product.name} />
              </div>
              <div>
                Description: <input name="description" type="text" defaultValue={product.description} />
              </div>
              <div>
                Price: <input name="price" type="number" defaultValue={product.price} />
              </div>
              <button type="submit">Update</button>
            </form>
            <button onClick={() => onDestroy(product)}>Delete</button>
          </>
        ) : null}
      </div>
    </div>
  )
}