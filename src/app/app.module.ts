import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { ProjectsComponent } from './projects/projects.component';
import { CharterComponent } from './charter/charter.component';
import { TeamComponent } from './team/team.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { ToolsComponent } from './tools/tools.component';
import { GoalsComponent } from './goals/goals.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ContactComponent } from './contact/contact.component';
import { SecurityCheckComponent } from './security-check/security-check.component';
import { ReportsComponent } from './reports/reports.component';
import { ImportantDatesComponent } from './important-dates/important-dates.component';
import { HomeComponent } from './home/home.component';

import {ScrollToModule} from 'ng2-scroll-to';
import { Goal2016Component } from './goal-2016/goal-2016.component';
import { Goal2017Component } from './goal-2017/goal-2017.component';
import {ToolTipModule} from 'angular2-tooltip'
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CharterComponent,
    TeamComponent,
    EnvironmentsComponent,
    ToolsComponent,
    GoalsComponent,
    DocumentationComponent,
    ContactComponent,
    SecurityCheckComponent,
    ReportsComponent,
    ImportantDatesComponent,
    HomeComponent,
    Goal2016Component,
    Goal2017Component,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule,
    ToolTipModule,
    AppRoutingModule,
    Ng2Bs3ModalModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
