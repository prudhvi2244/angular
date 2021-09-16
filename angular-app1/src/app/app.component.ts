import { Component } from "@angular/core";
@Component({
  selector:'#raj',
  template:`
          <div class="container">
            <h1 class="text-primary">Welcome To Angular</h1>           
            <hr/>
            
            <div *ngIf="isLoggedIn;then ifBlock;else elseBlock">
            </div>

            <ng-template #ifBlock>
              <h2>Login Success!,Welcome User</h2>
              <hr/>
              <ul class="list-group" *ngFor="let technology of technologies">
                            <li class="list-group-item">{{technology}}</li>
              </ul>
              <hr/>
              <h3>Employees Information</h3>
              <table class="table table-bordered table-striped table-hover">
               <thead>
                <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Employee City</th>
                <th></th>
                </tr>
               </thead>
               <tbody>
                <tr *ngFor="let employee of employees">
                <td>{{employee.eid}}</td>
                <td>{{employee.ename}}</td>
                <td>{{employee.ecity}}</td>
                <td>
                  <button class="btn btn-primary">Edit</button> | 
                  <button class="btn btn-danger">Delete</button> 
                </td>
                
                </tr>
               </tbody>
              </table>
            </ng-template>

            <ng-template #elseBlock>
              <form>
              <div class="form-group">
               <label>Username</label>
               <input class="form-control"/>
              </div>
              <div class="form-group">
               <label>Password</label>
               <input type="password" class="form-control"/>
              </div>
               <button class="btn mt-2 btn-success">Login</button>
              </form>
              <hr/>
              <div [ngSwitch]="employeeName">
               <div *ngSwitchCase="'Rajeev'">
                <h3 class="text-success">Welcome {{employeeName}}</h3>
                <hr/>
               </div>
               <div *ngSwitchCase="'Prudhvi'">
                <h3 class="text-danger">Welcome {{employeeName}}</h3>
                <hr/>
               </div>
               <div *ngSwitchDefault>
                <h3 class="text-info">Welcome Guest</h3>
                <hr/>
               </div>
              </div>
            </ng-template>
            </div>

            `,
  styles:[ ]
})

export class AppComponent {
 
   isLoggedIn:boolean=true
   technologies:string[]=["Java","React JS","Angular","Node JS","Django","Python"]
   employees:object[]=[
       {eid:1,ename:'Prudhvi',ecity:'Goa'},
       {eid:2,ename:'Prakash',ecity:'Goa'},
       {eid:3,ename:'Pavan',ecity:'Goa'},
       {eid:4,ename:'Pratap',ecity:'Goa'},
       {eid:5,ename:'Praveen',ecity:'Goa'},
       {eid:6,ename:'Praveen',ecity:'Goa'},
   ]

   employeeName:string='Prudhvi'

  
}
