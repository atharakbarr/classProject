import { SidebarItems } from './../../Models/sidebar-items';

import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  menuItems : SidebarItems[] = [];

  constructor() { 
     this.menuItems.push(new SidebarItems("Dashboard", "dashboard", "/dashboard",false));
     this.menuItems.push(new SidebarItems("Home", "home", "/home" ,false));
     this.menuItems.push(new SidebarItems("Fee", "dashboard","/fee" , false));
     this.menuItems.push(new SidebarItems("Reports", "pie_chart","/reports" , false));
     this.menuItems.push(new SidebarItems("SMS Sender", "comment","/smsSender" , false));
  }


  addItem(menu : SidebarItems){   
    this.menuItems.push(menu);
  }

  getMenu(){
    return this.menuItems;
  }

}
