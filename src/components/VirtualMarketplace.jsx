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
    <div>
      <h1>Marketplace</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
