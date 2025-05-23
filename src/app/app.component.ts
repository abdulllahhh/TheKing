import { Component } from '@angular/core';
import { ProductGridComponent } from './components/product-grid/product-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductGridComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TheKing';
}
