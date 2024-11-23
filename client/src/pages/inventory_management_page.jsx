import React, { useState } from 'react';
import ProductForm from '../components/common/product_form';
import Button from '../components/common/button';
import IconButton from '../components/common/icon-button';
import { products } from '../lib/data';
import { FaEdit, FaTrash } from 'react-icons/fa';

const InventoryManagementPage = () => {
    const [inventoryItems, setInventoryItems] = useState(products);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        setCurrentItem(null);
    };

    const handleSave = (item) => {
        if (currentItem) {
            setInventoryItems((prev) =>
                prev.map((i) => (i.id === currentItem.id ? item : i))
            );
        } else {
            setInventoryItems((prev) => [
                ...prev,
                { ...item, id: prev.length + 1 },
            ]);
        }
        toggleModal();
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        setInventoryItems((prev) => prev.filter((item) => item.id !== id));
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
                                <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.quantity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">${item.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white">{item.supplierId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-white flex space-x-2">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-semibold"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 font-semibold"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
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
                        <ProductForm
                            currentItem={currentItem}
                            onSave={handleSave}
                            onCancel={toggleModal}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default InventoryManagementPage;
