export class Item_class
{
    type:string;
    price_item:number;
    weight_item:number;
    dimension:string;
    qty:number;

    constructor(type:string, ppi:number, wpi:number, specs:string, qty:number)
    {
        this.type=type;
        this.price_item=ppi;
        this.weight_item=wpi;
        this.dimension=specs;
        this.qty=qty;
    }
}