import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-inventory-app';

  products: Product[];

  constructor () {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        134900),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        250000),
      new Product(
        'AFRICAHAT',
        'A Nice African Hat',
        'assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'African', 'Hats'],
        155000)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
