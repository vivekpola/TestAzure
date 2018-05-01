import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent  {
  selected: string = '';
  team=[{'name':'Team Vector','value':'Team Vector'},
  {'name': 'oneteam','value':'One controller & IP direct'}, 
  {'name': 'arristeam','value':'Arris Platform'}, 
  {'name': 'videoqualityteam','value':'Video Quality'} ,
  {'name': 'ciscoteam','value':'Cisco Platform'} ,
  {'name': 'hosteam','value':'Bulk Engineering'} , 
  {'name': 'videoprocteam','value':'Video Processors'} ,
  {'name': 'offshoreteam','value':'Offshore'}];
  constructor() { }
   public oneteam=true;
  public arristeam=true;
  public videoqualityteam=true;
  public ciscoteam=true;
  public hosteam=true;
  public videoprocteam=true;
  public offshoreteam=true;

  ngOnInit() {
    this.selected = 'Team Vector';
  }
  onteamChange(team) {
  
    if(team=='One controller & IP direct')
    {
      
      this.oneteam=true;
      this.arristeam=false;
      this.videoqualityteam=false;
      this.ciscoteam=false;
      this.hosteam=false;
      this.videoprocteam=false;
      this.offshoreteam=false;
    }
    else if(team=='Arris Platform')
    {
      this.arristeam=true;
      this.oneteam=false;
      this.videoqualityteam=false;
      this.ciscoteam=false;
      this.hosteam=false;
      this.videoprocteam=false;
      this.offshoreteam=false;
    }
    else if(team=='Video Quality')
    {
       this.videoqualityteam=true;
      this.oneteam=false;
      this.arristeam=false;
      this.ciscoteam=false;
      this.hosteam=false;
      this.videoprocteam=false;
      this.offshoreteam=false;
    }
    else if(team=='Cisco Platform')
    {
      this.oneteam=false;
      this.arristeam=false;
      this.videoqualityteam=false;
      this.ciscoteam=true;
      this.hosteam=false;
      this.videoprocteam=false;
      this.offshoreteam=false;
    }
    else if(team=='Bulk Engineering')
    {
      this.oneteam=false;
      this.arristeam=false;
      this.videoqualityteam=false;
      this.ciscoteam=false;
      this.hosteam=true;
      this.videoprocteam=false;
      this.offshoreteam=false;
    }
    else if(team=='Video Processors')
    {
      this.oneteam=false;
      this.arristeam=false;
      this.videoqualityteam=false;
      this.ciscoteam=false;
      this.hosteam=false;
      this.videoprocteam=true;
      this.offshoreteam=false;
    }
    else if (team=='Offshore')
    {
      this.oneteam=false;
      this.arristeam=false;
      this.videoqualityteam=false;
      this.ciscoteam=false;
      this.hosteam=false;
      this.videoprocteam=false;
      this.offshoreteam=true;
    }
    else{
      this.oneteam=true;
      this.arristeam=true;
      this.videoqualityteam=true;
      this.ciscoteam=true;
      this.hosteam=true;
      this.videoprocteam=true;
      this.offshoreteam=true;
    }

    
    
  }
}
