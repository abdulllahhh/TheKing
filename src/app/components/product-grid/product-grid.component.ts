import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MockDataService } from '../../services/mock-data.service';
import { Product } from '../../Shared/Models/Product';
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.mockDataService.getProducts().subscribe(
      products => this.products = products
    );
  }

  onAddToQuote(product: Product): void {
    console.log('Added to quote:', product);
    // TODO: Implement quote functionality
  }
}