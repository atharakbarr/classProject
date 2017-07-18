import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-std-add-edit',
  templateUrl: './std-add-edit.component.html',
  styleUrls: ['./std-add-edit.component.css']
})
export class StdAddEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 ngAfterViewInit(){
         
         $.getScript('../../../assets/js/validation.js');
    
        $.getScript('../../assets/js/material-dashboard.js');
      
        console.log("AfterView");
        
        console.log("AfterView");
        
        }
}
