import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url:string='http://localhost:8080/employees/allEmployees'

  constructor(private _http:HttpClient) { }

  getAllEmployees():Observable<any>
  {
    return this._http.get(this._url)
  }

}
