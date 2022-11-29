import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Order from './Order';
import Product from './Product';

@Injectable({
  providedIn: 'root'
})
export class UtilserviceService {
  productList=new BehaviorSubject<any>([]);

  products:Product[]=[];

  ar = new Array<number>();
  cn: number = 0;

  constructor(private http:HttpClient) { }

  public getOrders(user:any){
       return this.http.get("http://localhost:8085/orderByUser/"+user);
  }
  public removefromcart(orderId:number){    
    return this.http.delete("http://localhost:8085/cancelOrder/"+orderId);
  }

  public getO(user:any){
   return this.http.get<Order[]>("http://localhost:8085/orderByUser/"+user)
  }

  public removeItemfromcart(orderId:number,productId:number){    
    return this.http.delete("http://localhost:8085/delProductFromOrder/"+orderId+"/"+productId);
  }
  
  item(): Array<Product> {

   
    return this.products;
  }

  addcart(): number {
    this.cn = this.cn + 1;
    return this.cn;
  }

  adval(n: number): Array<number> {


    this.ar.push(n);
    return this.ar;
  }


  remar() {
    
    this.ar.splice(0, this.ar.length);
  }



validateGrocery():Observable<any> {

  return this.http.get<any>("http://localhost:8085/findAllproducts");
}



}

