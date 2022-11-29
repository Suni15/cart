import Product from "./Product";

export default class Order{
    constructor(public orderId:number,public product:Product[],public user:any,public totalCost:number){
        
    }
    
}