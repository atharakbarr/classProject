import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { console.log("Construct"); }

  ngOnInit(){ console.log("AfterView");}
 
        ngAfterViewInit(){
  
      
     
        $.getScript('../../assets/js/charts.js');
        console.log("AfterView");
        
        }

}
