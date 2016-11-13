import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Retrospective} from "./entities";
import {FeedbackType} from "./entities";
import {RetrospectivesFunc} from './entities';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScrumService {
    constructor(private http:Http) {}
    private model:Retrospective[] = null; /*[
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
    ];*/
    public listRetrospectives(consume: RetrospectivesFunc): void {
        this.http.get('/api/Scrum')
            .toPromise()
            .then(response => {
                consume(response.json() as Retrospective[]);
            });
    }
}