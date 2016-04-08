/**
 * The subscription class which contains all information about
 * the subscription. 
 */
export class Subscription {  
	public id: integer,	
  	public name: string,
	public volume: string,
	public data: integer,
	public device_discount: integer,
	public price: integer,
	public price_discount: integer

	constructor(obj){
		this.id = obj.id,
		this.name = obj.name,
		this.volume = obj.volume,
		this.data = obj.data,
		this.device_discount = obj.device_discount,
		this.price = obj.price,
		this.price_discount = obj.price_discount
	}

	getTotalPerMonth() {
		return this.price - this.price_discount;
	};

	getDataString(mb) {
		if (mb >= 1000) {
			return mb/1000 + " GB";	
		} 
		return mb + " MB";
	}
}
