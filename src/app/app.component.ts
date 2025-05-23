import { Component } from '@angular/core';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturedCategoriesComponent } from './components/featured-categories/featured-categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductGridComponent,
    HeroSectionComponent,
    FeaturedCategoriesComponent,
    NavbarComponent,
    WhyChooseUsComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TheKing';
}
