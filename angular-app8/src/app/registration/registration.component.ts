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
    fname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    lname:[''],
    password:[''],
    cpassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      pincode:['']
    })
  })




  // registrationForm=new FormGroup({
  //   fname:new FormControl(''),
  //   lname:new FormControl(''),
  //   password:new FormControl(''),
  //   cpassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     pincode:new FormControl('')
  //   })
  // })


  handleForm()
  {
    console.log(this.registrationForm.value)
  }

  loadData()
  {
    this.registrationForm.setValue({
      fname:'Raj',
      lname:'Prudhvi',
      password:'1234',
      cpassword:'1234',
      address:{
        city:'Bangalore',
        state:'Karnataka',
        pincode:'12345'
      }
    })
  }

}
