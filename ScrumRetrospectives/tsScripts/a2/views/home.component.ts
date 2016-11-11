import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { RetrospectiveFeedback, Retrospective, FeedbackType } from '../entities';

@Component({
    selector: 'home-detail',
    templateUrl: 'tsScripts/a2/views/home.component.html'
})
export class HomeComponent implements OnChanges {

    constructor() {
    }

    model:Retrospective[] = [
        {
            name:'Retrospective 1',
            summary:'Post release retrospective',
            date:'27/07/2016',
            participants:['Victor','Gareth','Mike'],
            feedback:[
                {
                    username:"Gareth",
                    body:"Sprint objective met",
                    feedbackType:FeedbackType.POSITIVE
                },{
                    username:"Viktor",
                    body:"Too many items piled up in the awaiting QA",
                    feedbackType:FeedbackType.NEGATIVE
                },{
                    username:"Mike",
                    body:"We should be looking to start using VS2015",
                    feedbackType:FeedbackType.IDEA
                }
            ]
        }
    ];

    ngOnInit() {
    }

    ngOnChanges(sc:SimpleChanges) {

    }

    ngOnDestroy() {
    }


}