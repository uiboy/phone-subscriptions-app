import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ProductData} from './product-data';
import {Subscription} from './subscription';

@Component({
    selector: 'subscription-list',
    template: `
    <div class="subscription-list-container">
	    <h1>App</h1>
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
	    		<td><input type="radio" name="subscription" (click)="onSelectSubscription(s)"/>{{s.name}}</td>
	    		<td>{{s.volume}}</td>
	    		<td>{{s.data}}</td>
	    		<td>{{productData.getFinalDevicePrice(s.device_discount)}}</td>
	    		<td>{{s.price}}</td>
	    		<td>{{s.price_discount}}</td>
	    	</tr>
	    	</tbody>
	    </table>
	</div> 
    `
})

export class SubscriptionListComponent {
	@Input() productData: ProductData;
	@Output() selectionChanged = new EventEmitter();

	onSelectSubscription(selected: Subscription) {
		console.log(selected);
		this.selectionChanged.emit(selected);
	}
}
