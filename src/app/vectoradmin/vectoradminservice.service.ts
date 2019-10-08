import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class VectoradminserviceService {

  constructor(private http: Http) { }

  getrequestedScansForAdmmin(): Observable<any> {
    return this.http.get('http://10.21.23.221:4202/requestedScansForAdmmin')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getschedulereqs(): Observable<any> {  
    return this.http.get('http://10.21.23.221:4202/schedule_requests_v')       
       .map((res:Response) => res.json())         
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
getinterfacev(): Observable<any> {  
    return this.http.get('http://10.21.23.221:4202/Interface_requests_v')       
       .map((res:Response) => res.json())         
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
  getvectorteamdetails(): Observable<any> {
    return this.http.get('http://10.21.23.221:4202/vectorteamdetails')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteRequestedSchedule(devices_id: string) {
    var headers = new Headers();
    var body = 'type=delete&requested_devices_id=' + devices_id;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    console.log(body);
    return this.http.post('http://10.21.23.221:4202/requestedScansForAdmmin/update', body, { headers: headers }).subscribe((data) => {
      console.log(data.json());
    })
  }
  replaceRequestedSchedule(devices_id, requested_devices_id) {
    var headers = new Headers();
    var body = 'type=replace&devices_id=' + devices_id + '&requested_devices_id=' + requested_devices_id;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/requestedScansForAdmmin/update', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })
  }
  getCurrentWeekschedule(): Observable<any> {
       return this.http.get('http://10.21.23.221:4202/scheduler')
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  deletevectoruserdetails(user_id) {
    var headers = new Headers();
    var body = 'type=delete&user_id='+user_id;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/vectorteamdetails', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })
  }
  updatevectoruserdetails(type,user_id,user_ntid,user_name,role,pernr,user_subteam,email_id,position) {
    var headers = new Headers();
    var body = 'type='+type+'&user_id='+user_id+'&user_ntid='+user_ntid+'&user_name='+user_name+'&role='+role+'&pernr='+pernr+'&user_subteam='+user_subteam+'&email_id='+email_id+'&position='+position;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/vectorteamdetails', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })
  }

}
