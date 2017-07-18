import { reportNavItems } from './../../Models/reportNavItems';
import { NavPillItem } from './../../Models/navPillItem';


import { Injectable } from '@angular/core';

@Injectable()
export class navPillsService {

  menuItems : NavPillItem[] = [];
  reportItems : reportNavItems [] = [];

  constructor() { 
    
     this.menuItems.push(new NavPillItem("Institute", "home", "School",true));
     this.menuItems.push(new NavPillItem("Class Info", "info", "Class" ,false));
     this.menuItems.push(new NavPillItem("Student's Info", "face","Student" , false));
     this.menuItems.push(new NavPillItem("Staff", "group","Staff" , false));
     this.menuItems.push(new NavPillItem("GR Register", "class","Gr" , false));

     this.reportItems.push(new NavPillItem("Reports", "description", "reports",true));
     this.reportItems.push(new NavPillItem("DCR", "insert_chart", "dcr" ,false));
  }


  addItem(menu : NavPillItem){   
    this.menuItems.push(menu);
  }

  getMenu(){
    return this.menuItems;
  }

 addReport(reportItm : reportNavItems) {
  this.reportItems.push(reportItm);
 }
 getReport(){
    return this.reportItems;
  }
}
