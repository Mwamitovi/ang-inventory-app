import { Component, OnInit, Input } from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a Product
 */
@Component({
  selector: 'app-price-display',
  // templateUrl: './price-display.component.html',
  template: `
    <div class="price-display">\${{ price }}</div>
  `,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
