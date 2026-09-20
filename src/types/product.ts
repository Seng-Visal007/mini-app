export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  internalNotes?: string; // Internal field to be omitted
}

// Requirement 2: Derive PublicProduct via Omit
export type PublicProduct = Omit<Product, 'internalNotes'>;

// Requirement 2: Derive form draft via Partial
export type ProductFormDraft = Partial<Omit<Product, 'id'>>;