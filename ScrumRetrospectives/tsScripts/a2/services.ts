import {Injectable} from '@angular/core';
import { Http} from '@angular/http';
import {Retrospective, RetrospectiveFeedback} from "./entities";
import {FeedbackType} from "./entities";

import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';

@Injectable()
@JsonApiDatastoreConfig({
    baseUrl: '/api/',
    models: {
        Scrum: Retrospective
    }
})
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}


@Injectable()
export class ScrumService {

    constructor(private ds:Datastore) {}

    /*
    private model:Retrospective[] = [
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
    */

    public getModel(after:any) {
        this.ds.query(Retrospective,{}).subscribe((x:Retrospective[]) => { after(x); });
    }
}