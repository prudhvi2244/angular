import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor(private eservice:EmployeeService) { }
  employees:any=[]
  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees()
  {
    this.eservice.getAllEmployees().subscribe(data=>
      {
         this.employees=data
      },
      error=>console.log(error))
  }

  deleteEmployee(eid:number)
  {
    this.eservice.deleteEmployee(eid).subscribe(data=>
      {
        this.getAllEmployees()
      },
      error=>console.log(error))
  }

}
