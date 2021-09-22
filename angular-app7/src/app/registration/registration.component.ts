import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  registrationForm=this.fb.group({
    fname:['',[Validators.required,Validators.minLength(4)]],
    lname:[''],
    password:[''],
    cpassword:[''],
    city:[''],
    state:[''],
  })

  loadData()
  {
    this.registrationForm.patchValue({
      fname:'Raj',
      lname:'Prudhvi',
      password:'123456',
      cpassword:'123456'
    })
  }

}
