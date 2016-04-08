import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ProductData} from './product-data';
import {Subscription} from './subscription';

@Component({
    selector: 'subscription-list',
    template: `
    <div class="subscription-list-container">
	    <h1>{{productData.name}}</h1>
	    <table class="table subscription-list">
	    	<thead>
	    	<tr>
	    		<th>Name</th>
	    		<th>Minutes/Sms</th>
	    		<th>Internet/Data</th>
	    		<th>Device Price</th>
	    		<th>Costs/month</th>
	    	</tr>
	    	</thead>
	    	<tbody>
	    	<tr *ngFor="#s of productData.subscription_list">
	    		<td><input type="radio" [attr.checked]="selectedSubscription.id == s.id" name="subscription" (click)="onSelectSubscription(s)"/>{{s.name}}</td>
	    		<td>{{s.volume}}</td>
	    		<td>{{s.getDataString(s.data)}}</td>
	    		<td>&euro; {{productData.getFinalDevicePrice(s.device_discount)}}</td>
	    		<td class="discount-color"><span class="strikeout">&euro; {{s.price}}</span>&euro; {{s.getTotalPerMonth()}}</td>
	    	</tr>
	    	</tbody>
	    </table>
	</div> 
    `
})

export class SubscriptionListComponent {
	/**
	 * Input/Output used to communicate between components
	 * in angular 2 
	 * @type {[type]}
	 */
	@Input() productData: ProductData;
	@Input() selectedSubscription: Subscription;
	@Output() selectionChanged = new EventEmitter();

	onSelectSubscription(selected: Subscription) {
		console.log(selected);
		this.selectionChanged.emit(selected);
	}
}
