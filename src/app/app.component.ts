import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  add(e:any){
    this.customerflag=true;
    this.addressflag=false;
    this.itemflag=false;
  }
  // proceed(e:any){
  //   this.addressflag=false;
  //   this.itemflag=true;
  //   this.customerflag=false;
  // }
 
  title = 'cart';
  addressflag:boolean=false;
  itemflag:boolean=false;
  customerflag:boolean=true;
address(e:any){
      this.addressflag=true;
      this.itemflag=false;
}



}
