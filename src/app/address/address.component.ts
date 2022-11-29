import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Output()
  status=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
 save(){
  this.status.emit(true)
 }
  

}
