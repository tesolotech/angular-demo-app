import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetUserComponent } from './greet-user/greet-user.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/greetUser', pathMatch: 'full'},
  { path: 'greetUser', component: GreetUserComponent },
  { path: 'demartments', component: DepartmentListComponent },
  { path: 'demartment/:id', component: DepartmentdetailComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employee-form', component: CreateEmployeeComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent, EmployeeListComponent];
