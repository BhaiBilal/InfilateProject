import axios from 'axios';

// const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw,ne) => {

      try{
          const { data: { data } }=await axios.get(URL,{
              params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'e6703a4f8amshb83b0f35987986ap13740cjsne8508341e242'
              }
            })
          return data
      }
  
      catch(err) { 
           console.log(err)
      }
  }


















// export const getPlacesData = async (sw,ne) => {

//     try{
//         const { data: { data } }=await axios.get(URL,{
//             params: {
//               bl_latitude: sw.lat,
//               tr_latitude: ne.lat,
//               bl_longitude: sw.lng,
//               tr_longitude: ne.lng,
//             },
//             headers: {
//               'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//               'x-rapidapi-key': 'e6703a4f8amshb83b0f35987986ap13740cjsne8508341e242'
//             }
//           })
//         return data
//     }

//     catch(err) { 
         
//     }

// }