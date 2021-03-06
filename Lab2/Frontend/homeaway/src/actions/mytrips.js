import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken'
import jwt from 'jsonwebtoken';
import rootURL from '../config.js';

export const FETCH_MY_TRIPS = "fetch_my_trips";
export const FETCH_MY_TRIPS_ERROR = "fetch_my_trips_error";

function getSuccess(response) {
    return {
      type: FETCH_MY_TRIPS,
      payload: response
    }
  }
  function getError(response) {
    return {
      type: FETCH_MY_TRIPS_ERROR,
      payload: response
    }
  }

function fetch_mytrips(username){
  setAuthorizationToken(localStorage.getItem('jwtToken'));

    //middleware call
  //receive response from backend
  return function(dispatch) {
  
  
    axios.get(rootURL+"/mytrips",{ params: {
        username:username
        
      }}).then(res=>{
        console.log("Get t Action",res);
        
    dispatch(
    getSuccess(res)
  )}).catch(error=>{
      dispatch(getError(error))
  })
}


}
export default fetch_mytrips;