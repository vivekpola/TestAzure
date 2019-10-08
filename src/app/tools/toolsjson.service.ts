import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ToolsjsonService {

  constructor(private http: Http) {}

  getautovalid(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/tools_auto_valid.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getothers(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/tools_other.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
