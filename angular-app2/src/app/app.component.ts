import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `<div class="container mt-2">
      <app-employee-list></app-employee-list>  
      <app-employee-detail></app-employee-detail>  
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    
  
}
