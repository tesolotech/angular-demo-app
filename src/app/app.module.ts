import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetUserComponent } from './greet-user/greet-user.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { EmployeeService } from './core/services/employee.service';
import { DepartmentdetailService } from './core/services/departmentdetail.service';
import { DepartmentService } from './core/services/department.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetUserComponent,
    routingComponent,
    PageNotFoundComponent,
    DepartmentdetailComponent,
    CreateEmployeeComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, DepartmentdetailService, DepartmentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
