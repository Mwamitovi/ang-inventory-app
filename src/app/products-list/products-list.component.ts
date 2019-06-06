import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  // @input productList:
  // the Product[] passed to us
  @Input()  productList: Product[];

  // @output whenProductSelected:
  // outputs the current Product whenever a new Product is selected
  @Output() whenProductSelected: EventEmitter<Product>;

  // @property currentProduct:
  // local state containing the currently selected `Product`
  private currentProduct: Product;

  constructor() {
    this.whenProductSelected = new EventEmitter();
  }

  ngOnInit() { }

  // method sets "private" currentProduct to the product passed in
  // and emits product that was clicked on our output
  clicked(product: Product): void {
    this.currentProduct = product;
    this.whenProductSelected.emit(product);
  }

  // accepts a product argument,
  // returns true if product's sku matches the currentProduct's sku
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
