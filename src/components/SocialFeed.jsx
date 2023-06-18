import React from 'react';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      description: 'Praesent id est ut tortor accumsan laoreet in nec leo.',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.99,
      description: 'Nulla ac erat sed felis feugiat pretium at nec eros.',
    },
    // Add more products as needed
  ];

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">Marketplace</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
