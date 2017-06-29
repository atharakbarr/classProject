import { Component, OnInit } from '@angular/core';
import { NavPillItem } from "app/Models/navPillItem";
import { navPillsService } from "app/Services/shared/navPills.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private localArray : NavPillItem[] = [];

  constructor(private service : navPillsService) { 
     this.localArray = this.service.getMenu();
  }
  ngOnInit() {
  }

}
