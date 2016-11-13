export enum FeedbackType {
    POSITIVE = 1,
    NEGATIVE = 2,
    IDEA = 3,
    PRAISE = 4
}

export class RetrospectiveFeedback {
    public username:string;
    public body:string;
    public feedbackType:FeedbackType;
}

export class Retrospective {
    public name:string; // unique key
    public summary:string;
    public date:string;
    public participants:string[];
    public feedback:RetrospectiveFeedback[];
}

export interface RetrospectivesFunc {
    (retrospectives:Retrospective[]):void
}

export interface RetrospectiveFunc {
    (retrospective: Retrospective): void
}