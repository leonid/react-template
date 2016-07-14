import * as types from '../actions/action-types';

const initialState = {
    airports: [],
    airport: {
        repos: []
    }
};

const airportReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.GET_AIRPORTS_SUCCESS:
            return Object.assign({}, state, {airports: action.airports});

        case types.DELETE_AIRPORT_SUCCESS:
            const newAirports = _.filter(state.airports, airport => airport.id != action.airportId);
            return Object.assign({}, state, {airports: newAirports});

        case types.INFO_AIRPORT_SUCCESS:
            return Object.assign({}, state, {airportInfo: action.airportInfo});
    }

    return state;

};

export default airportReducer;
