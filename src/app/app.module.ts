import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { tesComponent } from './tes/tes.component';
import { execreportComponent } from './execreport/execreport.component';
import { execstatusComponent } from './execstatus/execstatus.component';
import { ProjectsComponent } from './projects/projects.component';
import { CharterComponent } from './charter/charter.component';
import { TeamComponent } from './team/team.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { ToolsComponent } from './tools/tools.component';
import { GoalsComponent } from './goals/goals.component';
import { cmfaComponent } from './cmfa/cmfa.component';
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
import { SigninComponent } from './signin/signin.component';
import { SchedulerAdminComponent } from './scheduler-admin/scheduler-admin.component';
import { ChartsModule } from 'ng2-charts';
import {AuthManager} from './signin/authmanager';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VectoradminComponent } from './vectoradmin/vectoradmin.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ModalModule } from 'ngx-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SortablejsModule } from 'angular-sortablejs';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CharterComponent,
    execstatusComponent,
    execreportComponent,
    TeamComponent,
    tesComponent,
    EnvironmentsComponent,
    ToolsComponent,
    GoalsComponent,
    DocumentationComponent,
    ContactComponent,
    SecurityCheckComponent,
    ReportsComponent,
    ImportantDatesComponent,
    HomeComponent,
    cmfaComponent,    
    Goal2016Component,
    Goal2017Component,
    SigninComponent,
    SchedulerAdminComponent,
    AdminpanelComponent,
    VectoradminComponent
  ],
  imports: [
    MyDatePickerModule,
    BrowserModule,
    FormsModule,
    SidebarModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule,
    ToolTipModule,
    AppRoutingModule, 
    ChartsModule,
    SortablejsModule,
    Ng2SmartTableModule,
    MultiselectDropdownModule,
    MyDateRangePickerModule,
    ModalModule.forRoot()
  ],
  providers: [AuthManager,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
