import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolsjsonService } from './toolsjson.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
  providers: [ToolsjsonService]
})
export class ToolsComponent implements OnInit {

autovalid: Observable<Array<any>>;
toolother: Observable<Array<any>>;
  constructor(private service: ToolsjsonService) {
    this.autovalid = service.getautovalid();
    this.toolother = service.getothers();
  }
  ngOnInit() {
  }

}
