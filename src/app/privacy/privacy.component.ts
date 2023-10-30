import { Component, Input, OnInit, EventEmitter, Output, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../userservice/user.service';
import { MessageService } from '../userservice/message.services';
import { HttpClient } from "@angular/common/http";
import { CONFIG } from '../../../config';

import { Broadcaster } from '../broadcaster';
import { Observable } from 'rxjs'
@Component({
    selector: 'privacy',
    styleUrls: ['./privacy.component.css'],
    templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit {

    pagetitle: string;
    pagecontent: string;

    constructor(private http: HttpClient,
        private _appservice: UserService,
        private _message: MessageService,
        private _router: Router,
        private broadcaster: Broadcaster
    ) {
        this.pagetitle = ''
        this.pagecontent = ''
    }
    ngOnInit(): void {
        var obj = { page: "privacy" }
        this._appservice.getCmsPage(obj).subscribe((Response) => {
            console.log(Response)
            this.pagetitle = 'Privacy Policy'
            this.pagecontent = (Response as any).response_data.content

        }, (Error) => {
        })
    }
}
