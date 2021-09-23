import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private eservice:EmployeeService) { }

  cities=['Hyderabad','Goa','Mumbai','Pune','Delhi','Bangalore']

  employee=new Employee(1,'','','',0.0)
  ngOnInit(): void {
  }

  handleForm()
  {
    console.log(this.employee)
    this.eservice.saveEmployee(this.employee).subscribe(data=>
      {
        console.log(data)
        this.employee=new Employee(1,'','','',0.0)
      },
      error=>console.log(error))
  }

}
