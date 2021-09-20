import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private rservice:RegistrationService) { }

  ngOnInit(): void {
  }

  registration=new Registration('','','','')


  handleForm()
  {
    this.rservice.register(this.registration).subscribe(
      data=>
      {
        console.log(data)
        this.registration=new Registration('','','','')
      },
        error=>
        {
          console.log(error)
          this.registration=new Registration('','','','')
        }
          )
  }

}
