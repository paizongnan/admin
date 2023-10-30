import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
//import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { ToastrService } from 'ngx-toastr';
import { EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Broadcaster } from './broadcaster';
import { Observable } from 'rxjs'

//import 'rxjs/add/operator/filter';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // providers: [ToastrService]
})
export class AppComponent {
  title = 'admin';
  childTitle: string = 'This text is passed to child';

  @Input()
  userdet: any = null;
  currentpath: any = null;
  isloggedin: any = null;

  constructor(public router: Router, 
    private broadcaster: Broadcaster,
    private toastr: ToastrService, 
    vRef: ViewContainerRef,
    private location: Location) 
   
    {

    // this.toastr.setRootViewContainerRef(vRef);

  }
  ngOnInit() {

    var tokenchk = localStorage.getItem("admintoken");

    if (tokenchk == null) {
      this.userdet = false
      // this.router.navigate(['/']);

    } else {
      this.userdet = true

      this.router.navigate(['/home']);

    }
  }

  logoutUser() {
    this.userdet = false
    localStorage.removeItem("admintoken");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  onNotify($event : any) {
    this.userdet = true

    console.log('event')
    console.log('event')
  }
}
