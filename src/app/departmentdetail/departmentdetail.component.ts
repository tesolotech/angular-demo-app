import { Component, OnInit, Input } from '@angular/core';
import { DepartmentdetailService } from '../core/services/departmentdetail.service';
import { Router, ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {

//  @Input() inputValues;
  public detailSets = {};
  public DepartmentId: number;
  constructor(private departDetailService: DepartmentdetailService, private route: ActivatedRoute, private router: Router ) {  }

  ngOnInit() {
      this.route.paramMap.subscribe((param: ParamMap) => {
          this.DepartmentId = parseInt(param.get('id'));

          // call service methods
          this.departDetailService.GetDepartmentDetailById(this.DepartmentId).subscribe(detail => {
            this.detailSets = detail;

          });

      });

  }
  goPrevoius() {
    let previous = (this.DepartmentId - 1);
    this.router.navigate(['/demartment', previous]);
  }
  goNext() {
    let next = this.DepartmentId + 1;
    this.router.navigate(['/demartment', next]);
  }

}
