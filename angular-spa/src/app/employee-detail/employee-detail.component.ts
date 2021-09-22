import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  eid:number=0;
  employee:Employee=new Employee(1,'','','')
  constructor(private route:ActivatedRoute,private eservice:EmployeeService) { }

  ngOnInit(): void {

    let id=parseInt(this.route.snapshot.paramMap.get('eid') || '');
    this.eid=id
    this.eservice.getEmployeeByID(this.eid).subscribe(data=>
      {
        
        this.employee=new Employee(data.eid,data.ename,data.ecity,data.esalary)
        console.log(this.employee)
      })

  }

}
