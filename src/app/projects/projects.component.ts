import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Observable } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
 
  public doughnutChartLabels:string[] = ['In progress', 'On Hold', 'Accepted', 'Open', 'Pending Review'];
  public doughnutChartData:number[] = [350, 450, 100,55,33];
  datasets_doughnut = new Array();
  data: Observable<Array<any>>;
  name: Observable<Array<any>>;
   forgraph: Observable<Array<any>>;
  dataFromPerson: Observable<Array<any>>;
  temp_data = new Array();
  forgraph_data = new Array();
  fordoughnut_data = new Array();
  fromPerson = false;
  fromTeam = true;
  public barChartLabels = new Array();
  public barChartData: any[] = [
    {data: [0,0,0,0,0], label: 'Series A'},
    {data: [0,0,0,0,0], label: 'Series B'},
        {data: [0,0,0,0,0], label: 'Series c'},
    {data: [0,0,0,0,0], label: 'Series d'},
      {data:[0,0,0,0,0], label: 'Series e'}
  ];
  backgroundColor1: any[] = [{backgroundColor:'#33b5e5'}, {backgroundColor:'#ffbb33'},{backgroundColor:'#00C851'}, {backgroundColor:'#b39ddb'}, {backgroundColor:'#ff4444'}];
  backgroundColor2: any[] = ['#33b5e5', '#ffbb33','#00C851', '#b39ddb','#ff4444'];
  total_inprogress:number = 0;total_hold:number= 0;total_Accepted:number= 0;total_open:number= 0;total_peding:number = 0;
  public doughnutChartData_inprogress = new Array();
  public doughnutChartData_accept = new Array();
  public doughnutChartData_open = new Array();
  public doughnutChartData_onhold = new Array();
  public doughnutChartData_pendingreview = new Array();
  public doughnutChartType:string = 'doughnut';
  public barChartType:string = 'bar';
  selected: string = '';
  public barChartLegend:boolean = true;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor(private service: ProjectsService){
    this.datasets_doughnut = [{
      data : this.doughnutChartData,
      backgroundColor: ['#33b5e5', '#ffbb33','#00C851', '#b39ddb','#ff4444']
      }
    ]
    this.data = service.getProjects();
    this.name = service.getProjectsNames();
    this.forgraph = service.getProjectsforgraph();
    this.name.subscribe(data => {this.temp_data = data});
    this.forgraph.subscribe(data => {this.forgraph_data = data;
    for(var i=0;i<this.forgraph_data.length;i++){
     this.barChartLabels[i] = this.forgraph_data[i].personName;
     this.doughnutChartData_inprogress[i] = this.forgraph_data[i].InProgress;
     this.doughnutChartData_accept[i] = this.forgraph_data[i].Accept;
     this.doughnutChartData_open[i] = this.forgraph_data[i].Open;
     this.doughnutChartData_onhold[i] = this.forgraph_data[i].OnHold;
     this.doughnutChartData_pendingreview[i] = this.forgraph_data[i].PendingReview;
     this.total_Accepted = this.total_Accepted + parseInt(this.forgraph_data[i].Accept);
     this.total_hold = this.total_hold + parseInt(this.forgraph_data[i].OnHold);
     this.total_inprogress = this.total_inprogress + parseInt(this.forgraph_data[i].InProgress);
     this.total_open = this.total_open + parseInt(this.forgraph_data[i].Open);
     this.total_peding = this.total_peding + parseInt(this.forgraph_data[i].PendingReview);
    }
    this.doughnutChartData = [this.total_inprogress,this.total_hold,this.total_Accepted,this.total_open,this.total_peding];
    this.datasets_doughnut = [{data : this.doughnutChartData}];
    this.barChartData = [{data:this.doughnutChartData_inprogress, label: 'In Progress'},
    {data:this.doughnutChartData_onhold, label: 'On Hold'},
    {data:this.doughnutChartData_accept, label: 'Accepted'},
    {data:this.doughnutChartData_open, label: 'Open'},
    {data:this.doughnutChartData_pendingreview, label: 'Pending Review'}
    ];
  });
  }
  ngOnInit() {
    this.selected= 'Team Vector';
  }
  onAssigneeChange(selectdata) {
    console.log(selectdata);
    if(selectdata == "Team Vector"){
      this.fromPerson = false;
      this.fromTeam = true;
      this.doughnutChartData = [this.total_inprogress,this.total_hold,this.total_Accepted,this.total_open,this.total_peding];
      this.datasets_doughnut = [{data : this.doughnutChartData}];
    }
    else{
    this.dataFromPerson = this.service.getProjectsbyPerson(selectdata);
    this.fromPerson = true;
    this.fromTeam = false;
    this.forgraph.subscribe(data => {this.fordoughnut_data = data;
           for(var i=0;i<this.fordoughnut_data.length;i++){
              if(selectdata == this.fordoughnut_data[i].tempp_firstname){
                this.doughnutChartData = [this.fordoughnut_data[i].InProgress,this.fordoughnut_data[i].OnHold,
                this.fordoughnut_data[i].Accept,this.fordoughnut_data[i].Open,this.fordoughnut_data[i].PendingReview];
                this.datasets_doughnut = [{data : this.doughnutChartData}];
                i = this.fordoughnut_data.length;
              }
           }
      }); 
    }
  
  }

}