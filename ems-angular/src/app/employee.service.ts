import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
 
  baseUrl:string='http://localhost:8080/employees'

 saveEmployee(employee:Employee)
 {
  return this.http.post(`${this.baseUrl}/addEmployee`,employee)
 }

 getAllEmployees()
 {
   return this.http.get(`${this.baseUrl}/allEmployees`)
 }


 deleteEmployee(eid:number)
 {
  return this.http.delete(`${this.baseUrl}/${eid}`)
 }

}
