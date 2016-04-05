import {Component} from 'angular2/core';
import {SubscriptionListComponent} from './subscription-list.component';

@Component({
    selector: 'kpn-app',
    template: `<h1>KPN Assignment</h1>
    <subscription-list></subscription-list>
    `,
    directives: [SubscriptionListComponent]
})

export class AppComponent { 
 title = 'List of subscriptions';
}
