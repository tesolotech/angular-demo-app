import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
// First way to create reactive form
//  employeeRegistration = new FormGroup({
//    EmpName: new FormControl(),
//    EmpAge: new FormControl(),
//    EmpSalary: new FormControl(),
//  });

// FormBuild service is another way to create from
employeeRegistration = this.fb.group({
  EmpName: ['', Validators.required],
  EmpAge: [''],
  EmpSalary: ['']
});

  ngOnInit() {
  }

  CreateEmployee(formData) {
    console.log(formData);
  }

}
