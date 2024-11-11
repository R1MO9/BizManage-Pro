import React from 'react';

const SalesHistory = ({ invoices }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Sales History</h2>
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Customer Name</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {invoices.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No sales recorded.</td>
                        </tr>
                    ) : (
                        invoices.map((invoice) => (
                            <tr key={invoice.id}>
                                <td className="px-6 py-4 text-sm text-gray-800">{invoice.customerName}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">${invoice.amount.toFixed(2)}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{invoice.status}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{invoice.date}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SalesHistory;
