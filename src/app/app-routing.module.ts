import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


const routes: Routes = [
  {path:'', component:EmployeeHomeComponent},
  {path: 'employees', component:EmployeeListComponent},
  {path: 'addEmployee', component:EmployeeAddComponent},
  {path: 'editEmployee', component:EmployeeEditComponent},
  {path: 'details/:id', component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
