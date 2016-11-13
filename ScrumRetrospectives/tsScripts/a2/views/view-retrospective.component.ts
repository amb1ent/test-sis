import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RetrospectiveFeedback, Retrospective, FeedbackType } from '../entities';
import {ScrumService} from "../services";

@Component({
    selector: 'view-retrospective-detail',
    templateUrl: 'tsScripts/a2/views/view-retrospective.component.html',
    providers: [ScrumService]    
})
export class ViewRetrospectiveComponent implements OnChanges {

    constructor(private route:ActivatedRoute, private scrumService:ScrumService) {
    }

    id:string = null;

    model:Retrospective = new Retrospective();

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.model = new Retrospective();
        console.log('id:' + this.id);
        let x:ViewRetrospectiveComponent = this;
        this.scrumService.getRetrospective(this.id, retrospective => {
            x.model = retrospective;
        });
    }

    ngOnChanges(sc:SimpleChanges) {

    }

    ngOnDestroy() {
        this.model = new Retrospective();
    }


}