import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private  http:HttpClient) { }

 getAllEmployees()
 {
   return this.http.get('http://localhost:8080/employee/allEmployees')
 }

 getEmployeeByID(eid:number)
 {
  return this.http.get(`http://localhost:8080/employee/${eid}`)
 }

}
