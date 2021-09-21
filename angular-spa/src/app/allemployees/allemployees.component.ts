import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit{

  constructor(private eservice:EmployeeService,private router:Router)
  {

  }

  handleEmployees(employee:any)
  {
    this.router.navigate(['/employee-detail',employee.eid])
  }

  employees:any=[]
  ngOnInit()
  {
    this.eservice.getAllEmployees().subscribe(
      data=>
      {
        this.employees=data
      },
      error=>
      {
        console.log(error)
      }
    )
  }

  

}
