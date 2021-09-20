import { Component} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  constructor(private fb:FormBuilder){}

  cities=["Hyderabad","Goa","Mumbai","Kolkata"]

  registrationForm=this.fb.group({
    username:['',[Validators.required,Validators.minLength(4)]],
    password:[''],
    cpassword:[''],
    address:this.fb.group(
    {
      city:[''],
      state:['']
    })
  })

  loadData()
  {

  }
 
 
}
