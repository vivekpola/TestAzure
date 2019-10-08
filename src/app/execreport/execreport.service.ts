import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';
@Injectable()
export class execreportService {
   constructor(private http: Http) {}
  getProjects(): Observable<any> {
  
 return this.http.get("http://10.21.23.221:4202/execMainStatus")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  updatexecreport(sno,summary,status,mitigation,risk,issuetkts,jiratickets) {
    var headers = new Headers();
    var execdate = new Date();
    var body = 'sno='+sno+'&summary='+summary+'&status='+status+'&mitigation='+mitigation+'&risk='+risk+'&issuetkts='+issuetkts+'&jiratickets='+jiratickets;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/execdetailFinal', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })
  } 
  insertexecreport(addprojname,addate,addsummary,addrag,addmitigation,risk,addrisktkts,jiratickets){
    var headers = new Headers();
    var execdate = new Date();
    var body = 'project='+addprojname+'&summary='+addsummary+'&status='+addrag+'&mitigation='+addmitigation+'&week='+addate+'&risk='+risk+'&addrisktkts='+addrisktkts+'&jiratickets='+jiratickets;
    console.log(JSON.stringify(body));
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return new Promise((resolve) => {
      this.http.post('http://10.21.23.221:4202/insertexecdetailFinal', body, { headers: headers }).subscribe((data) => {
        console.log(data.json());
      }
    )
    })

  }
  getProjectsNames(): Observable<any> {
  
 return this.http.get("http://10.21.23.221:4202/execMainStatus/projects")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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