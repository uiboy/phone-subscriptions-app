import {Component} from 'angular2/core';
import {SubscriptionListComponent} from './subscription-list.component';
import {ProductSummaryComponent} from './product-summary.component';

@Component({
    selector: 'kpn-app',
    template: `
    <subscription-list></subscription-list>
    <product-summary></product-summary>
    `,
    directives: [SubscriptionListComponent, ProductSummaryComponent]
})

export class AppComponent { 
 title = 'List of subscriptions';
}
