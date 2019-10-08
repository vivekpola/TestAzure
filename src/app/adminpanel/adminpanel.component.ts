import { Component, OnInit } from '@angular/core';
import {AdminpanelserviceService} from './adminpanelservice.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css'],
  providers: [AdminpanelserviceService]
})
export class AdminpanelComponent implements OnInit {
  mac:string= '';
  ip: string='';
  serial: string ='';
  model: string='';
  version: string='';
  controller: string='';
  product: string='';
  desc: string='';
  deviceinfo;
  labelAdded = false;

  constructor(private service:AdminpanelserviceService) { }

  ngOnInit() {
  }
  adddevice(){
    if(this.mac != "" && this.ip != ""){
     this.service.addnewdevice(this.mac,this.ip,
      this.serial,this.product,
      this.version,this.controller,
      this.model,this.desc);
      this.labelAdded = true;
      setTimeout(function(){
        this.labelAdded = false;
      },3000);
    }
    else{
      alert("please enter correct MAC and IP");
    }
  }

}
