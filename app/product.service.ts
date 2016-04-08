import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {ProductData} from './product-data';
import {Subscription} from './subscription';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(public http: Http) {}
	  
  getProductDetails() {    		
     /**
  	 * [Converts response from api to objects of type ProductData
  	 * and the subscription_list array to an array of Subscription objects]
  	 * @type {[type]}
  	 */
  	return this.http.get('/app/api/data.json')
    	.map((responseData) => {
      		return responseData.json();
    	})
    	.map(detail => {
	      	let detail:ProductData = new ProductData({
	      			name: detail.name,
	      			subscription_list: detail.subscription_list,
	      			device_original_price: detail.device_original_price,
	      			images_list: detail.images_list
	      		});

	      	let subscriptions: Subscription[] = [];

	      	if (detail.subscription_list) {
	        	detail.subscription_list.forEach((subsc) => {
	          	subscriptions.push(
	                     new Subscription({
									id: subsc.id, 
									name: subsc.name,
									volume:subsc.volume,
									data:subsc.data,
									device_discount: subsc.device_discount,
									price: subsc.price,
									price_discount:subsc.price_discount
	                            }));
	        	});
      		}
      	detail.subscription_list = subscriptions;
      	return detail;
	  });
  	}
}	
