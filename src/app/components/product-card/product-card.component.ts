import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatTooltipModule
  ],
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  tooltipDetails: string | null = null;
  @Input() inStock: boolean = true;
  @Input() statusLabel?: string;
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price?: number;
  @Output() addToQuote = new EventEmitter<void>();
}
