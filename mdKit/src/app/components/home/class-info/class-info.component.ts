import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.css']
})
export class ClassInfoComponent implements OnInit {
  
  ngOnInit(){
   
 
  }
  
  constructor() { }



        ngAfterViewInit(){
         $.getScript('../../assets/js/datatables.js');
        console.log("AfterView");
        
        }



}
