import { filterPodcastModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcast-repository"
import { HttpStatus } from "../utils/status-code"


export const serviceFilterEpisodes = async(podcastName: string | undefined ): Promise<filterPodcastModel>=>{

    let responseFormat : filterPodcastModel ={ 
        statusCode : 0,
        body: []
    }

    // search datas 
    const queryString = podcastName?.split('?p=')[1] || ""
    const data = await repositoryPodcast(queryString)

    //double check if content exist
    if (data.length !== 0 ) responseFormat.statusCode = HttpStatus.OK
    else responseFormat.statusCode = HttpStatus.NO_CONTENT

    responseFormat.body = data
 return responseFormat;
}