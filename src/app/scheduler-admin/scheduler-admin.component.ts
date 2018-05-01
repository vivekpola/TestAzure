import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SchedulerAdminService } from './scheduler-admin.service';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
@Component({
  selector: 'app-scheduler-admin',
  templateUrl: './scheduler-admin.component.html',
  styleUrls: ['./scheduler-admin.component.css'],
  providers: [SchedulerAdminService]
})
export class SchedulerAdminComponent implements OnInit {
  filmResource: any;
  data: Observable<Array<any>>;
  currentData: Observable<Array<any>>;
  data_schedule: Observable<Array<any>>;
  data_slots: Observable<Array<any>>;
  getalldevices: Observable<Array<any>>;
  getschedulerhistory: Observable<Array<any>>;
  getselectipdataforreport: Observable<Array<any>>;
  getmetadataofreports: Observable<Array<any>>;
  isAdmin = false;
  newschedule = false;
  newschedule1 = false;
  selecteddevice = "temp";
  temp_devices_id;
  slotsavailability = true;
  settings = {
    columns: {
      ip_address: {
        title: 'IP Address',
        width: '10%'
      },
      mac_address: {
        title: 'MAC',
        width: '10%'
      },
      product: {
        title: 'Product',
        width: '10%'
      },
      controller: {
        title: 'Controller',
        width: '10%'
      },
      serial_number: {
        title: 'S/N',
        width: '5%'
      },
      version: {
        title: 'Version',
        width: '7%'
      },
      model: {
        title: 'Model',
        width: '7%'
      },
      desc_devices: {
        title: 'Description',
        width: '7%'
      },
      user_name: {
        title: 'Added by',
        width: '8%',
        editable: false
      }
    },
    pager: {
      display: false
    },
    actions: {
      add: true,
      edit: false,
      delete: false,
      position: 'right',
      custom: [
        {
          name: 'temp',
          title: 'temp'
        }
      ]
    },
    add: {
      confirmCreate: true,
    }

  };
  settings_scanhistory = {
    columns: {
      scheduled_date: {
        title: 'On',
        width: '15%'
      },
      start_time: {
        title: 'From',
        width: '10%'
      },
      end_time: {
        title: 'End time',
        width: '10%'
      },
      ip_address: {
        title: 'IP Address',
        width: '12%'
      },
      mac_address: {
        title: 'MAC',
        width: '12%'
      },
      product: {
        title: 'Product',
        width: '10%'
      },
      user_name: {
        title: 'Requested By',
        width: '10%'
      }
    },
    pager: {
      display: false
    },
    actions: {
      edit: false,
      delete: false,
      add: false,
      position: 'right',
      custom: [
        {
          name: 'temp',
          title: 'temp'
        }
      ]
    }

  };
  settings_reports = {
    columns: {
      scan_title: {
        title: 'Scan title',
        width: '30%'
      },
      scan_date: {
        title: 'Date',
        width: '20%'
      }
    },
    pager: {
      display: false
    },
    actions: {
      title: 'Download',
      edit: false,
      delete: false,
      add: false,
      position: 'right',
      custom: [
        {
          name: 'PDF',
          title: 'PDF  '
        },
        {
          name: 'CSV',
          title: 'CSV'
        }
      ]
    }

  };
  data4 = [];
  data_history = [];
  data_reports =[];
  temp_optionsModelIPS =[];
  optionsModelSeverity: number[];
  myOptionsSeverity: IMultiSelectOption[];
  optionsModelIPS: number[];
  myOptionsIPS: IMultiSelectOption[];
   myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy'}

  @ViewChild('myModal')
  modal: ModalComponent;
  constructor(private service: SchedulerAdminService) {
    //this.filmResource=new DataTableResource(this.);
    console.log("AppComponent.data:" + this.data);
  }


  ngOnInit() {
    if (window.localStorage.getItem('role') == "Admin") {
      this.isAdmin = true;
      this.settings.actions.custom[0].name = 'schedule';
      this.settings.actions.custom[0].title = 'Schedule now';
      this.settings_scanhistory.actions.custom[0].name = 'schedule';
      this.settings_scanhistory.actions.custom[0].title = 'Schedule now';
    }
    if (window.localStorage.getItem('role') == "supervisor") {
      this.settings.actions.custom[0].name = 'request';
      this.settings.actions.custom[0].title = 'Request to scan';
      this.settings_scanhistory.actions.custom[0].name = 'request';
      this.settings_scanhistory.actions.custom[0].title = 'Request to scan';
    }
    if (window.localStorage.getItem('role') == "viewer" || !window.localStorage.getItem('role')) {
      this.settings.actions.custom[0].name = '';
      this.settings.actions.custom[0].title = '';
      this.settings.actions.add = false;
      this.settings_scanhistory.actions.custom[0].name = '';
      this.settings_scanhistory.actions.custom[0].title = '';
    }
    this.data = this.service.getschedule();
    this.currentData = this.service.getCurrentWeekschedule();   
    this.getalldevices = this.service.getalldevices();
    this.getschedulerhistory = this.service.getschedulerhistory();
    this.getmetadataofreports = this.service.getmetadataofreports();
    this.getselectipdataforreport = this.service.getselectipdataforreport();
    this.getalldevices.subscribe(data => {
      this.data4 = data;
    });
    this.getschedulerhistory.subscribe(data => {
      this.data_history = data;
    });
    this.getmetadataofreports.subscribe(data => {
      this.data_reports = data;
    });
    this.getselectipdataforreport.subscribe(data => {
      this.temp_optionsModelIPS = data;
    });
    this.myOptionsIPS = [
      { id: 1, name: '10.255.21.132' },
      { id: 2, name: '10.255.103.147' },
      { id: 3, name: '10.255.103.144' },
      { id: 4, name: '10.251.68.143' },
      { id: 5, name: '10.251.68.102' }
  ];
    this.myOptionsSeverity = [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
      { id: 4, name: '4' },
      { id: 5, name: '5' }
  ];
  }
  onChangeSeverity() {
    console.log(this.optionsModelSeverity);
}
onChangeIPS() {
  console.log(this.optionsModelIPS);
}
  delete(d) {
    if (window.localStorage.getItem('auth_key') == d.user_id || window.localStorage.getItem('role') == "Admin") {
      console.log(d.devices_id);
      this.service.deleteschedule(d.devices_id);
      this.data = this.service.getschedule();
      this.data_slots = this.service.getslots();
      this.data_schedule = this.service.getdevices();
    }
    else {
      alert("Authorized only. Put in request queue.");
    }
  }
  toggle() {
    this.newschedule = true;
    console.log("toggle");
    this.data_schedule = this.service.getdevices();

  }
  schedule(d) {
    this.newschedule = false;
    this.newschedule1 = true;
    this.data_slots = this.service.getslots();
    this.selecteddevice = d.product + ", " + d.mac_address + ", " + d.ip_address
    console.log(d.devices_id);
    this.temp_devices_id = d.devices_id;

  }
  schedule1(d) {
    this.service.addnewschedule(this.temp_devices_id, d.scheduled_date, d.start_time, d.end_time);

    this.data_schedule = this.service.getdevices();
    this.data = this.service.getschedule();
    this.newschedule1 = false;


  }

  onCreateConfirm(event) {
    const ipPattern =
      "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";

    if (!event.newData.ip_address.match(ipPattern)) {
      alert("Wrong IP address!! ");
    }
    else {
      var emptymessage = "Empty fields:";
      var tempForHere1 = true;
      if (event.newData.product.trim() == "") {
        emptymessage += " Product ";
        tempForHere1 = false;
      }
      if (event.newData.mac_address.trim() == "") {
        emptymessage += " MAC ";
        tempForHere1 = false;
      }
      if (event.newData.controller.trim() == "") {
        emptymessage += " Controller ";
        tempForHere1 = false;
      }
      if (event.newData.serial_number.trim() == "") {
        emptymessage += " Serial Number ";
        tempForHere1 = false;
      }
      if (event.newData.version.trim() == "") {
        emptymessage += " Version ";
        tempForHere1 = false;
      }
      if (event.newData.model.trim() == "") {
        emptymessage += " Model ";
        tempForHere1 = false;
      }
      if (!tempForHere1) {
        if (window.confirm('Are you sure you want to create with empty fields?' + emptymessage)) {
          this.service.addnewdevice(event.newData.mac_address.trim(), event.newData.ip_address.trim(), event.newData.serial_number.trim(), event.newData.product.trim(), event.newData.version.trim(), event.newData.controller.trim(), event.newData.model.trim(), event.newData.desc_devices.trim());
          event.confirm.resolve(event.newData);
        } else {
          event.confirm.reject();
        }
      }
      else {
        event.confirm.resolve(event.newData);
        this.service.addnewdevice(event.newData.mac_address.trim(), event.newData.ip_address.trim(), event.newData.serial_number.trim(), event.newData.product.trim(), event.newData.version.trim(), event.newData.controller.trim(), event.newData.model.trim(), event.newData.desc_devices.trim());
      }
    }


  }
  onCustom(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.ip_address}`);
    if(event.action == "schedule"){

    }
    if(event.action == "request"){
      
    }
  }
  onCustomReports(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.meta_id}`);
    if(event.action == "schedule"){

    }
    if(event.action == "request"){
      
    }
  }
  onCustomHistory(event) {
    alert(`Custom event '${event.action}' fired on row №: ${event.data.ip_address}`);
    if(event.action == "schedule"){

    }
    if(event.action == "request"){
      
    }
  }
  onDateRangeChanged(event: IMyDateRangeModel) {
    // event properties are: event.beginDate, event.endDate, event.formatted,
    // event.beginEpoc and event.endEpoc
}
 

}