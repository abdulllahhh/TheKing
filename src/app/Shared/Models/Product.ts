import { ProductCategory } from "./ProductCategory";
import { ProductSpecification } from "./ProductSpecification";
export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price?: number;
  statusLabel?: string;
  tooltipDetails: string;
  inStock: boolean;
  category: ProductCategory;
  specifications: ProductSpecification[];
  minimumOrder?: number;
  certifications: string[];
}
