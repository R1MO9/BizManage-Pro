import React, { useState } from 'react';
import LabeledTextInput from './labeled-text-input';
import Button from './button';

const ProductForm = ({ currentItem, onSave, onCancel }) => {
    const [name, setName] = useState(currentItem ? currentItem.name : '');
    const [quantity, setQuantity] = useState(currentItem ? currentItem.quantity : '');
    const [price, setPrice] = useState(currentItem ? currentItem.price : '');
    const [description, setDescription] = useState(currentItem ? currentItem.description : '');
    const [supplierId, setSupplierId] = useState(currentItem ? currentItem.supplierId : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { 
            name, 
            quantity: parseInt(quantity), 
            price: parseFloat(price), 
            description, 
            supplierId 
        };
        onSave(item);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <LabeledTextInput
                    id="name"
                    label="Name"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <LabeledTextInput
                    id="quantity"
                    label="Quantity"
                    placeholder="Enter quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <LabeledTextInput
                    id="price"
                    label="Price"
                    placeholder="Enter price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <LabeledTextInput
                    id="description"
                    label="Description"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <LabeledTextInput
                    id="supplierId"
                    label="Supplier ID"
                    placeholder="Enter supplier ID"
                    value={supplierId}
                    onChange={(e) => setSupplierId(e.target.value)}
                    required
                />
            </div>
            <div className="flex justify-end gap-2">
                <Button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel</Button>
                <Button type="submit">Save</Button>
            </div>
        </form>
    );
};

export default ProductForm;