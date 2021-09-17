import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private _cservice:CustomerService) { }
  customers=[]
  ngOnInit(): void {
       this.customers=this._cservice.getAllCustomers()
  }

  

}
