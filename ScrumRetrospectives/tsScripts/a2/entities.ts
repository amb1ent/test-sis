import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

export enum FeedbackType {
    POSITIVE = 1,
    NEGATIVE = 2,
    IDEA = 3,
    PRAISE = 4
}

@JsonApiModelConfig({
    type: 'retrospective_feedback'
})
export class RetrospectiveFeedback extends JsonApiModel {
    @Attribute()
    public username: string;
    @Attribute()
    public body: string;
    @Attribute()
    public feedbackType:FeedbackType;
}

@JsonApiModelConfig({
    type: 'Scrum'
})
export class Retrospective extends JsonApiModel {
    @Attribute()
    public name: string; // unique key
    @Attribute()
    public summary: string;
    @Attribute()
    public date: string;
    @HasMany()
    public participants: string[];
    @HasMany()
    public feedback:RetrospectiveFeedback[];
}