import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// TypeScript Interfaces
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  onSale?: boolean;
}

interface FormData {
  name: string;
  price: string;
}

interface FormErrors {
  name?: string;
  price?: string;
}

const initialProducts: Product[] = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, inStock: true, onSale: true },
  { id: 2, name: "Mechanical Keyboard", price: 120.0, inStock: false, onSale: false },
  { id: 3, name: "Gaming Mouse", price: 49.99, inStock: true, onSale: true },
];

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ name: "", price: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  // Filter products based on state
  const filteredProducts = inStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  // Count products on sale
  const saleCount = products.filter((p) => p.onSale).length;

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation function
  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Product name is required.";
    }
    if (!data.price.trim() || isNaN(Number(data.price)) || Number(data.price) <= 0) {
      newErrors.price = "Price must be a valid positive number.";
    }
    return newErrors;
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      inStock: true,
      onSale: false,
    };

    setProducts((prev) => [...prev, newProduct]);
    setFormData({ name: "", price: "" });
    setErrors({});
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Product Catalog</h1>
          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Requirement 2: Sale Counter with && conditional rendering */}
          {saleCount > 0 && (
            <Badge variant="destructive" className="animate-pulse">
              {saleCount} item{saleCount > 1 ? "s" : ""} on sale!
            </Badge>
          )}

          {/* Filter Switch */}
          <div className="flex items-center space-x-2">
            <Switch
              id="in-stock-filter"
              checked={inStockOnly}
              onCheckedChange={setInStockOnly}
            />
            <Label htmlFor="in-stock-filter">In Stock Only</Label>
          </div>
        </div>
      </div>

      {/* Requirement 1: Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col justify-between">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                {/* Ternary condition for badge color */}
                <Badge variant={product.inStock ? "default" : "secondary"}>
                  {product.inStock ? "In stock" : "Sold out"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Requirement 3: Add Product Form */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Wireless Mouse"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="e.g. 29.99"
              />
              {errors.price && <p className="text-sm text-destructive">{errors.price}</p>}
            </div>

            <Button type="submit" className="w-full">
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}