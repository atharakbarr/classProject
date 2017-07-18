import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-other-reports',
  templateUrl: './other-reports.component.html',
  styleUrls: ['./other-reports.component.css']
})
export class OtherReportsComponent implements OnInit {

  constructor() { }
  ngAfterViewInit(){
         
         $.getScript('../../../assets/js/bootstrap-datetimepicker.js');
         $.getScript('../../../assets/js/material-dashboard.js');
         $.getScript('../../../assets/js/dt.js');
       
           
        
        console.log("AfterView");
        
        }
  ngOnInit() {
  }

}
