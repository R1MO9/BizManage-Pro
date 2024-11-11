import React from 'react';

const SalesReport = ({ invoices }) => {
    const totalSales = invoices.reduce((acc, invoice) => acc + invoice.amount, 0);
    const totalInvoices = invoices.length;

    return (
        <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
            <p className="text-gray-700">Total Invoices: {totalInvoices}</p>
            <p className="text-gray-700">Total Sales: ${totalSales.toFixed(2)}</p>
        </div>
    );
};

export default SalesReport;
