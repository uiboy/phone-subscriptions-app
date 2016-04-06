import {Subscription} from './subscription';

export class ProductData {
	public device_original_price: integer;
	public subscription_list : Subscription[];
	public images_list : string[];
	public name: string;

	constructor(obj){
		this.device_original_price = obj.device_original_price,
		this.subscription_list = obj.subscription_list,
		this.images_list = obj.images_list,
		this.name = obj.name
	}

	getFinalDevicePrice(discount) {
		return this.device_original_price - discount;
	}
}