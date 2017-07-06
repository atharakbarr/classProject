
import { navPillsService } from './Services/shared/navPills.service';
import { VariablesService } from './Services/shared/variables.service';
import { MenuService } from './Services/shared/menu.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from "./components/app/app.component";
import { NavComponent } from "./UI-Elements/nav/nav.component";
import { SidebarComponent } from "./UI-Elements/sidebar/sidebar.component";
import { PluginComponent } from "./plugin/plugin.component";

import { Routes, RouterModule } from '@angular/router';
import { DashboardUIComponent } from './UI-Elements/dashboard-ui/dashboard-ui.component';

import { NavMainComponent } from './UI-Elements/nav-main/nav-main.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { SchoolInfoComponent } from "./components/home/school-info/school-info.component";
import { ClassInfoComponent } from "./components/home/class-info/class-info.component";
import { ClassComponent } from "./components/home/class-info/class/class.component";
import { StudentInfoComponent } from "./components/home/student-info/student-info.component";
import { BasicInfoComponent } from './components/home/class-info/basic-info/basic-info.component';
import { OtherInfoComponent } from './components/home/class-info/other-info/other-info.component';
import { StaffInfoComponent } from './components/home/staff-info/staff-info.component';



const APP_ROUTES : Routes = [
    
        {path : '', component : LoginComponent} ,
        {path : 'register', component : RegisterComponent}, 
        {path : 'dashboard', component : DashboardComponent},
        {path : 'login', component : LoginComponent},
        {path : 'home', component : HomeComponent,
      children : [
      {path : 'School', component : SchoolInfoComponent} ,
      {path : '', component : SchoolInfoComponent},
      {path : 'Class', component : ClassInfoComponent,
      children : [
        {path : '', component : ClassComponent} ,
        {path : 'classInfo', component : ClassComponent} ,
        {path : 'basicInfo', component : BasicInfoComponent},
        {path : 'otherInfo', component : OtherInfoComponent}  
      ]
      },
      {path : 'Student', component : StudentInfoComponent},     
      {path : 'Staff', component : StaffInfoComponent}     
     ]
    },
     
      
     
     
  

]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    SidebarComponent,
    PluginComponent,
    HomeComponent,
    DashboardUIComponent,
    SchoolInfoComponent,
    StudentInfoComponent,
    NavMainComponent,
    LoginComponent,
    RegisterComponent,
    ClassInfoComponent,
    ClassComponent,
    BasicInfoComponent,
    OtherInfoComponent,
    StaffInfoComponent,
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [MenuService, VariablesService,navPillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
