import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  features = [
    {
      icon: 'verified',
      title: 'Premium Quality',
      description: 'All products meet or exceed international safety standards'
    },
    {
      icon: 'inventory_2',
      title: 'Bulk Orders',
      description: 'Specialized pricing for large-scale corporate requirements'
    },
    {
      icon: 'local_shipping',
      title: 'Global Shipping',
      description: 'Worldwide delivery with order tracking'
    },
    {
      icon: 'support_agent',
      title: 'Expert Support',
      description: '24/7 dedicated customer service for corporate clients'
    }
  ];
}