import {setWeatherDate, setWeatherForcastDate}from  './ActionGenerator';
import * as Constant from  '../../Constant/constant';

export const GetWeather = (cityName) => {
    return dispatch => {
        console.log(">>>>> GetUsers Called for :"+ cityName)
        fetch(Constant.Weather_API+cityName+'&APPID='+Constant.APPID)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(">>>>> API date received : " + JSON.stringify(result))
            dispatch(setWeatherDate(result));
          }
        ) 
        .catch( err => {
          err.text().then(errorMessage => {
            console.log(">>>>> API Error : " + JSON.stringify(errorMessage))
          })
        })
    };
};


export const GetDailyForcast = (lat,lon) => {
  return dispatch => {
      console.log(">>>>> GetDailyForcast Called for :"+ lat + "=> " + lon)
      fetch(Constant.Daily_Weather_Forcast_API+lat+'&lon='+lon+'&exclude=hourly,minutely,current&appid='+Constant.APPID)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(">>>>> GetDailyForcast API date received : " + JSON.stringify(result))
          dispatch(setWeatherForcastDate(result));
        }
      ) 
      .catch( err => {
        err.text().then(errorMessage => {
          console.log(">>>>> GetDailyForcast API Error : " + JSON.stringify(errorMessage))
        })
      })
  };
};