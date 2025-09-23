import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${config.url}/product/viewallproducts`);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products. ' + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">All Products</h3>

      {error && <p className="text-center text-danger fw-bold">{error}</p>}

      {/* Table View Only */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Cost</th>
              <th>URL</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>₹{product.cost}</td>
                <td>
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </td>
                <td>
                  <img
                    src={`${config.url}/product/displayproductimage?id=${product.id}`}
                    alt="Product"
                    className="img-thumbnail"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProducts;
