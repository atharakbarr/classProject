import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-dcr',
  templateUrl: './dcr.component.html',
  styleUrls: ['./dcr.component.css']
})
export class DcrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 ngAfterViewInit(){
         
         $.getScript('../../../assets/js/bootstrap-datetimepicker.js');
         $.getScript('../../../assets/js/material-dashboard.js');
         $.getScript('../../../assets/js/dt.js');
       
           
        
        console.log("AfterView");
        
        }
}
