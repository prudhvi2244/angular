import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url:string='http://localhost:8080/employees'

  constructor(private _http:HttpClient) { }

  getAllEmployees():Observable<any>
  {
    return this._http.get(`${this._url}/allEmployees`)
  }


  saveEmployee(emp:Employee)
  {
    return this._http.post<any>('http://localhost:8080/employees/saveEmployee',emp)
  }

}
