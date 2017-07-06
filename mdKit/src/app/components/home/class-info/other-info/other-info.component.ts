import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.css']
})
export class OtherInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

        ngAfterViewInit(){
         
         $.getScript('../../../assets/js/datatables.js');
         $.getScript('../../../assets/js/material-dashboard.js');
         
      
        
        }
}
