import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  getEmployees()
  {
    return [
      {eid:1,ename:'Rajeev',ecity:'Goa'},
      {eid:2,ename:'Rajeev',ecity:'Goa'},
      {eid:3,ename:'Rajeev',ecity:'Goa'},
      {eid:4,ename:'Rajeev',ecity:'Goa'},
      {eid:5,ename:'Rajeev',ecity:'Goa'}
    ]
  }

}
