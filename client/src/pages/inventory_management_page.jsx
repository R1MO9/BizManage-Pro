import React, { useEffect, useState } from 'react';
import Button from '../components/common/button';
import IconButton from '../components/common/icon-button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import addProduct from '../actions/product/addProduct.js';
import getProducts from '../actions/product/getProducts.js';
import updateProduct from '../actions/product/updateProduct.js';
import deleteProduct from '../actions/product/deleteProduct.js';
import notify from '../components/common/notify';
import Notification from '../components/common/notification';
import Cookie from 'js-cookie';

const InventoryManagementPage = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);  // Track the current item being edited
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [supplierId, setSupplierId] = useState('');

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        if (modalOpen) {
            setCurrentItem(null);  // Reset when modal is closed
            setName('');
            setQuantity('');
            setPrice('');
            setDescription('');
            setSupplierId('');
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const businessId = Cookie.get('businessId');
        const item = {
            name,
            countInStock: quantity,
            price,
            description,
            supplierId,
            business: businessId,
        };

        const token = Cookie.get('token');
        let response;

        if (currentItem) {
            // If editing an existing product, update it
            response = await updateProduct(token, currentItem._id, item);
        } else {
            // If adding a new product
            response = await addProduct(token, item);
        }

        if (response.status === 'error') {
            notify(response.message, 'error');
            return;
        } else {
            notify(currentItem ? 'Product updated successfully' : 'Product added successfully', 'success');
        }

        toggleModal(); // Close the modal after saving
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = Cookie.get('token');
                const businessId = Cookie.get('businessId');
                const response = await getProducts(token, businessId);

                if (response.status === 'success') {
                    setInventoryItems(response.data.products);
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

    const handleEdit = (item) => {
        setCurrentItem(item);  // Set the current item to be edited
        setName(item.name);
        setQuantity(item.countInStock);
        setPrice(item.price);
        setDescription(item.description);
        setSupplierId(item.supplierId);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this product?');
        
        if (confirmed) {
            const token = Cookie.get('token');
            const response = await deleteProduct(token, id);

            console.log(response);
            

            if (response.status === 'error') {
                notify(response.message, 'error');
            } else {
                setInventoryItems((prev) => prev.filter((item) => item._id !== id));
                notify('Product deleted successfully', 'success');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <header className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-8">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Inventory Management</h1>
                <Button onClick={toggleModal} className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 focus:outline-none">
                    Add Product
                </Button>
            </header>
            <main className="flex-grow">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                    <table className="min-w-full">
                        <thead className="bg-gray-200 dark:bg-gray-700">
                            <tr>
                                {['Item Name', 'Quantity', 'Price', 'Description', 'Supplier ID', 'Actions'].map((header) => (
                                    <th key={header} className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-200 uppercase tracking-wide">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                            {inventoryItems.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.countInStock}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">${item.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.supplierId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white flex space-x-2">
                                        <IconButton onClick={() => handleEdit(item)}>
                                            <FaEdit />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(item._id)}>
                                            <FaTrash />
                                        </IconButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer className="mt-6 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">© 2024 Inventory Management System</p>
            </footer>

            {/* Modal for Adding/Editing Items */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                            {currentItem ? 'Edit Product' : 'Add Product'}
                        </h2>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter product name"
                                    required
                                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-600 dark:text-gray-200">Quantity</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    placeholder="Enter quantity"
                                    required
                                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-600 dark:text-gray-200">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Enter price"
                                    required
                                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-600 dark:text-gray-200">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter description"
                                    required
                                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="supplierId" className="block text-sm font-medium text-gray-600 dark:text-gray-200">Supplier ID</label>
                                <input
                                    type="text"
                                    id="supplierId"
                                    value={supplierId}
                                    onChange={(e) => setSupplierId(e.target.value)}
                                    placeholder="Enter supplier ID"
                                    required
                                    className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">
                                    Save
                                </Button>
                                <Button onClick={toggleModal} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 focus:outline-none">
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Notification />
        </div>
    );
};

export default InventoryManagementPage;
