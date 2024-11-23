import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import logo from '../assets/images/login.png'; // Ensure this is a compatible image format

const generatePDF = (cart, calculateTotal) => {
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

export default generatePDF;
