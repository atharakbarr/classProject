import { Component, OnInit , AfterViewInit} from '@angular/core';
declare var $ : any;

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementRef: any;
  title = 'app';
  constructor (){

       
   }

 ngOnInit(){
    
 }
 ngAfterViewInit(){
  
        $.getScript('../../assets/js/material-dashboard.js');
        $.getScript('../../assets/js/bootstrap.min.js');
        $.getScript('../../assets/js/material.min.js');
        $.getScript('../../assets/js/perfect-scrollbar.jquery.min.js');
        
        $.getScript('../../assets/js/jquery-3.1.1.min.js');
        $.getScript('../../assets/js/jquery-ui.min.js');
        $.getScript('../../assets/js/material.min.js');
        $.getScript('../../assets/js/jquery.validate.min.js');

        $.getScript('../../assets/js/bootstrap-notify.js');
        $.getScript('../../assets/js/jquery.bootstrap-wizard.js');
        $.getScript('../../assets/js/chartist.min.js');
        $.getScript('../../assets/js/moment.min.js');

        $.getScript('../../assets/js/jquery.sharrre.js');
        $.getScript('../../assets/js/bootstrap-datetimepicker.js');
        $.getScript('../../assets/js/jquery-jvectormap.js');
        $.getScript('../../assets/js/nouislider.min.js');
        
        $.getScript('https://maps.googleapis.com/maps/api/js');
        $.getScript('../../assets/js/jquery.select-bootstrap.js');
        $.getScript('../../assets/js/jquery.datatables.js');
        $.getScript('../../assets/js/sweetalert2.js');
        
        $.getScript('../../assets/js/jasny-bootstrap.min.js');
        $.getScript('../../assets/js/fullcalendar.min.js');
        $.getScript('../../assets/js/jquery.tagsinput.js');
        $.getScript('../../assets/js/demo.js');
        
        $.getScript('../../assets/js/charts.js');
        
 }
}
