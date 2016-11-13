import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { RetrospectiveFeedback, Retrospective, FeedbackType } from '../entities';
import {ScrumService} from "../services";

@Component({
    selector: 'home-detail',
    templateUrl: 'tsScripts/a2/views/home.component.html',
    providers: [ScrumService]
})
export class HomeComponent implements OnChanges {

    constructor(private scrumService:ScrumService) {
    }

    model:Retrospective[] = [];

    ngOnInit() {
        let x: HomeComponent = this;
        this.scrumService.listRetrospectives(retrospectives => {
            x.model = retrospectives;
        });
    }

    ngOnChanges(sc:SimpleChanges) {

    }

    ngOnDestroy() {
        this.model = [];
    }


}