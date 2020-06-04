import { Component, OnInit } from '@angular/core';
import { Employee } from '../core/models/employee';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public employeeModel = new Employee('', 0, 0);

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  CreateEmployee({ value, valid}: { value: Employee, valid: boolean }) {
  if ( valid) {
    this.employeeService.CreateEmployee(value).subscribe(data => console.log('Success', data),
                                                        error => console.log('Error', error));
  }

  }

}
