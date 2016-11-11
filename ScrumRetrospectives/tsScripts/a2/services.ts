import {Injectable} from '@angular/core';
import {Retrospective} from "./entities";
import {FeedbackType} from "./entities";
@Injectable()
export class ScrumService {
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
    public getModel():Retrospective[] {
        return this.model;
    }
}