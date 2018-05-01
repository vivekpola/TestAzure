import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class ProjectsService {
   constructor(private http: Http) {}
  getProjects(): Observable<any> {
  
 return this.http.get("http://10.21.23.221:4202/jiraresponse")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getProjectsNames(): Observable<any> {
  
 return this.http.get("http://10.21.23.221:4202/jiraresponse/names")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getProjectsforgraph(): Observable<any> {
  
 return this.http.get("http://10.21.23.221:4202/jiraresponse/forgraph")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getProjectsbyPerson(personname: string): Observable<any> {
  
  var headers = new Headers();
        var body = 'personname=' + personname;
        console.log(JSON.stringify(body));
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
        return this.http
        .post('http://10.21.23.221:4202/jiraresponse/names/person', body, {headers: headers})
        .map(this.extractData)
        .catch(this.handleError);   
  }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
  
      

}