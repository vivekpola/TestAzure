import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {SecurityCheckService} from './security-check.service';

@Component({
  selector: 'app-security-check',
  templateUrl: './security-check.component.html',
  styleUrls: ['./security-check.component.css'],
  providers: [SecurityCheckService]
})
export class SecurityCheckComponent implements OnInit {
  source1: Observable<Array<any>>;
  data4=[];
   settings = {
      columns: {
         key: {
          title: 'Intake',
         
        },
        devicetype: {
          title: 'Device Type',
      
        },
        devicename: {
          title: 'Device Name',
      
        },     
        ipaddresses: {
          title: 'IP Address',
       
        },
        //  summary: {
        //   title: 'Summary',
        //   filter: false
        // },
        reporter: {
          title: 'Reporter',
        
        },      
      },
      actions: {
        add: false,
        edit: false,
        delete: false,
        position: 'right',
        custom: [
          {
            name: 'PDFDownload',
            title: 'PDF  ',
          },
          {
            name: 'CSVDownload',
            title: '  CSV',
          }
        ]
      }
    };
  
  source: LocalDataSource;
    constructor( private service:SecurityCheckService) {
  
    }
  
  onSearch(query: string = '') {
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'key',
          search: query
        }
      ], false);
      // second parameter specifying whether to perform 'AND' or 'OR' search 
      // (meaning all columns should contain search query or at least one)
      // 'AND' by default, so changing to 'OR' by setting false here
    }
  
    onCustom(event) {
      if(event.action === "PDFDownload"){
        this.service.downloadreport("pdf",event.data.key);
      }  
       if(event.action === "CSVDownload"){
      this.service.downloadreport("csv",event.data.key);
      }   
    }
  
    ngOnInit() {
      this.source1 = this.service.getVSS();
      this.source1.subscribe(data => {
        this.data4 = data;
        this.source = new LocalDataSource(this.data4);
      });
    }
  
  }
  