import axios from "axios";

// const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData= async(type,ne , sw) => {
    const options = {
      params: {
        bl_latitude:sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'X-RapidAPI-Key': '14b95356ecmsh8f58a27b7d31c7ep1cb461jsn2b96235b39e1',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    
    try {
      // console.log(type)
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` , options);
        // console.log(response);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}