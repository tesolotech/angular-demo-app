import { Component, OnInit } from '@angular/core';
import { DepartmentdetailService } from '../core/services/departmentdetail.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {

  public detailSets = {};
  constructor(private departDetailService: DepartmentdetailService, private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.departDetailService.GetDepartmentDetailById(id).subscribe(detail => {
      this.detailSets = detail;
      console.log(this.detailSets);
    });
  }

}
