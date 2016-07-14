import axios from 'axios';
import store from '../store';
import { getAirportsSuccess, deleteAirportSuccess, airportInfoSuccess } from '../actions/airport-actions';

/**
 * Get all companies
 */

export function getAirports() {
    return axios.get('/api/v1/airport/')
        .then(response => {
            store.dispatch(getAirportsSuccess(response.data));
            return response;
        });
}

/**
 * Search companies
 */

export function searchAirports(query = '') {
    return axios.get('/api/v1/airport/?query='+ query)
        .then(response => {
            store.dispatch(getAirportsSuccess(response.data));
            return response;
        });
}

/**
 * Delete a company
 */

export function deleteAirport(airportId) {
    return axios.delete('/api/v1/airport/' + airportId)
        .then(response => {
            store.dispatch(deleteAirportSuccess(airportId));
            return response;
        });
}

/**
 * getAirportInfo()
 *
 */

export function getAirportInfo(airportId) {
    return axios.get('/api/v1/airport/' + airportId)
        .then(response => {

            store.dispatch(airportInfoSuccess(airportId));
            return response;

        });
}
