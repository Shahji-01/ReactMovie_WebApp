export {removemovie} from "../reducers/MovieSlice";
import axios from "../../Utils/axios";
import {loadmovie} from "../reducers/MovieSlice";


export const asyncloadmoive =(id) => async(dispatchEvent,getState)=>{
    try{
        const detail =await axios.get(`/movie/${id}`);
        const externalid =await axios.get(`/movie/${id}/external_ids`);
        const recommendations =await axios.get(`/movie/${id}/recommendations`);
        const similar =await axios.get(`/movie/${id}/similar`);
        const translations =await axios.get(`/movie/${id}/translations`);
        const videos =await axios.get(`/movie/${id}/videos`);
        const watchProvider =await axios.get(`/movie/${id}/watch/providers`);

        let theunlimitedDetail={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            translations:translations.data.translations.map((t)=>t.name),
            videos:videos.data.results.find(m=>m.type==="Trailer"),
            watchProvider:watchProvider.data.results.IN
        };
        dispatchEvent(loadmovie(theunlimitedDetail));
        // console.log(theunlimitedDetail);
    }catch(error){
        console.log(error);
    }
}