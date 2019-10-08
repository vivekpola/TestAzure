import { Component, ViewChild, ViewEncapsulation,OnInit  } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   private _opened: boolean = false;
    private _opened1: boolean = false;
  private _modeNum: number = 1;
  public loggedin = false;
  public isAdmin = false;
  public notloggedin = true;
  public circularlogo;
  userloggedin; comcastnowUrl; userName;
  //private _positionNum: number = 0; //for default check

  private _MODES: Array<string> = ['over', 'push', 'slide', 'dock'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  constructor(private router: Router) {}
  ngOnInit() {
     if(window.localStorage.getItem('auth_key')){
       this.userloggedin = 'https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_'+window.localStorage.getItem('auth_key');
       this.comcastnowUrl = 'https://www.comcastnow.com/profile/'+window.localStorage.getItem('pernr');
       this.userName =window.localStorage.getItem('userName');
       if(window.localStorage.getItem('role') == "Admin"){
         this.isAdmin = true;
         console.log("Haaaaas");
       }
       this.loggedin = true;
       this.notloggedin = false;
       console.log(window.localStorage.getItem('auth_key'));
     }else{
       this.loggedin = false;
       this.notloggedin = true;
       this.router.navigate(['/home']);
     }
  }
  helpWindow(event) {
    window.open(this.comcastnowUrl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }
  logout(){
    window.localStorage.removeItem('auth_key');
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('role');
    window.localStorage.removeItem('pernr');
    window.localStorage.removeItem('userSubteam');    
    location.reload();
  }
  private _toggleOpened(): void {
    this._opened = !this._opened;
    this._opened1 = !this._opened1;
  }
   private _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  private _onOpened(): void {
    console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  private _onClosed(): void {
    console.info('Sidebar closed');
  }

  highlightedDiv: number = 1;

  toggleHighlight(newValue: number) {
  if (this.highlightedDiv === newValue) {
    this.highlightedDiv = 0;
  }
  else {
    this.highlightedDiv = newValue;
  }
}
@ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    model: Person = new Person();

    index: number = 0;
    backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }

    open() {
        this.modal.open();
    }
  
}
export class Person {
    firstName: string;
    lastName: string;
}