import { Component, OnInit,ElementRef,Renderer2 } from '@angular/core';
import { tesService } from './tes.service';
import { Observable } from 'rxjs';
import { FormArray, FormControl } from '@angular/forms';
import { SortablejsOptions } from 'angular-sortablejs';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-projects',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.css'],
  providers: [tesService]
})
export class tesComponent implements OnInit {
  checkperson;
  source1: Observable<Array<any>>;
  data4=[];
 settings = {
    columns: {
       key: {
        title: 'Key',   
        editable: false,
        type:'html',
        valuePrepareFunction: (value) => {
                    return `<a href="https://tkts.sys.comcast.net/browse/${value}" target="_blank">${value}</a>`;
        },
        },
      project: {
        title: 'PROJECT',
        editable: false,
      },
      summary: {
        title: 'Summary',
        editable: false,
      },  
        created: {
        title: 'Created',
      type:'html',
        valuePrepareFunction: (value) => {
                    return value.substring(0,10);
        },
      },  
        status: {
        title: 'Status',
        type:'html',
      
      },  
        assignee: {
        title: 'Assignee', 
         type:'html',     
  
    },
   
  },
  actions:false,
  };
 data: Observable<Array<any>>;
 data2=[];
  constructor(private service: tesService) {
    this.data = service.getEXEC();
    this.data.subscribe(data => {
       this.data2 = data;
       console.log(data);
    });
    
  }
  eventOptions: SortablejsOptions = {
    onUpdate: () => this.service.updatetesdetails(this.data2)
    
  };

  source: LocalDataSource;

  ngOnInit() {
     this.checkperson = localStorage.getItem('auth_key');
    this.source1 = this.service.getEXEC();
    this.source1.subscribe(data => {
      this.data4 = data;
      this.source = new LocalDataSource(this.data4);
     });  
  }

}