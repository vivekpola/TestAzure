import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
@Injectable()
export class tesService {
   constructor(private http: Http) {}
  getEXEC(): Observable<any> {  
    return this.http.get("http://10.21.23.221:4202/tes")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }  

    updatetesdetails(intakeset) {
     
    var headers = new Headers();
    //var body = 'intake='+intake+'&currentstatus='+currentstatus+'&monthlydate='+monthlydate+'&RAG='+RAG+'&blockers='+blockers;
      
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/updatetesdetails', intakeset, { headers: headers }).subscribe((data) => {
        
      }
    )
    })
  } 
} 

