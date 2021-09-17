import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string='Raj'
  password:string='12345'
  dt=new Date()
  
  employee={
    eid:1,
    ename:'Rajeev',
    ecity:'Hyderabad'
    
  }

}
