import React, { useState } from 'react';
import type { Product, ProductFormDraft } from '../types/product';

interface ProductFormProps {
    onAddProduct: (product: Omit<Product, 'id'>) => void;
    initialDraft?: ProductFormDraft;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct, initialDraft }) => {
    const [formData, setFormData] = useState<ProductFormDraft>({
        name: initialDraft?.name ?? '',
        price: initialDraft?.price ?? 0,
        description: initialDraft?.description ?? '',
    });

    // Requirement 1: Explicit React.ChangeEvent on handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.price !== undefined) {
            onAddProduct({
                name: formData.name,
                price: formData.price,
                description: formData.description,
            });
            setFormData({ name: '', price: 0, description: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name ?? ''}
                onChange={handleChange}
                placeholder="Product Name"
            />
            <input
                type="number"
                name="price"
                value={formData.price ?? 0}
                onChange={handleChange}
                placeholder="Price"
            />
            <button type="submit">Add Product</button>
        </form>
    );
};