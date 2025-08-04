import { useState } from "react";

export function ProductsIndex({ products, onShow, onCart, isLoggedIn }) {
  const [searchFilter, setSearchFilter] = useState("");
  const [sort, setSort] = useState("false");
  // const sortAlphabetically = () => {
  //   const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  //     products(sortedProducts);
  // };

  return (
    <div className="container my-4">
      <h2 className="mb-3">Products</h2>
      <div className="d-flex align-items-center">
        <label className="me-1">Search Products:</label> <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" /><br />
        <datalist id="names">
          {products.map((product) => (
          <option key={product.id} value={product.name} />
          ))}
        </datalist> <br />

        <label className="me-1">Sort by:</label>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="">None</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select><br /><br />
      </div>
      <div className="row g-4"> {/* g-4 adds gutter (spacing) between cards */}
        {products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .sort((a, b) => {
          if (sort === "a-z") {
            return a.name.localeCompare(b.name);
          } else if (sort === "z-a") {
            return b.name.localeCompare(a.name);
          }
          return 0;
        })
        .map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4">
            <div className="card h-100">
              <img
                src={product.primary_image_url}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
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
        <p>Total products: {products.length}</p>
      </div>
    </div>
  );
}
