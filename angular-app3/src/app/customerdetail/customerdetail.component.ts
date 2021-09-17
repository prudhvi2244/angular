import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  constructor(private _cservice:CustomerService) { }
  customers=[]
  ngOnInit(): void {
       this.customers=this._cservice.getAllCustomers()
  }
 

}
