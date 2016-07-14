import * as types from '../actions/action-types';

export function getAirportsSuccess(airports) {
    return {
        type: types.GET_AIRPORTS_SUCCESS,
        airports
    };
}

export function deleteAirportSuccess(airportId) {
    return {
        type: types.DELETE_AIRPORT_SUCCESS,
        airportId
    };
}

export function editAirportSuccess(airportId) {
    return {
        type: types.EDIT_AIRPORT_SUCCESS,
        airportId
    };
}

export function infoAirportSuccess(airportInfo) {
    return {
        type: types.INFO_AIRPORT_SUCCESS,
        airportInfo
    };
}
