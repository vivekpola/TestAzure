import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  HomeserviceService} from './homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeserviceService]
})
export class HomeComponent implements OnInit {
  data: Observable<Array<any>>;
  schedulerdata: Observable<Array<any>>;
  constructor(service:HomeserviceService) {
    this.data = service.getProjectsDETAILS();
    this.schedulerdata = service.getschedule();
    
   }

  ngOnInit() {
  }

}
