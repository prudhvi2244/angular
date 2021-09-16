import { Component } from "@angular/core";
@Component({
  selector:'#raj',
  template:`
            <h1>Welcome To Angular</h1>           
            <hr/>
            <h2>Username:{{username}}</h2>
            <h2>{{wish()}}</h2>
            <h2>{{ 422 +52525+2522525252252+5525*515*515155}}</h2>
            <h2>FullName :{{ firstName + lastName }}</h2>
            <h3>First Name <input value="Rajeev"/></h3>
            <h4 [id]="id1">Property Binding</h4>
            <button [disabled]="isDisabled">Click</button>
            <h4 class="text-success">Welcome To Class Binding</h4>
            <h4 [class]="dangerClass">Welcome To Class Binding</h4>
            <h4 [class]="dangerClass" class="text-success">Welcome To Class Binding</h4>
            <h4 [class.text-danger]='hasError'>Welcome To Angular</h4>

            <h1 [ngClass]='myStyles'>Applying Multiple Styles</h1>
            <hr/>
            <h1 [style.color]='"blue"'>Welcome To Style Binding</h1>
            <h1 [style.color]='blueClass'>Welcome To Style Binding</h1>
            <h1 [style.color]='hasError?"red":"green"'>Welcome To Style Binding!</h1>
            <hr/>
            <h1 [ngStyle]='myStyles1'>Welcome To Style Binding</h1>


            `,
  styles:[
    `
      .text-success
      {
        color:green
      }
      .text-danger
      {
        color:red
      }
      .text-special
      {
        font-style:italic
      }
    `
  ]
})

export class AppComponent {

  username:string='Raj'
  blueClass='blue'
  firstName='Praveen'
  lastName='Raj'
  id1="ID1"
  isDisabled=false
  dangerClass='text-danger'
  hasError:boolean=false
  myStyles={
    'text-success':true,
    'text-special':false
  }


  myStyles1={
    'backgroundColor':'yellow',
    'color':'red',
    'textAlign':'center'
  }

 wish()
 {
  return "Welcome To Angular"
 }
}
