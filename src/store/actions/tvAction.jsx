export {removetv} from "../reducers/TvSlice";
import axios from "../../Utils/axios";
import {loadtv} from "../reducers/TvSlice";


export const asyncloadtv =(id) => async(dispatchEvent,getState)=>{
    try{
        const detail =await axios.get(`/tv/${id}`);
        const externalid =await axios.get(`/tv/${id}/external_ids`);
        const recommendations =await axios.get(`/tv/${id}/recommendations`);
        const similar =await axios.get(`/tv/${id}/similar`);
        const translations =await axios.get(`/tv/${id}/translations`);
        const videos =await axios.get(`/tv/${id}/videos`);
        const watchProvider =await axios.get(`/tv/${id}/watch/providers`);

        let theunlimitedDetail={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            translations:translations.data.translations.map((t)=>t.name),
            videos:videos.data.results.find(m=>m.type==="Trailer"),
            watchProvider:watchProvider.data.results.IN
        };
        dispatchEvent(loadtv(theunlimitedDetail));
        // console.log(theunlimitedDetail);
    }catch(error){
        console.log(error);
    }
}