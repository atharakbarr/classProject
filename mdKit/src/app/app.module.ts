import { ClassComponent } from './components/home/class-info/class/class.component';

import { navPillsService } from './Services/shared/navPills.service';
import { VariablesService } from './Services/shared/variables.service';
import { MenuService } from 'app/Services/shared/menu.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from "app/components/app/app.component";
import { NavComponent } from "app/UI-Elements/nav/nav.component";
import { SidebarComponent } from "app/UI-Elements/sidebar/sidebar.component";
import { PluginComponent } from "app/plugin/plugin.component";
import { HomeComponent } from "app/components/home/home.component";
import { Routes, RouterModule } from '@angular/router';
import { DashboardUIComponent } from './UI-Elements/dashboard-ui/dashboard-ui.component';
import { DashboardComponent } from "app/components/dashboard/dashboard.component";
import { SchoolInfoComponent } from "app/components/home/school-info/school-info.component";
import { StudentInfoComponent } from './components/home/student-info/student-info.component';
import { NavMainComponent } from './UI-Elements/nav-main/nav-main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClassInfoComponent } from './components/home/class-info/class-info.component';


const APP_ROUTES : Routes = [
     {path : '', component : LoginComponent},
     {path : 'login', component : LoginComponent},
     {path : 'register', component : RegisterComponent},
     {path : 'dashboard', component : DashboardComponent},
     {path : 'home', component : HomeComponent,
      children : [
      {path : 'School', component : SchoolInfoComponent} ,
      {path : '', component : SchoolInfoComponent},
      {path : 'Class', component : ClassInfoComponent,
      children : [
        {path : '', component : ClassComponent} ,
         {path : 'classInfo', component : ClassComponent} 
      ]
      },
      {path : 'Student', component : StudentInfoComponent}     
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
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [MenuService, VariablesService,navPillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
