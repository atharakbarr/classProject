import { navPillsService } from './../../Services/shared/navPills.service';
import { NavPillItem } from './../../Models/navPillItem';
import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 private localArray : NavPillItem[] = [];

  constructor(private service : navPillsService) { 
     this.localArray = this.service.getMenu();
  }
  ngOnInit() {
  }
  
}
