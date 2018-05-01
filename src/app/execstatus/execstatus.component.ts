import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { execstatusService } from './execstatus.service';
import { Observable } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import * as FileSaver from 'file-saver';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-projects',
  templateUrl: './execstatus.component.html',
  styleUrls: ['./execstatus.component.css'],
  providers: [execstatusService]
})
export class execstatusComponent implements OnInit {
  textFile;checkperson;checkpersonmail;
  source1: Observable<Array<any>>;
  table_selected=[]; mailto;data4 = [];
  settings = {
    // selectMode: 'multi',
    pager: {
      display: false,
    },
    columns: {
      intake: {
        title: 'Intake',
        editable: false,
        type: 'html',
        valuePrepareFunction: (value) => {
          return `<a href="https://tkts.sys.comcast.net/browse/${value}" target="_blank">${value}</a>`;
        },
      },
      team: {
        title: 'Team',
        editable: false,
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Arris Platform', title: 'Arris Platform' },
              { value: 'Cavalry Platform', title: 'Cavalry Platform' },
              { value: 'Cisco Platform', title: 'Cisco Platform' },
              { value: 'Bulk Engineering', title: 'Bulk Engineering' },
              { value: 'Next Gen Billing', title: 'Next Gen Billing' },
              { value: 'Service Management', title: 'Service Management' },
              { value: 'Security ', title: 'Security ' },
              { value: 'Video Distribution Edge', title: 'Video Distribution Edge' },
              { value: 'Video Processors', title: 'Video Processors' },
              { value: 'Video Quality', title: 'Video Quality' },
              { value: 'null', title: 'Other' },
            ],
          },
        },
      },
      summary: {
        title: 'Summary',
        filter: false,
        editable: false,
      },
      currentstatus: {
        title: 'comment',
        filter: false
      },
      //  comment: {
      //    title: 'Comment',
      //   filter: false,
      //  editable: false,
      //  },  
      monthlydate: {
        title: 'Weekly',
        type: 'html',
        editable: false,
        filter: {
          type: 'html',
        },
        //  valuePrepareFunction: (date) => {
        //             if(date != null){                   
        //             return '2018-03-30';
        //           }
        //           else return null;
        //         },            
      },
      RAG: {
        title: 'RAG',
        type: 'html',
        valuePrepareFunction: (value) => {
          if (value == "Red") { return `<p class="red">${value}</p>`; }
          if (value == "Yellow") { return `<p class="yellow">${value}</p>`; }
          if (value == "Green") { return `<p class="green">${value}</p>`; }
        },
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'Yellow', title: 'Yellow', class: "yellow" },
              { value: 'Red', title: 'Red', class: "red" },
              { value: 'Green', title: 'Green', class: "green" },
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'All',
            list: [
              { value: 'Yellow', title: 'Yellow', class: "yellow" },
              { value: 'Red', title: 'Red', class: "red" },
              { value: 'Green', title: 'Green', class: "green" },
            ],
          },
        },
      },
      blockers: {
        title: 'Blockers',
        filter: false,
        type: 'html',
        valuePrepareFunction: (value) => {
          let elephantList;
          let displaydata = "";
          if (value != null) {
            elephantList = (value.split(","));
            for (let x = 0; x < elephantList.length; x++) {
              displaydata = displaydata + `<a href="https://tkts.sys.comcast.net/browse/${elephantList[x]}" target="_blank">  ${elephantList[x]}</a>`;
            }
          }
          return displaydata;
        },
      },
    },
    actions: {
      add: false,
      edit: true,
      delete: false,
      position: 'left',
      custom: [
        {
          name: 'add',
          title: '+Mail ',
        }]
    },
    edit: {
      confirmSave: true,
    }
  };
  addtoMail(event){
    if(event.action === "add"){
      if(!this.table_selected.includes(event.data))
        this.table_selected.push(event.data)
      else
        alert("Already added");
    }
  }
  deleteFromMail(hero){
    this.table_selected.splice(this.table_selected.indexOf(hero),1);
  }
  addAllFiltered(){
    for(var i=0;i<this.source.getElements()["__zone_symbol__value"].length;i++){
      if(!this.table_selected.includes(this.source.getElements()["__zone_symbol__value"][i]))
        this.table_selected.push(this.source.getElements()["__zone_symbol__value"][i]);
    }
  }
  onEditConfirm(event) {
    if (event.newData.blockers == null) { event.newData.blockers = ""; }
    if (event.newData.currentstatus == null) { event.newData.currentstatus = ""; }
    if (event.newData.monthlydate == null) { event.newData.monthlydate = "0000-00-00"; }
    this.service.updatexecdetails(event.data.intake.trim(), event.newData.currentstatus.trim(), event.newData.monthlydate.trim(), event.newData.RAG.trim(), event.newData.blockers.trim());
    event.confirm.resolve(event.newData);
    console.log(this.source);
  }
  source: LocalDataSource;
  constructor(private service: execstatusService) {
  }
  ngOnInit() {
    this.checkperson = localStorage.getItem('auth_key');
    this.source1 = this.service.getEXEC();
    this.source1.subscribe(data => {
      this.data4 = data;
      this.source = new LocalDataSource(this.data4);
    });
  }
  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getMonth() + 1), pad(d.getDate() + 1), d.getFullYear()].join('/');
  }
  pusharray = [];
  cmselection(event): void {
    console.log(event.selected);
    //this.pusharray.push(event.selected);
  }
  clicked() {
    //console.log(this.data4);   
    // console.log(this.pusharray);
    if(this.table_selected.length==0){
      alert("List empty! Please select tickets. or Add all")
    }else{
    this.checkpersonmail = localStorage.getItem('email_id');
    let frontdata = JSON.stringify(this.table_selected);
    //let frontdata1 = frontdata.slice(52, -1);
    let frontdata12 = JSON.parse(frontdata);
    let original = "";
    let frontenddate = "";
    for (let x = 0; x < frontdata12.length; x++) {
      for (let y = 0; y < this.data4.length; y++) {
        if (frontdata12[x].intake == this.data4[y].intake && frontdata12[x].monthlydate == this.data4[y].monthlydate) {
          let startdate = this.convertDate(this.data4[y].start_date.substring(0, 10));
          if (startdate == "NaN/NaN/NaN") { startdate = "null"; }
          let enddate = this.convertDate(this.data4[y].end_date.substring(0, 10));
          if (enddate == "NaN/NaN/NaN") { enddate = "null"; }
          let linkref = '"' + "https://tkts.sys.comcast.net/browse/" + frontdata12[x].intake + '"';
          let blockersset = "";
          let aa = frontdata12[x].blockers;
          console.log(aa);
          var array = [];
          if (aa != null) { array = aa.split(','); }
          // console.log(array);
          for (let z = 0; z < array.length; z++) {
            blockersset = blockersset + "<a href='https://tkts.sys.comcast.net/browse/" + array[z] + "'>" + array[z] + "</a>&nbsp;&nbsp;";
            // console.log(blockersset);
          }
          if (blockersset == "") { blockersset = "null"; }
          let urllink = `<a href=` + linkref + 'target="_blank">' + frontdata12[x].intake + '&nbsp;' + frontdata12[x].summary + '</a>';
          let mailcolor = "";
          if (frontdata12[x].RAG == "Red") { mailcolor = "#f44b4b"; }
          else if (frontdata12[x].RAG == "Yellow") { mailcolor = "yellow"; }
          else if (frontdata12[x].RAG == "Green") { mailcolor = "#65e665"; }
          original = original + '<b><u>' + urllink + '</u></b>' + '&nbsp;' + '<span style="background-color:' + mailcolor + '">' + frontdata12[x].RAG + '</span>' + '<br/>'
            + '<b>Start Date: </b>' + startdate + '&nbsp;&nbsp;&nbsp' + '<b>Completion Date: </b>' + enddate + '<br/>'
            + '<b>Project Overview:&nbsp;&nbsp;   </b>' + this.data4[y].description.substring(0, 500) + '<br/>' + '<b>This week: </b>' + frontdata12[x].currentstatus + '<br/>'
            + '<b>Blockers: </b>' + blockersset + '<br/><br/></br/>';
        }
      }
      frontenddate = this.convertDate(frontdata12[x].monthlydate.substring(0, 10));
    }
    var header = "To: " + this.checkpersonmail + "\nSubject: Status Report " + frontenddate + "\nX-Unsent: 1\nContent-Type: text/html\n\n";
    var html = "<html><body style='font-family:Calibri Light;'>" + original + "</body></html>";
    var text = header + html;
    var data = new Blob([text], { type: 'text/plain' });
    FileSaver.saveAs(data, "mail.eml");
    this.table_selected = [];
  }
}
}