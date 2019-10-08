import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
@Injectable()
export class execstatusService {
   constructor(private http: Http) {}
  getEXEC(): Observable<any> {  
    return this.http.get("http://10.21.23.221:4202/execstatus")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  } 
    getHistEXEC(): Observable<any> {  
    return this.http.get("http://10.21.23.221:4202/historyexecstatus")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }    

getRefreshComments() {  
      return this.http.get("http://10.21.23.221:4202/refreshComments")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));    
  } 

    execmailpost(intake) {
    var headers = new Headers();
    var body = 'intake='+intake;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/execmailpost', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })
  } 

    updatexecdetails(intake,currentstatus,monthlydate,RAG,blockers) {
    var headers = new Headers();
    var execdate = new Date();
    var body = 'intake='+intake+'&currentstatus='+currentstatus+'&monthlydate='+monthlydate+'&RAG='+RAG+'&blockers='+blockers;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/execdetails', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })
  } 
} 

