import { useState } from "react";

const Marketplace = () => {
  const [cart, setCart] = useState([]);

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
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="marketplace-container bg-gradient-to-br from-gray-900 to-gray-700 text-white py-10">
      <h1 className="marketplace-title text-4xl font-bold mb-6 text-center">Marketplace</h1>
      <div className="product-list flex justify-center">
        {products.map((product) => (
          <div className="product-card bg-gray-800 text-white rounded-lg p-4 mx-4 my-2" key={product.id}>
            <h2 className="product-name text-xl font-bold mb-2">{product.name}</h2>
            <p className="product-description mb-4">{product.description}</p>
            <p className="product-price text-lg">${product.price}</p>
            <button className="add-to-cart-button bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 px-4 mt-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart-container text-center mt-10">
        <h2 className="cart-title text-3xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart-message text-lg">Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item) => (
              <li className="cart-item text-lg" key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
