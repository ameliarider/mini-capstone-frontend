export function ProductsIndex({ products, onShow, onCart, isLoggedIn }) {
  return (
    <div className="container my-4">
      <h2 className="mb-3">Products</h2>
      <p>Total products: {products.length}</p>
      <div className="row g-4"> {/* g-4 adds gutter (spacing) between cards */}
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/286x160?text=Product+Image"
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Supplier: {product.supplier}</p>
                <div className="mt-auto">
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => onShow(product)}
                  >
                    More Info
                  </button>
                  {isLoggedIn && (
                      <button
                        className="btn btn-primary"
                        onClick={() => onCart(product)}
                      >
                        Add to Cart
                      </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
