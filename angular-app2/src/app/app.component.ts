import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
     <div>
       <button (click)='clickEvent($event)'>Click</button>
       <button (click)='getCurrentDateTime()'>Display Current Date and Time</button>
       <h1 *ngIf="displayDateTime">{{dt}}</h1>
       <pre>Username : <input #username/></pre>
       <button (click)="getUsername(username.value)">Get Username</button>
       <hr/>
       <h3>Username : {{user}}</h3>
       </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dt:Date=new Date()
  user=''
  displayDateTime:boolean=false

  getUsername(username)
  {
   this.user=username
  }

  clickEvent(event)
  {
    console.log(event)
  }
  getCurrentDateTime()
  {
    this.displayDateTime=true
    this.dt=new Date()
  }
}
