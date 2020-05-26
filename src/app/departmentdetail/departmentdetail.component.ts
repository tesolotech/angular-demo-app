import { Component, OnInit } from '@angular/core';
import { DepartmentdetailService } from '../core/services/departmentdetail.service';
import { Router, ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {

  public detailSets = {};
  public DepartmentId: number;
  constructor(private departDetailService: DepartmentdetailService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
      this.route.paramMap.subscribe((param: ParamMap) => {
          this.DepartmentId = parseInt(param.get('id'));
      });

      this.departDetailService.GetDepartmentDetailById(this.DepartmentId).subscribe(detail => {
      this.detailSets = detail;
      console.log(this.detailSets);
    });
  }
  goPrevoius() {
    const previous = this.DepartmentId - 1;
    this.router.navigate(['/demartment', previous - 1]);
  }
  goNext() {
    const next = this.DepartmentId + 1;
    this.router.navigate(['/demartment', next]);
  }

}
