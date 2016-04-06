import {Component, Input} from 'angular2/core';
import {Subscription} from './subscription';

@Component({
    selector: 'product-summary',
    templateUrl: './app/templates/product_summary.html'
})

export class ProductSummaryComponent {
    @Input() selectedSubscription: Subscription;
}