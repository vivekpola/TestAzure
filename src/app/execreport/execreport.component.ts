import { Component, OnInit, ElementRef,ViewChild, Renderer2 } from '@angular/core';
import { execreportService } from './execreport.service';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-projects',
  templateUrl: './execreport.component.html',
  styleUrls: ['./execreport.component.css'],
  providers: [execreportService]
})
export class execreportComponent implements OnInit { 

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
};

// Initialized to specific date (09.10.2018).
//public model: any = { date: { year: 2018, month: 10, day: 9 } };

  @ViewChild('editmodal')
  data: Observable<Array<any>>;
  name: Observable<Array<any>>;
   forgraph: Observable<Array<any>>;
  dataFromPerson: Observable<Array<any>>;
    datefilter: Observable<Array<any>>;
    hello: Observable<Array<any>>;
      Projectfilter: Observable<Array<any>>;checkpersonmail;
      InitialProjectfilter: Observable<Array<any>>;
  temp_data = new Array();
  form_data = new Array();
    selected: string = '';
    proj1selected ; weekdate;
  datefilters = [];datefilterfinal = [];
projectfilters = [];projectfilterfinal = [];
hellofilters = []; hellofilterfinal = [];
intprojectfilters = [];intprojectfilterfinal = [];
 proj1;
 date1;
  fromPerson = false;
  fromTeam = true; 
 
  constructor(private service: execreportService){
    this.data = service.getProjects();
    this.name = service.getProjectsNames();  
    this.name.subscribe(data => {this.temp_data = data});
  }
  ngOnInit() {
    this.selected= 'All Projects';
    var date = new Date(); 
    date.setDate(date.getDate() + (1 + 4 - date.getDay()) % 7);
    var date2 = date.getFullYear()+'-'+('0' + (date.getMonth()+1)).slice(-2)+'-'+('0' + date.getDate()).slice(-2); 	
    this.InitialProjectfilter = this.service.getProjects();
    this.InitialProjectfilter.subscribe(data => {
      this.intprojectfilters = data;   
      for(var i=0;i<this.intprojectfilters.length;i++){       
       if(this.intprojectfilters[i].week.slice(0,10) == date2){
        // console.log("found");
        this.intprojectfilters[i].jiratickets = this.elephantlist(this.intprojectfilters[i].jiratickets);
        this.intprojectfilters[i].issuetkts = this.elephantlist(this.intprojectfilters[i].issuetkts);
       this.intprojectfilterfinal.push(this.intprojectfilters[i]);

       }      
      }      
      this.data = this.getintfinalProjects();
      this.intprojectfilterfinal = [];      
      });
  }

elephantlist(value){
    let elephantList;
    if (value != null) {
      elephantList = (value.split(","));
     
    }
    return elephantList;
}

 public edited = false;
 public editComplete =  true;
  public visible = false;
  public visibleAnimate = false;
  public addnew = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
  getColor(country) {
    switch (country) {
      case 'G':
        return 'green';
      case 'Y':
        return 'yellow';
      case 'R':
        return 'red';
    }
  }

  onDateChange(date){  
    date=date.formatted;
    this.date1 = date;    
    this.datefilter = this.service.getProjects();   
    if(this.proj1 == undefined || this.proj1 == "All Projects"){       
       this.datefilter.subscribe(data => {
       this.datefilters = data;
       for(var i=0;i<this.datefilters.length;i++){
        if(this.datefilters[i].week.slice(0,10) == date){
        this.datefilters[i].jiratickets = this.elephantlist(this.datefilters[i].jiratickets);
        this.datefilters[i].issuetkts = this.elephantlist(this.datefilters[i].issuetkts);

        this.datefilterfinal.push(this.datefilters[i]);
        }      
       }     
       this.data = this.getDates();
       this.datefilterfinal = [];      
      });
    }
    else{ 
       this.datefilter.subscribe(data => {
       this.datefilters = data;
       for(var i=0;i<this.datefilters.length;i++){
        if(this.datefilters[i].week.slice(0,10) == date && this.datefilters[i].project == this.proj1){
          this.datefilters[i].jiratickets = this.elephantlist(this.datefilters[i].jiratickets);
          this.datefilters[i].issuetkts = this.elephantlist(this.datefilters[i].issuetkts);

          this.datefilterfinal.push(this.datefilters[i]);
        }      
       }     
       this.data = this.getDates();
       this.datefilterfinal = [];      
      });
    }
  }
  getDates() {
    if(this.datefilterfinal != null) 
    {
        return Observable.of(this.datefilterfinal);
    }    
}
  onAssigneeChange(selectdata) {
    this.proj1 = selectdata;
    console.log(this.date1);
    if(this.date1 == undefined){ 
    if(selectdata != "All Projects") { 
    this.Projectfilter = this.service.getProjects();
      this.Projectfilter.subscribe(data => {
       this.projectfilters = data;   
       for(var i=0;i<this.projectfilters.length;i++){       
        if(this.projectfilters[i].project == selectdata){
          console.log("found");
          this.projectfilters[i].jiratickets = this.elephantlist(this.projectfilters[i].jiratickets);
          this.projectfilters[i].issuetkts = this.elephantlist(this.projectfilters[i].issuetkts);

        this.projectfilterfinal.push(this.projectfilters[i]);
        }      
       }      
       this.data = this.getfinalProjects();
       this.projectfilterfinal = [];      
       });
  }
  else if(selectdata == "All Projects"){
    this.Projectfilter = this.service.getProjects();
      this.Projectfilter.subscribe(data => {
       this.projectfilters = data;   
       for(var i=0;i<this.projectfilters.length;i++){     
        this.projectfilters[i].jiratickets = this.elephantlist(this.projectfilters[i].jiratickets);  
        this.projectfilters[i].issuetkts = this.elephantlist(this.projectfilters[i].issuetkts);

        this.projectfilterfinal.push(this.projectfilters[i]);      
       }      
       this.data = this.getfinalProjects();
       this.projectfilterfinal = [];      
       });
  }
    }
    else{
       if(selectdata != "All Projects") { 
    this.Projectfilter = this.service.getProjects();
      this.Projectfilter.subscribe(data => {
       this.projectfilters = data;   
       for(var i=0;i<this.projectfilters.length;i++){       
        if(this.projectfilters[i].project == selectdata && this.datefilters[i].week.slice(0,10) == this.date1){
          console.log("found");
          this.projectfilters[i].jiratickets = this.elephantlist(this.projectfilters[i].jiratickets);
          this.projectfilters[i].issuetkts = this.elephantlist(this.projectfilters[i].issuetkts);

        this.projectfilterfinal.push(this.projectfilters[i]);
        }      
       }      
       this.data = this.getfinalProjects();
       this.projectfilterfinal = [];      
       });
  }
  else if(selectdata == "All Projects"){
    this.Projectfilter = this.service.getProjects();
      this.Projectfilter.subscribe(data => {
       this.projectfilters = data;   
       for(var i=0;i<this.projectfilters.length;i++){       
        if(this.datefilters[i].week.slice(0,10) == this.date1){
          this.projectfilters[i].jiratickets = this.elephantlist(this.projectfilters[i].jiratickets);
          this.projectfilters[i].issuetkts = this.elephantlist(this.projectfilters[i].issuetkts);

        this.projectfilterfinal.push(this.projectfilters[i]);
        }      
       }      
       this.data = this.getfinalProjects();
       this.projectfilterfinal = [];      
       });
  }
    }
  }
 getfinalProjects() {
    if(this.projectfilterfinal != null) 
    {
        return Observable.of(this.projectfilterfinal);
    }    
}
getintfinalProjects() {
  if(this.intprojectfilterfinal != null) 
  {
      return Observable.of(this.intprojectfilterfinal);
  }    
}
gethellofinalProjects() {
  if(this.hellofilterfinal != null) 
  {
      return Observable.of(this.hellofilterfinal);
  }    
}
onEditClick(data2){
  console.log(data2);
 this.form_data = data2;
    this.edited = true;
    this.editComplete = false;
    this.addnew = false;
}

Create(proj1selected,weekdate){
  this.edited = false;
    this.editComplete = false;
    this.addnew = true;
    this.proj1selected = proj1selected;
    this.weekdate = weekdate;
    console.log(proj1selected);
}

convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  console.log(inputFormat);
  console.log([pad(d.getMonth() + 1), pad(d.getDate() + 1), d.getFullYear()].join('/'));
  return [pad(d.getMonth() + 1), pad(d.getDate() + 1), d.getFullYear()].join('/');
}
onEditConfirm(form_data,projname,summary,rag,mitigation,risk,issuetkts,jiratickets){
  console.log(form_data,projname,summary,rag,mitigation),risk,issuetkts,jiratickets;
    // if (event.blockers == null) { event.blockers = ""; }
    // if (event.summary == null) { event.summary = ""; }
    // if (event.week == null) { event.week = "0000-00-00"; }
    //summary = summary.html();
    console.log(summary);
    this.service.updatexecreport(form_data.sno,summary,rag,mitigation,risk,issuetkts,jiratickets);
    this.selected= 'All Projects';
    var date = new Date(); 
    date.setDate(date.getDate() + (1 + 4 - date.getDay()) % 7);
    var date2 = date.getFullYear()+'-'+('0' + (date.getMonth()+1)).slice(-2)+'-'+('0' + date.getDate()).slice(-2); 	
    this.InitialProjectfilter = this.service.getProjects();
    this.InitialProjectfilter.subscribe(data => {
      this.intprojectfilters = data;   
      for(var i=0;i<this.intprojectfilters.length;i++){       
       if(this.intprojectfilters[i].week.slice(0,10) == date2){
        // console.log("found");
        this.intprojectfilters[i].jiratickets = this.elephantlist(this.intprojectfilters[i].jiratickets);
        this.intprojectfilters[i].issuetkts = this.elephantlist(this.intprojectfilters[i].issuetkts);

       this.intprojectfilterfinal.push(this.intprojectfilters[i]);
       }      
      }      
      this.data = this.getintfinalProjects();
      this.intprojectfilterfinal = [];      
      });
    //location.reload();
    this.edited = false;
    this.editComplete = true;
    this.addnew = false;
}
onAddEditConfirm(addsummary,addrag,addmitigation,risk,addrisktkts,jiratickets){
  console.log(this.proj1selected,this.weekdate,addsummary,addrag,addmitigation,risk,addrisktkts,jiratickets);
  this.service.insertexecreport(this.proj1selected,this.weekdate,addsummary,addrag,addmitigation,risk,addrisktkts,jiratickets);


  this.hello = this.service.getProjects();
  this.hello.subscribe(data => {
   this.hellofilters = data;   
   for(var i=0;i<this.hellofilters.length;i++){       
    if(this.hellofilters[i].project == this.proj1selected && this.hellofilters[i].week.slice(0,10) == this.weekdate){
      console.log("found");
      this.hellofilters[i].jiratickets = this.elephantlist(this.hellofilters[i].jiratickets);
      this.hellofilters[i].issuetkts = this.elephantlist(this.hellofilters[i].issuetkts);

    this.hellofilterfinal.push(this.hellofilters[i]);
    }      
   }      
   this.data = this.gethellofinalProjects();
   this.hellofilterfinal = [];      
   });
  //location.reload();
  this.edited = false;
  this.editComplete = true;
  this.addnew = false;
}

onEditCancel(){
      this.edited = false;
      this.editComplete = true;
      this.addnew = false;
}
onAddEditCancel(){
  this.edited = false;
      this.editComplete = true;
      this.addnew = false;
}

clicked (frontdata) {
  let frontdata12 = frontdata.value; 
  console.log(frontdata12); 
     let maildate;
     this.checkpersonmail = localStorage.getItem('email_id'); 
     let original="";
    for(let x=0;x< frontdata12.length;x++){       
         let mailcolor = "";
         let frontstatus="";
         let jiratickets = "";
         let aa = frontdata12[x].jiratickets;
     
         for (let z = 0; z < aa.length; z++) {
          jiratickets = jiratickets + "<a href='https://tkts.sys.comcast.net/browse/" + aa[z] + "'>" + aa[z] + "</a>&nbsp;&nbsp;";
            console.log(jiratickets);
         }
         let risktkts = "";
         let bb = frontdata12[x].issuetkts;
         for (let rt = 0; rt < bb.length; rt++) {
          risktkts = risktkts + "<a href='https://tkts.sys.comcast.net/browse/" + bb[rt] + "'>" + bb[rt] + "</a>&nbsp;&nbsp;";
            console.log(risktkts);
         }

        maildate = this.convertDate(frontdata12[x].week.substring(0,10));
        if(frontdata12[x].status == "R"){mailcolor = "#f44b4b";frontstatus = "Red";}
        else if(frontdata12[x].status == "Y"){mailcolor = "yellow";frontstatus = "Yellow";}
        else if(frontdata12[x].status == "G"){mailcolor = "#65e665";frontstatus = "Green";}
        frontdata12[x].summary = frontdata12[x].summary.replace(/–/g,'-');
    original = original+'<b>Project: </b>'+frontdata12[x].project +'&nbsp;&nbsp;&nbsp;'+'<b>Status: </b>'+'<span style="background-color:'+mailcolor +'">'+frontstatus+'</span>'+'<br/>'
                +'<b>Report Date: </b>'+this.convertDate(frontdata12[x].week.substring(0,10))+'&nbsp;&nbsp;&nbsp<br/>'+'<b>Highlights: </b><span style="white-space: pre-wrap;">'+frontdata12[x].summary+'</span><br/>'
                +'<b>Risks/issues: </b>'+frontdata12[x].risk + risktkts+'<br/>'+'<b>Jira Tickets: </b>'+jiratickets+'<br/><br/></br/>';
          }  
      
   var header = "To: " + this.checkpersonmail + "\nSubject:Executive Status " +maildate+ "\nX-Unsent: 1\nContent-Type: text/html\n\n";
    var html = "<html><head><meta charset='utf-8'></head><body style='font-family:Calibri Light;'>" +'<h4><u>TOP PROJECTS</u></h4>'+ original + "</body></html>";
    var text = header + html;
    var data = new Blob([text], { type: 'text/plain' });
    FileSaver.saveAs(data, "mail.eml");
  }

  yourMethod(item){
    console.log(item);
  }
}

