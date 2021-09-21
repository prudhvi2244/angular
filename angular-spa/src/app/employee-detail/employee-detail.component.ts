import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  eid:number=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    let id=parseInt(this.route.snapshot.paramMap.get('eid') || '');
    this.eid=id

  }

}
