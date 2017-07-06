import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  constructor() { }

        ngAfterViewInit(){
         
         $.getScript('../../../assets/js/datatables.js');
         $.getScript('../../../assets/js/material-dashboard.js');
         
       
           
        
        console.log("AfterView");
        
        }
  ngOnInit() {
  }

}
