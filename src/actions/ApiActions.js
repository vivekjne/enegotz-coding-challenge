
import {
GET_DATA,
SET_LOADING,
SET_ERROR
} from './types';


// Get Posts
export const getMakeData = () => async dispatch => {
  dispatch(setLoading(true));
 try{
  const response = await fetch("https://enegotz.glitch.me/")
  if(response.ok){
    const responseJSON = await response.json()
    const makeArray = responseJSON.map(res=>res.make)
    const makeDistinctArray= Array.from(new Set(makeArray))
    console.log("Make array=",makeDistinctArray)
    const  makeData= makeDistinctArray.map(make=>({
      make,
      logo:responseJSON.find(s=>s.make===make).logo
    }))

    console.log("Make data=",makeData)
    dispatch({
      type:GET_DATA,
      data:responseJSON,
      make:makeData
    })
  }
 }catch(err){
  dispatch({
    type:SET_ERROR,
    data:"Error while fetching data"
  })
 }
};


export const setLoading = (flag) => {
  return {
    type: SET_LOADING,
    flag
  };
};
