import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getAllCustomers()
  {
    return[
      {cid:1,cname:'Raj',ccity:'Hyderabad'},
      {cid:2,cname:'Rajeev',ccity:'Hyderabad'},
      {cid:3,cname:'PRaveen',ccity:'Hyderabad'},
      {cid:4,cname:'Suman',ccity:'Hyderabad'},
      {cid:5,cname:'Kern',ccity:'Hyderabad'},
      {cid:6,cname:'John',ccity:'Goa'},
    ]
  }
}
