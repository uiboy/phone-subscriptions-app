import {Component, Input} from 'angular2/core';

@Component({
    selector: 'subscription-list',
    template: `
    <div class="subscription-list-container">
	    <h1>KPN Assignment</h1>
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
	    	<tr *ngFor="#s of subscriptions">
	    		<td><input type="radio" name="subscription" (click)="onSelectSubscription(s)"/>{{s.name}}</td>
	    		<td>{{s.volume}}</td>
	    		<td>{{s.data}}</td>
	    		<td>{{s.device_discount}}</td>
	    		<td>{{s.price}}</td>
	    		<td>{{s.price_discount}}</td>
	    	</tr>
	    	</tbody>
	    </table>
	</div> 
    `
})

export class SubscriptionListComponent {
	public subscriptions = SUBSCRIPTIONS;

	onSelectSubscription(s: Subscription) {
		console.log(s);
	}
}

export class Subscription {
	id: number;
	name: string;
	volume: string;
	data: integer;
	device_discount: integer; 
	price: integer;
	price_discount: integer;
}

var SUBSCRIPTIONS: Subscription[] = [
	{
	 	"id": 1,
		"name": "Basis Mobiel",
		"volume": "150 min or sms",
		"data": 500,
		"device_discount": 220,
		"price": 44,
		"price_discount": 10,
 	},
 	{
	 	"id": 2,
		"name": "Basis",
		"volume": "190 min or sms",
		"data": 400,
		"device_discount": 200,
		"price": 45,
		"price_discount": 20,
 	},
 	{
	 	"id": 3,
		"name": "Mobiel",
		"volume": "250 min or sms",
		"data": 2000,
		"device_discount": 220,
		"price": 44,
		"price_discount": 10,
 	}
];