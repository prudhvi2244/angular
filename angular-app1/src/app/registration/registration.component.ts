import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private rservice:RegistrationService) { }

  registration=new Registration('','','')


  handleForm()
  {
     console.log(this.registration)
     this.rservice.register(this.registration).subscribe(data=>
      {
        console.log(data["msg"])
        this.registration=new Registration('','','')
      },
      error=>
      {
        console.log(error)
      })
    }

}
