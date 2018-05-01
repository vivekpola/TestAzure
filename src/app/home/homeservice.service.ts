import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class HomeserviceService {
constructor(private http: Http) {}
  getProjectsDETAILS(): Observable<any> {
  
 return this.http.get("http://10.21.23.221:4202/jiraresponse")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getschedule(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       return this.http.get('http://10.21.23.221:4202/scheduler')
       //return this.http.get('./assets/data/env_arris_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
