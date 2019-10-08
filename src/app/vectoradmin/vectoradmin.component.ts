import { Component, OnInit,TemplateRef } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { VectoradminserviceService } from './vectoradminservice.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

const URL = 'http://10.21.23.221:4202/api/uploadfiles';
@Component({
  selector: 'app-vectoradmin',
  templateUrl: './vectoradmin.component.html',
  styleUrls: ['./vectoradmin.component.css'],
  providers: [VectoradminserviceService]
})
export class VectoradminComponent implements OnInit {

data: Observable<Array<any>>;
replacedata: Observable<Array<any>>;
vectorteamdetails_obs: Observable<Array<any>>;
schedulerreq: Observable<Array<any>>;
interfacesv: Observable<Array<any>>;
isSecondBoxOpen = false;
settings_usermanagement = {
  columns: {
    user_ntid: {
      title: 'NT-Id',
      width: '10%'
    },
    user_name: {
      title: 'Name',
      width: '15%'
    },
    email_id: {
      title: 'Email_id',
      width: '10%'
    },
    position: {
      title: 'Position',
      width: '7%'
    },
    user_subteam: {
      title: 'Subteam',
      width: '15%'
    },
    role: {
      title: 'Role',
      width: '10%'
    },
    pernr: {
      title: 'ComcastNOW',
      width: '2%'
    },
    user_id: {
      show: false,
      title: "-"
    }
  },
  pager: {
    display: false
  },
  actions: {
    add: true,
    edit: true,
    delete: true,
    position: 'right'
  },
  add: {
    confirmCreate: true,
  },
  delete: {
    confirmDelete: true,
  },
  edit: {
    confirmSave: true,
  }

};
data_usermanagement=[];
template1: TemplateRef<any>;
public modalRef: BsModalRef;
selected_requested_device_id;selected_requested_device_ip;
  constructor(private http: Http, private service: VectoradminserviceService,private modalService: BsModalService) { }

  ngOnInit() {
    this.isSecondBoxOpen = false;
      this.data = this.service.getrequestedScansForAdmmin();
      this.replacedata = this.service.getCurrentWeekschedule();
      this.vectorteamdetails_obs = this.service.getvectorteamdetails();
      this.schedulerreq= this.service.getschedulereqs();
      this.interfacesv = this.service.getinterfacev();
      this.vectorteamdetails_obs.subscribe(data => {
        this.data_usermanagement = data;
      });
  }

  schedule(d){
    this.isSecondBoxOpen = true;
    this.selected_requested_device_id = d.devices_id;
    this.selected_requested_device_ip = d.ip_address;
    }
  replace(d){
    if (window.confirm('Replace: '+this.selected_requested_device_ip+' => '+d.ip_address)) {
     this.service.replaceRequestedSchedule(d.devices_id,this.selected_requested_device_id);
        
    }
    this.isSecondBoxOpen = false;
    this.data = this.service.getrequestedScansForAdmmin();
    }
  delete(d){
    if (window.confirm('Are you sure you want to delete? Requested => '+d.ip_address)) {
        this.service.deleteRequestedSchedule(d.devices_id);
    } 
    this.data = this.service.getrequestedScansForAdmmin();
  }
  requestusersclick(){
    this.isSecondBoxOpen = false;
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('file', file);
      console.log(file);
      console.log(file.name);
      let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      headers.append('Content-Type', 'form-data');
      headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`http://10.21.23.221:4202/api/uploadfiles`, formData)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => alert('Uploaded successfully'),
                error => console.log(error)
            )
    }
  }

  onCreateConfirm(event){
    console.log(event.newData);
    if(event.newData.user_name.trim() == '' || event.newData.user_ntid.trim() == '' || event.newData.email_id.trim() == '' || event.newData.position.trim() == '' || event.newData.user_subteam.trim() == '' || event.newData.role.trim() == '' || event.newData.pernr.trim() == ''){
      alert("All fields must not be empty");
      event.confirm.reject();
    }
    else{
      if (window.confirm('Add user: '+event.newData.user_ntid.trim())) {
      this.service.updatevectoruserdetails("addnew","",event.newData.user_ntid.trim(),event.newData.user_name.trim(),event.newData.role.trim(),event.newData.pernr.trim(),event.newData.user_subteam.trim(),event.newData.email_id.trim(),event.newData.position.trim());
      event.confirm.resolve(event.newData);
      }else{
        event.confirm.reject();
      }
    }
  }
  onEditConfirm(event){
    this.service.updatevectoruserdetails("update",event.data.user_id,event.newData.user_ntid.trim(),event.newData.user_name.trim(),event.newData.role.trim(),event.newData.pernr.trim(),event.newData.user_subteam.trim(),event.newData.email_id.trim(),event.newData.position.trim());
    event.confirm.resolve(event.newData);
  }
  onDeleteConfirm(event){
    if (window.confirm('Are you sure? It will remove '+event.data.user_name.trim()+' from Team Vector')) {
        this.service.deletevectoruserdetails(event.data.user_id);
        event.confirm.resolve(event.newData);
    }
    else{
      event.confirm.reject();
    }
  } 
  public openModal() {
    this.modalRef = this.modalService.show(this.template1);
  } 
}
