import { IncomingMessage, ServerResponse } from "http" 
import {serviceListEpisodes} from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service"
import { HttpStatus } from "../utils/status-code"
import { ContentTypye as ContentType } from "../utils/content-type"
import { filterPodcastModel } from "../models/filter-podcast-model"

export const getListEpisodes = async(req: IncomingMessage, res: ServerResponse)=>{
    const content = await serviceListEpisodes()

    res.writeHead(HttpStatus.OK, {"Content-Type": ContentType.JSON})
    res.end(JSON.stringify(content))
}

export const getFilterEpisodes = async(req: IncomingMessage, res: ServerResponse)=>{

    const content: filterPodcastModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON})
    res.end(JSON.stringify(content.body))
}