import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class EnvironmentsService {

  constructor(private http: Http) {}

  getariscon(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_arris_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

   getciscocon(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_cisco_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
   getciscoconecs(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_cisco_con_ecs.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getenvvideoproc(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_video_process.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getenvonecon(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/enc_one_con.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getheadenddev(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_headend_dev.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
   geteassystem(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/enc_eas_sys.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  gethospitalitydev(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_hospitality_dev.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getvespacode(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_vespa_code.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getvespaplatform(): Observable<any> {
    /*return this.http.request('./data/people.json')
        .map(res => res.json());*/

       //return this.http.get('http://10.21.23.227:4202/charters')
       return this.http.get('./assets/data/env_vespa_platform.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
