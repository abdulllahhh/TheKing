import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-featured-categories',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent {
  categories = [
    {
      title: 'Head Protection',
      image: 'assets/images/category-head.jpg',
      description: 'Executive-grade safety helmets and accessories',
      path: '/categories/head-protection'
    },
    {
      title: 'Hand Protection',
      image: 'assets/images/category-hand1.jpg',
      description: 'Premium safety gloves for precise handling',
      path: '/categories/hand-protection'
    },
    {
      title: 'Eye Protection',
      image: 'assets/images/category-eye.jpg',
      description: 'Sophisticated safety eyewear solutions',
      path: '/categories/eye-protection'
    },
    {
      title: 'Protective Clothing',
      image: 'assets/images/category-clothing.jpg',
      description: 'Professional-grade protective wear',
      path: '/categories/protective-clothing'
    }
  ];
}