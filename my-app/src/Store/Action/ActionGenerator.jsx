import * as ActionType from  './ActionType';


export function setName(firstName, lastName) {
    return {
        type: ActionType.ADD_NAME,
        firstName: firstName,
        lastName: lastName
    };
}

export function setWeatherDate(data) {
    return {
        type: ActionType.SET_WEATHER_DATA,
        data: data,
    };
}

export function setWeatherForcastDate(data) {
    return {
        type: ActionType.SET_WEATHER_FORCAST_DATA,
        data: data,
    };
}


