export class Bookings{
    userId:number;
    fromStreet:string;
    fromCity:string;
    fromCountry:string;
	toStreet:string;
    toCity:string;
    toCountry:string;
    weight:number;
    price:number;
	bDate:Date;
	rDate:Date;
	mode:string;
    status:string;
    items:Item_groups[];

    constructor( b:number, f1:string, f2:string, f3:string,t1:string, t2:string, t3:string, e:number, f:number, g:Date,h:Date, i:string, j:string, k:Item_groups[]){
        this.userId=b;
        this.fromStreet=f1;
        this.fromCity=f2;
        this.fromCountry=f3;
        this.toStreet=t1;
        this.toCity=t2;
        this.toCountry=t3;
        this.weight=e;
        this.price=f;
        this.bDate=g;
        this.rDate=h;
        this.mode=i;
        this.status=j;
        this.items=k;
    }
}

export class Item_groups{

    type:string;
	noOfItems:number;
	weightPerItem:number;
	pricePerItem:number;
	dimension:string;

    constructor( b:string, c:number, d:number, e:number, f:string){
        this.type=b;
        this.noOfItems=c;
        this.weightPerItem=d;
        this.pricePerItem=e;
        this.dimension=f;
    }
}