import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../Shared/Models/Product';
import { ProductCategory } from '../Shared/Models/ProductCategory';


@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private readonly products: Product[] = [
    {
      id: 'HELM-001',
      imageUrl: 'assets/images/executive-helmet.jpg',
      name: 'Executive Safety Helmet',
      description: 'Premium safety helmet with advanced impact protection and luxurious comfort features. Ideal for senior management site visits.',
      price: 129.99,
      statusLabel: 'Best Seller',
      tooltipDetails: 'Type 1 Class E certified, with premium leather comfort band',
      inStock: true,
      category: 'Head Protection',
      specifications: [
        { name: 'Material', value: 'High-density polyethylene' },
        { name: 'Standards', value: 'ANSI Z89.1-2014' },
        { name: 'Weight', value: '435g' },
        { name: 'Sizes', value: 'Adjustable 6.5-8' }
      ],
      minimumOrder: 5,
      certifications: ['ANSI Z89.1', 'EN 397', 'CSA Z94.1']
    },
    {
      id: 'GLOVE-001',
      imageUrl: 'assets/images/premium-gloves.jpg',
      name: 'Premium Leather Safety Gloves',
      description: 'Luxury grain leather gloves with enhanced grip and cut resistance. Perfect for executive handling and inspection.',
      price: 89.99,
      statusLabel: 'New',
      tooltipDetails: 'Full-grain leather with reinforced palm',
      inStock: true,
      category: 'Hand Protection',
      specifications: [
        { name: 'Material', value: 'Full-grain leather' },
        { name: 'Cut Level', value: 'ANSI Cut Level A4' },
        { name: 'Sizes', value: 'M-XXL' },
        { name: 'Lining', value: 'Kevlar®' }
      ],
      minimumOrder: 10,
      certifications: ['EN 388:2016', 'ANSI/ISEA 105-16']
    },
    {
      id: 'VEST-001',
      imageUrl: 'assets/images/exec-vest.jpg',
      name: 'Executive High-Visibility Vest',
      description: 'Professional-grade safety vest with premium reflective material and tailored fit for management.',
      tooltipDetails: 'Class 2 Type R with custom embroidery option',
      inStock: true,
      category: 'Protective Clothing',
      specifications: [
        { name: 'Material', value: 'Premium polyester' },
        { name: 'Visibility Class', value: 'Class 2' },
        { name: 'Closure', value: 'YKK® zipper' },
        { name: 'Reflective Material', value: '3M™ Scotchlite™' }
      ],
      minimumOrder: 5,
      certifications: ['ANSI/ISEA 107-2020']
    },
    {
      id: 'BOOT-001',
      imageUrl: 'assets/images/luxury-boots.jpg',
      name: 'Luxury Steel-Toe Boots',
      description: 'Executive safety boots combining professional protection with business casual aesthetics.',
      price: 249.99,
      statusLabel: 'Limited Edition',
      tooltipDetails: 'Full-grain leather with composite toe cap',
      inStock: true,
      category: 'Foot Protection',
      specifications: [
        { name: 'Upper Material', value: 'Full-grain leather' },
        { name: 'Sole', value: 'Vibram®' },
        { name: 'Safety Toe', value: 'Composite' },
        { name: 'Waterproof', value: 'Yes' }
      ],
      minimumOrder: 3,
      certifications: ['ASTM F2413-18', 'EN ISO 20345:2011']
    },
    {
      id: 'GLASS-001',
      imageUrl: './assets/images/executive-glasses.jpg',
      name: 'Executive Safety Glasses',
      description: 'Sophisticated safety glasses with blue light protection and anti-fog coating.',
      price: 159.99,
      tooltipDetails: 'Transition lenses with anti-scratch coating',
      inStock: false,
      category: 'Eye Protection',
      specifications: [
        { name: 'Lens Material', value: 'Polycarbonate' },
        { name: 'Frame Material', value: 'Titanium' },
        { name: 'Coating', value: 'Anti-fog, Anti-scratch' },
        { name: 'UV Protection', value: '99.9%' }
      ],
      certifications: ['ANSI Z87.1', 'EN 166']
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return of(this.products.filter(product => product.category === category));
  }
}