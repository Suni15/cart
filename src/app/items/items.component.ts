import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from '../Product';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  type="any";
  @Output()
  status=new EventEmitter<any>();
  customerflag: boolean=true;
  addressflag:boolean=true;
  constructor() { }

  @Input()
  cartList:Product[]=[];

  ngOnInit(): void {
  }
  backtocustomer(){
 this.status.emit(true);
    
  }
  changeaddress(){
 
 
  }

}
