export { removepeople } from "../reducers/PeopleSlice";
import axios from "../../Utils/axios";
import { loadpeople } from "../reducers/PeopleSlice";

export const asyncloadpeople = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const moiveCredits = await axios.get(`/person/${id}/movie_credits`);

    let theunlimitedDetail = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: moiveCredits.data
    };
    // console.log("heloo");
    dispatch(loadpeople(theunlimitedDetail));
    // console.log(theunlimitedDetail);
  } catch (error) {
    console.log(error);
  }
};
