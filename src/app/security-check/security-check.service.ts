import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';
import 'rxjs/add/operator/map';
@Injectable()
export class SecurityCheckService {

  constructor(private http: Http) { }
  getVSS(): Observable<any> {  
    return this.http.get("http://10.21.23.221:4202/VSSresponse")     
     //   return this.http.get('./assets/data/projects.json')
          .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

 downloadreport(type:string,key:string){
        var headers =  new Headers();
        var body = 'type=' + type+'&key=' + key;
         headers.append('Content-Type', 'application/X-www-form-urlencoded');
         let options = new RequestOptions({ headers: headers });
          options.responseType = ResponseContentType.Blob;
         return this.http.post('http://10.21.23.221:4202/downloadreport', body,options).subscribe((response) => {
                console.log(response.blob());
                var mediatype;
                if(type == "pdf"){
                  mediatype = "application/pdf"
                }
                if(type == "csv"){
                  mediatype = "application/csv"
                }
                var data = new Blob([response.blob()], {type: mediatype});
                FileSaver.saveAs(data,key+"."+type);

        });
 
}     
} 
