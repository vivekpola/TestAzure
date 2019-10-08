import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartersjsonService } from './chartersjson.service';

@Component({
  selector: 'app-charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.css'],
  providers: [ChartersjsonService]
})
export class CharterComponent implements OnInit {

 data: Observable<Array<any>>;
  constructor(private service: ChartersjsonService) {
    this.data = service.getCharters();
    console.log("AppComponent.data:" + this.data);
  }

  ngOnInit() {
  }
  
}
