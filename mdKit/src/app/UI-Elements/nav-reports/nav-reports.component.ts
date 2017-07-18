import { navPillsService } from 'app/Services/shared/navPills.service';
import { reportNavItems } from './../../Models/reportNavItems';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-reports',
  templateUrl: './nav-reports.component.html',
  styleUrls: ['./nav-reports.component.css']
})
export class NavReportsComponent implements OnInit {

  private localArray : reportNavItems[] = [];

  constructor(private service : navPillsService) { 
  this.localArray = this.service.getReport();
  }
  ngOnInit() {
  }

}
