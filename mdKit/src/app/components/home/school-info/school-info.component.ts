import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
   
    }

        ngAfterViewInit(){
        $.getScript('../../assets/js/material-dashboard.js');
        $.getScript('../../assets/js/material.min.js');
        $.getScript('../../assets/js/demo.js');
        console.log("AfterView");
        
        }
}
