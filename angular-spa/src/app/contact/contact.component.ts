import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg1:any=''
  constructor(private cservice:ContactService) { }

  contact=new Contact('','','')  

  ngOnInit(): void {
  }

 

  handleForm()
  {
    this.cservice.register(this.contact).subscribe(
      data=>
      {
        console.log(typeof(data))
        console.log(data)
        this.msg1=data
        this.contact=new Contact('','','')
      },
        error=>console.log(error)
    )
  }

}
