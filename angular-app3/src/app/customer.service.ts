import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './ICustomer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http:HttpClient)
{

}

  private _url="/assets/data/customers.json"

  getAllCustomers():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url)
  }
}
