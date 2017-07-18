import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
   
    }

        ngAfterViewInit(){
         
         $.getScript('../../../assets/js/datatables.js');
         $.getScript('../../../assets/js/material-dashboard.js');
         
       
           
        
        console.log("AfterView");
        
        }
}
