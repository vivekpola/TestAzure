import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SchedulerAdminService {

  constructor(private http: Http) {}

  getCurrentWeekschedule(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       return this.http.get('http://10.21.23.221:4207/scheduler')
       //return this.http.get('./assets/data/env_arris_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getschedule(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       return this.http.get('http://10.21.23.221:4207/scheduler')
       //return this.http.get('./assets/data/env_arris_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteschedule(devices_id:string){
        var headers = new Headers();
        var body = 'type=delete&devices_id=' + devices_id;
        console.log(JSON.stringify(body));
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
       return this.http.post('http://10.21.23.221:4205/scheduler/update', body,{headers: headers}).subscribe((data) => {
            console.log(data.json());
       })
  }
  getdevices(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       return this.http.get('http://10.21.23.221:4207/extradevices')
       //return this.http.get('./assets/data/env_arris_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
    getslots(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       return this.http.get('http://10.21.23.221:4207/findslots')
       //return this.http.get('./assets/data/env_arris_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  addnewschedule(devices_id,date,starttime,endtime) {
        var user = window.localStorage.getItem('auth_key');
        var headers = new Headers();
        var body = 'type=addnew&devices_id='+ devices_id+'&user='+user+'&date='+date+'&starttime='+starttime+'&endtime='+endtime;        
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise((resolve) => {
        this.http.post('http://10.21.23.221:4205/scheduler/update', body, {headers: headers}).subscribe((data) => {
            console.log(data.json());
        
            }
        )
        
        })
    }
    getalldevices(): Observable<any> {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
    
           return this.http.get('http://10.21.23.221:4207/getalldevices')
           //return this.http.get('./assets/data/env_arris_con.json')
              // ...and calling .json() on the response to return data
              .map((res:Response) => res.json())
              //...errors if any
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }     
      getschedulerhistory(): Observable<any> {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
    
           return this.http.get('http://10.21.23.221:4207/getschedulerhistory')
           //return this.http.get('./assets/data/env_arris_con.json')
              // ...and calling .json() on the response to return data
              .map((res:Response) => res.json())
              //...errors if any
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
              
      }
      getmetadataofreports(): Observable<any> {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
    
           return this.http.get('http://10.21.23.221:4207/getmetadataofreports')
           //return this.http.get('./assets/data/env_arris_con.json')
              // ...and calling .json() on the response to return data
              .map((res:Response) => res.json())
              //...errors if any
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }
      getselectipdataforreport(): Observable<any> {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
    
           return this.http.get('http://10.21.23.221:4207/getmetadataofreports')
           //return this.http.get('./assets/data/env_arris_con.json')
              // ...and calling .json() on the response to return data
              .map((res:Response) => res.json())
              //...errors if any
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }
      addnewdevice(mac,ip,
        serial,product,
        version,controller,
        model,desc){
          var headers = new Headers();
          var body = 'mac_address='+mac+'&ip_address='+ip+'&serial='+serial+'&product='+product+'&version='+version+'&model='+model+'&desc='+desc+'&controller='+controller+'&added_by='+window.localStorage.getItem('auth_key');
          console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
          console.log(body);
         return this.http.post('http://10.21.23.221:4205/addnewdevice', body,{headers: headers}).subscribe((data) => {
              console.log(data.json());
         })
    }


}
