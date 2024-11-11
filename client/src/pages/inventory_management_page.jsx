import React, { useState } from 'react';
import ProductForm from '../components/common/product_form';
import Button from '../components/common/button';

const InventoryManagementPage = () => {
    const [inventoryItems, setInventoryItems] = useState([
        { id: 1, name: 'Item 1', quantity: 10, price: 20.00, description: 'Description 1', supplierId: 'Supplier-1' },
        { id: 2, name: 'Item 2', quantity: 5, price: 15.00, description: 'Description 2', supplierId: 'Supplier-2' },
        { id: 3, name: 'Item 3', quantity: 8, price: 30.00, description: 'Description 3', supplierId: 'Supplier-3' },
    ]);

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
                { ...item, id: prev.length + 1 }
            ]);
        }
        toggleModal();
    };

    const handleEdit = (item) => {
        setCurrentItem(item);
        setModalOpen(true);
    };

    const handleDelete = (id) => {
        setInventoryItems((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-6">
            <header className="bg-white shadow rounded-lg p-4 mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">Inventory Management</h1>
                <Button onClick={toggleModal} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Add Product</Button>
            </header>
            <main className="flex-grow">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="min-w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                {['Item Name', 'Quantity', 'Price', 'Description', 'Supplier ID', 'Actions'].map((header) => (
                                    <th key={header} className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wide">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {inventoryItems.map(item => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.quantity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">${item.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.supplierId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 flex space-x-2">
                                        <button 
                                            className="text-blue-600 hover:text-blue-800 font-semibold" 
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="text-red-600 hover:text-red-800 font-semibold" 
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
                <p className="text-gray-500 text-sm">© 2024 Inventory Management System</p>
            </footer>

            {/* Modal for Adding/Editing Items */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-lg font-semibold mb-4">{currentItem ? 'Edit Product' : 'Add Product'}</h2>
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
