import { combineReducers } from 'redux';

// Reducers
import handlingCompanyReducer from './handling-company-reducer';
import serviceCompanyReducer from './service-company-reducer';
import pricelistReducer from './pricelist-reducer';
import airportReducer from './airport-reducer';

// Combine Reducers
const reducers = combineReducers({
    handlingCompanyState: handlingCompanyReducer,
    serviceCompanyState: serviceCompanyReducer,
    airportState: airportReducer,
    pricelistState: pricelistReducer
});

export default reducers;
