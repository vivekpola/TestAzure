import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentsService } from './environments.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css'],
  providers: [EnvironmentsService]
})
export class EnvironmentsComponent implements OnInit {

 data: Observable<Array<any>>;
 ciscocon: Observable<Array<any>>;
 ciscoconecs: Observable<Array<any>>;
 videoproc: Observable<Array<any>>;
 onecon: Observable<Array<any>>;
 headenddev: Observable<Array<any>>;
 eassystem: Observable<Array<any>>;
 hospitalitydev: Observable<Array<any>>;
 vespacode: Observable<Array<any>>;
 vespaplatform: Observable<Array<any>>;
  constructor(private service: EnvironmentsService) {
    this.data = service.getariscon();
    this.ciscocon = service.getciscocon();
    this.ciscoconecs = service.getciscoconecs();
    this.videoproc = service.getenvvideoproc();
    this.onecon = service.getenvonecon();
    this.headenddev = service.getheadenddev();
    this.eassystem= service.geteassystem();
    this.hospitalitydev = service.gethospitalitydev();
    this.vespacode = service.getvespacode();
    this.vespaplatform = service.getvespaplatform();
    console.log("AppComponent.data:" + this.data);
  }
  


  ngOnInit() {
  }

}
