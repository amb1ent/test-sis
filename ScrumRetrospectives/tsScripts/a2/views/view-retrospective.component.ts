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

    model:Retrospective = null;

    ngOnInit() {
        this.id =this.route.snapshot.params['id'];
        let retrospectives = this.scrumService.getModel();
        this.model = new Retrospective();
        for (let i = 0, l = retrospectives.length; i<l;++i) {
            if (this.id == retrospectives[i].name) {
                this.model=retrospectives[i];
                break;
            }
        }
    }

    ngOnChanges(sc:SimpleChanges) {

    }

    ngOnDestroy() {
        this.model = null;
    }


}