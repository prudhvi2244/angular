import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private  http:HttpClient) { }

 getAllEmployees()
 {
   return this.http.get('http://localhost:8080/employee/allEmployees')
 }

 getEmployeeByID(eid:number):Observable<Employee>
 {
  return this.http.get<Employee>(`http://localhost:8080/employee/${eid}`)
 }

}
