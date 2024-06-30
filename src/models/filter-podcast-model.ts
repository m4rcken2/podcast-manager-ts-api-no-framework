import { podcastModel } from "./podcast-model";

export interface filterPodcastModel{
    statusCode : number,
    body: podcastModel[],
}