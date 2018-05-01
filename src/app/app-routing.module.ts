import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home.component';
import { tesComponent } from './tes/tes.component';
import { ProjectsComponent } from './projects/projects.component';
import { execstatusComponent } from './execstatus/execstatus.component';
import { CharterComponent } from './charter/charter.component';
import { TeamComponent } from './team/team.component';
import { EnvironmentsComponent } from './environments/environments.component';
import { ToolsComponent } from './tools/tools.component';
import { GoalsComponent } from './goals/goals.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ContactComponent } from './contact/contact.component';
import { cmfaComponent } from './cmfa/cmfa.component';
import { SecurityCheckComponent } from './security-check/security-check.component';
import { ReportsComponent } from './reports/reports.component';
import { ImportantDatesComponent } from './important-dates/important-dates.component';
import { Goal2016Component } from './goal-2016/goal-2016.component';
import { Goal2017Component } from './goal-2017/goal-2017.component';
import { SigninComponent } from './signin/signin.component';
import { SchedulerAdminComponent } from './scheduler-admin/scheduler-admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { VectoradminComponent } from './vectoradmin/vectoradmin.component';
import {AuthManager} from './signin/authmanager';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'charter', component: CharterComponent },
  { path: 'execstatus', component: execstatusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tes', component: tesComponent },
  { path: 'environments', component: EnvironmentsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'important-dates', component: ImportantDatesComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'reports', component: ReportsComponent},
  { path: 'cmfa', component: cmfaComponent },
  { path: 'security-check', component: SecurityCheckComponent },
  { path: 'team', component: TeamComponent },
  { path: 'tools', component:  ToolsComponent},
  { path: 'goal-2016', component: Goal2016Component },
  { path: 'goal-2017', component: Goal2017Component },
  { path: 'goals', component: GoalsComponent },
  { path: 'vectoradmin', component: VectoradminComponent },
  { path: 'signin', component: SigninComponent,canActivate: [AuthManager] },
  //{ path: 'security-check', component: SchedulerAdminComponent }, // change it when scheduler dashboard is ready
  { path: 'adminpanel', component: AdminpanelComponent,canActivate: [AuthManager] },
  { path: 'requestschedule', component: SecurityCheckComponent,canActivate: [AuthManager] },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home',  pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}