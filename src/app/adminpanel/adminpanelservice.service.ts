import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class AdminpanelserviceService {

   constructor(private http: Http) {}
   addnewdevice(mac,ip,
      serial,product,
      version,controller,
      model,desc){
        var headers = new Headers();
        var body = 'mac_address='+mac+'&ip_address='+ip+'&serial='+serial+'&product='+product+'&version='+version+'&model='+model+'&desc='+desc+'&controller='+controller;
        console.log(JSON.stringify(body));
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
       return this.http.post('http://10.21.23.221:4202/addnewdevice', body,{headers: headers}).subscribe((data) => {
            console.log(data.json());
       })
  }

}
