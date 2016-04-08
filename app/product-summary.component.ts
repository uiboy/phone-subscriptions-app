import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Subscription} from './subscription';
import {ProductData} from './product-data';
import {ProductImagesComponent} from './product-images.component';

@Component({
    selector: 'product-summary',
    templateUrl: './app/templates/product_summary.html',
    directives: [NgClass]
})

export class ProductSummaryComponent {
    @Input() selectedSubscription: Subscription;
    @Input() productData: ProductData;

    public selectedThumbnail = 0;

    onSelectThumbnail(i) {
        // Change the selected index so that we can change the css class
        this.selectedThumbnail = i;
    }
}