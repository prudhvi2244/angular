import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'all-employees',component:AllEmployeesComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
