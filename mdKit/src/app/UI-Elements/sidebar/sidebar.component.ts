import { Component, OnInit } from '@angular/core';
import { SidebarItems } from "app/Models/sidebar-items";
import { MenuService } from "app/Services/shared/menu.service";
declare var $ : any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private localArray : SidebarItems[] = [];

     constructor(private service : MenuService) { 
     this.localArray = this.service.getMenu();
  }

  ngOnInit() {
    
  }
 ngAfterViewInit(){
        $.getScript('../../assets/js/material-dashboard.js');
        $.getScript('../../assets/js/demo.js');
        console.log("AfterView");
        
        }
}
