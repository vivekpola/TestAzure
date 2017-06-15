import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './home/home.component';
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
import { Goal2016Component } from './goal-2016/goal-2016.component';
import { Goal2017Component } from './goal-2017/goal-2017.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'charter', component: CharterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'environments', component: EnvironmentsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'important-dates', component: ImportantDatesComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'security-check', component: SecurityCheckComponent },
  { path: 'team', component: TeamComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'goal-2016', component: Goal2016Component },
  { path: 'goal-2017', component: Goal2017Component },
  { path: 'signin', component: SigninComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home',  pathMatch: 'full' }
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