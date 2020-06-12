import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../core/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  inputValue = 'this is parent value';
  public DepartmentLists = {};
  constructor(private DepartService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.DepartService.GetAllDepartment().subscribe(data => {this.DepartmentLists = data; });
  }

  getDetails(id) {
    this.router.navigate(['/demartment', id]);

  }

}
