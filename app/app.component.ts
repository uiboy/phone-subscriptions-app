import {Component} from 'angular2/core';
import {SubscriptionListComponent} from './subscription-list.component';
import {ProductSummaryComponent} from './product-summary.component';
import {ProductData} from './product-data';
import {ProductService} from './product.service';
import {Subscription} from './subscription';

@Component({
    selector: 'kpn-app',
    template: `
    <subscription-list [productData]="productData" 
    					(selectionChanged)="updateSubscription($event);" 
    					[selectedSubscription]="selectedSubscription">
    </subscription-list>
    <product-summary [productData]="productData" [selectedSubscription]="selectedSubscription"></product-summary>
    `,
    directives: [SubscriptionListComponent, ProductSummaryComponent]
})

export class AppComponent {
	public productData:ProductData = new ProductData({});
	public selectedSubscription:Subscription = new Subscription({
	});

	constructor(productService: ProductService) {
		productService.getProductDetails().subscribe(res => {
			this.productData = res;
			this.selectedSubscription = this.productData.subscription_list[5];
		});
	}

	/**
	 * [update Updates selected subscription]
	 * @param  {[type]} selected [Subscription]
	 * @return {[type]}          [none]
	 */
	updateSubscription(selected) {
		console.log("From event:", selected);
		this.selectedSubscription = selected;
	}
}





