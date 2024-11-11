import React, { useState } from 'react';

const InvoiceForm = ({ onCreate, onCancel }) => {
    const [customerName, setCustomerName] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInvoice = {
            id: Date.now(),
            customerName,
            amount: parseFloat(amount),
            status,
            date: new Date().toLocaleDateString(),
        };
        onCreate(newInvoice);
    };

    return (
        <div className="bg-white shadow rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold mb-4">Create Invoice</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Customer Name</label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Payment Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="mr-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Create Invoice
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InvoiceForm;
