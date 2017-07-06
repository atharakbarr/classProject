import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css']
})
export class StaffInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    ngAfterViewInit(){
         
         $.getScript('../../../assets/js/datatables.js');
         $.getScript('../../../assets/js/material-dashboard.js');
        }
}
