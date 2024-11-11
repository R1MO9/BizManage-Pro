import React, { useState } from 'react';
import Button from '../components/common/button';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/images/login.png'; // Ensure this is a compatible image format

const productsData = [
    { id: 1, name: 'Veg Thali', description: 'A complete meal with rice, roti, sabzi, dal, and salad.', price: 49 },
    { id: 2, name: 'Egg Thali', description: 'A complete meal with rice, roti, egg curry, dal, and salad.', price: 59 },
    { id: 3, name: "Chicken Thali", description: 'A complete meal with rice, roti, chicken curry, dal, and salad.', price: 79 },
    { id: 4, name: 'Fish Thali', description: 'A complete meal with rice, roti, fish curry, dal, and salad.', price: 89 },
    { id: 5, name: 'Chicken Biryani', description: 'Aromatic basmati rice cooked with chicken, spices, and herbs.', price: 99 },
    { id: 6, name: 'Puri Sabzi', description: 'Fluffy puris served with aloo sabzi.', price: 25 },
    { id: 7, name: 'Paratha', description: 'Flaky whole wheat parathas served with sabzi.', price: 29 },
    { id: 8, name: 'Egg Toast', description: 'Two slices of bread with fried eggs.', price: 19 },
    { id: 9, name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potatoes.', price: 39 },
    { id: 10, name: 'Idli Sambhar', description: 'Steamed rice cakes served with sambhar.', price: 35 },
    { id: 11, name: "Dhokla", description: 'Steamed dhokla served with mint chutney.', price: 25 },
    { id: 12, name: 'Pav Bhaji', description: 'Spicy mashed vegetables served with buttered pav.', price: 45 },
];

const SalesPage = () => {
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const generatePDF = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to your cart before checking out.");
            return;
        }
    
        const doc = new jsPDF();
    
        // Set text color to black
        const textColor = '#000000'; // Black color for text
        const lightGray = '#e0e0e0'; // Light gray for background shades
    
        // Add business logo
        doc.addImage(logo, 'PNG', 10, 10, 50, 50); 
    
        // Business information
        doc.setFontSize(16);
        doc.setTextColor(textColor);
        doc.text('Business Name', 70, 20); // Replace with your business name
        
        doc.setFontSize(12);
        doc.text('GST Number: 123456789', 70, 30); // Replace with your GST number
        doc.text('Address: Your business address here', 70, 40); // Replace with your address
        doc.text('Phone: (123) 456-7890', 70, 50); // Business phone number
        doc.text('Email: contact@business.com', 70, 60); // Business email
    
        // Draw a separator line for a modern look
        doc.setLineWidth(0.5);
        doc.setDrawColor(textColor); 
        doc.line(10, 65, 200, 65); // Horizontal line
    
        // Payment Bill title
        doc.setFontSize(18);
        doc.text('Payment Bill', 10, 75);
    
        // Customer information section with gray background
        doc.setFillColor(lightGray);
        doc.rect(10, 85, 190, 20, 'F'); // Light gray background for customer info
    
        doc.setFontSize(12);
        doc.setTextColor(textColor);
        doc.text('Customer Information', 15, 92);
        doc.text('Name: John Doe', 15, 100); // Replace with dynamic customer name
        doc.text('Email: john.doe@example.com', 80, 100); // Replace with dynamic customer email
        doc.text('Phone: (987) 654-3210', 145, 100); // Replace with dynamic customer phone number
    
        // Order summary section
        doc.setFontSize(14);
        doc.text('Order Summary', 10, 120);
    
        // Table header and rows
        const tableColumn = ["Product", "Quantity", "Price", "CGST", "SGST", "Total"];
        const tableRows = cart.map(item => {
            const quantity = item.quantity;
            const price = item.price.toFixed(2);
            const cgst = (item.price * 0.09).toFixed(2);
            const sgst = (item.price * 0.09).toFixed(2);
            const total = (item.price * quantity + parseFloat(cgst) * quantity + parseFloat(sgst) * quantity).toFixed(2);
            return [item.name, quantity, `$${price}`, `$${cgst}`, `$${sgst}`, `$${total}`];
        });
    
        // Use autoTable for table layout with simple black and white theme
        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 130,
            theme: 'grid', // Simple grid theme
            headStyles: {
                fillColor: textColor, // Black header
                textColor: '#FFFFFF', // White text for contrast
                fontSize: 12,
                halign: 'center',
            },
            bodyStyles: {
                textColor: textColor,
                fontSize: 10,
                halign: 'center',
            },
            styles: {
                lineColor: '#c0c0c0', // Light gray grid lines
            },
            alternateRowStyles: {
                fillColor: '#f9f9f9', // Very light gray for alternate row backgrounds
            }
        });
    
        // Total calculations
        const totalAmount = calculateTotal();
        const cgstTotal = (cart.reduce((total, item) => total + (item.price * item.quantity * 0.09), 0)).toFixed(2);
        const sgstTotal = (cart.reduce((total, item) => total + (item.price * item.quantity * 0.09), 0)).toFixed(2);
    
        // Line for totals
        const totalY = doc.lastAutoTable.finalY + 10;
        doc.line(10, totalY, 200, totalY); // Horizontal line
    
        doc.setFontSize(12);
        doc.setTextColor(textColor);
        doc.text(`Subtotal: $${totalAmount}`, 10, totalY + 10);
        doc.text(`CGST (9%): $${cgstTotal}`, 10, totalY + 20);
        doc.text(`SGST (9%): $${sgstTotal}`, 10, totalY + 30);
        doc.setFontSize(14);
        doc.text(`Total: $${(parseFloat(totalAmount) + parseFloat(cgstTotal) + parseFloat(sgstTotal)).toFixed(2)}`, 10, totalY + 40);
    
        // Payment method
        doc.setFontSize(12);
        doc.text('Payment Method: Credit Card', 10, totalY + 60); // Replace with dynamic payment method
    
        // Thank you note
        doc.setFontSize(14);
        doc.text('Thank you for your purchase!', 10, totalY + 80);
        doc.setFontSize(10);
        doc.text('Visit us again at www.businesswebsite.com', 10, totalY + 90); // Replace with your website
    
        // Save the PDF
        doc.save('payment_bill.pdf');
    };
    
    
    

    return (
        <div className="flex flex-col lg:flex-row p-6 bg-gray-50">
            <div className="flex-1 lg:w-2/3 mb-4 lg:mb-0">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="flex justify-between border border-gray-200 rounded-lg p-4 bg-white transition-transform transform hover:shadow-md">
                            <div>
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-gray-700 font-bold">Price: ${product.price.toFixed(2)}</p>
                                <Button
                                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/3 lg:ml-4 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
                <ul className="border-t border-gray-200 pt-2">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <li key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-500 py-2">Your cart is empty.</li>
                    )}
                </ul>
                {cart.length > 0 && (
                    <>
                        <div className="flex justify-between font-semibold mt-4">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <Button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500" onClick={generatePDF}>
                            Checkout
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SalesPage;
