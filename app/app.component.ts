import {Component} from 'angular2/core';
import {SubscriptionListComponent} from './subscription-list.component';
import {ProductSummaryComponent} from './product-summary.component';
import {ProductData} from './product-data';
import {Subscription} from './subscription';

@Component({
    selector: 'kpn-app',
    template: `
    <subscription-list [productData]="productData" (selectionChanged)="updateSubscription($event);"></subscription-list>
    <product-summary [selectedSubscription]="selectedSubscription"></product-summary>
    `,
    directives: [SubscriptionListComponent, ProductSummaryComponent]
})

export class AppComponent { 
	title = 'List of subscriptions';
	public productData:ProductData = new ProductData({
		"device_original_price": 729,
		"subscription_list" : SUBSCRIPTIONS
	});

	public selectedSubscription:Subscription = new Subscription({
		"id": 1,
		"name": "Basis Mobiel",
		"volume": "150 min or sms",
		"data": 500,
		"device_discount": 220,
		"price": 44,
		"price_discount": 10
	});
	//this.selectedSubscription = {};
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

var SUBSCRIPTIONS: Subscription[] = [
	new Subscription({
	 	"ids": 1,
		"name": "Basis Mobiel",
		"volume": "150 min or sms",
		"data": 500,
		"device_discount": 220,
		"price": 44,
		"price_discount": 10
 	}),
 	new Subscription({
	 	"id": 2,
		"name": "Basis",
		"volume": "190 min or sms",
		"data": 400,
		"device_discount": 400,
		"price": 45,
		"price_discount": 20
 	}),
 	new Subscription({
	 	"id": 3,
		"name": "Mobiel",
		"volume": "250 min or sms",
		"data": 2000,
		"device_discount": 509,
		"price": 44,
		"price_discount": 10
 	})
];




