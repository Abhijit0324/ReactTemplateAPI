import initialState from '../initialState';
import * as ActionType from  '../Action/ActionType';


function serviceReducer (state = {}, action) {
     switch (action.type) {
      case ActionType.SET_WEATHER_DATA:
        let obj = JSON.parse(JSON.stringify(action.data))
        console.log(">>>>> reducer call ADD_SERVICE_CALL >>>>>>"+ JSON.stringify(obj))
        return { ...state, coord: obj.coord, lat: obj.coord.lat, lon: obj.coord.lon,
           weather: obj.weather};
      case ActionType.SET_WEATHER_FORCAST_DATA:
          let objForCast = JSON.parse(JSON.stringify(action.data))
          console.log(">>>>> reducer call SET_WEATHER_FORCAST_DATA >>>>>>"+ JSON.stringify(objForCast))
          return { ...state};
      default:
        return state
    }
  }

export default serviceReducer;