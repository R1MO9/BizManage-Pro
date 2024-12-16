import React, { useState, useEffect } from 'react';
import Button from '../components/common/button';
import generatePDF from '../lib/generatePDF';
import getProducts from '../actions/product/getProducts.js';
import Cookie from 'js-cookie';

const SalesPage = () => {
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [productsData, setProductsData] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = Cookie.get('token');
                const businessId = Cookie.get('businessId');
                const response = await getProducts(token, businessId);
    
                if (response.status === 'success') {
                    setProductsData(response.data.products);
                } else {
                    notify(response.message, 'error');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                notify('Failed to load products', 'error');
            }
        };
    
        fetchProducts();
    }, []);    

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="flex flex-col lg:flex-row p-6 bg-gray-50 dark:bg-gray-900 dark:text-white min-h-svh">
            <div className="flex-1 lg:w-2/3 mb-4 lg:mb-0">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="mb-4 p-3 border border-gray-300 dark:border-gray-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="flex flex-col md:flex-row justify-between border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 transition-transform transform hover:shadow-md">
                            <div>
                                <h3 className="text-lg text-black dark:text-white font-semibold">{product.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                            </div>
                            <div className="flex justify-between md:flex-col items-end">
                                <p className="text-gray-700 dark:text-gray-300 font-bold">Price: ${product.price.toFixed(2)}</p>
                                <Button
                                    className="mt-2 text-white px-4 py-2 rounded-md transition-colors hover:bg-blue-950 focus:outline-none dark:hover:bg-blue-700"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/3 lg:ml-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-xl text-black dark:text-white font-semibold mb-2">Shopping Cart</h2>
                <ul className="border-t border-gray-200 dark:border-gray-700 pt-2">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <li key={item.id} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                                <span className="text-black dark:text-white">{item.name} (x{item.quantity})</span>
                                <span className="text-gray-700 dark:text-gray-300">${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-500 py-2 dark:text-gray-400">Your cart is empty.</li>
                    )}
                </ul>
                {cart.length > 0 && (
                    <>
                        <div className="flex justify-between font-semibold mt-4 text-black dark:text-white">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <Button className="mt-4 bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded-md transition-colors hover:bg-green-700 dark:hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500" onClick={() => generatePDF(cart, calculateTotal)}>
                            Checkout
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SalesPage;
