import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }


        ngAfterViewInit(){
         
         $.getScript('../../../assets/js/datatables.js');
         $.getScript('../../../assets/js/material-dashboard.js');
         
       
           
        
        console.log("AfterView");
        
        }

  ngOnInit() {
  }

}
