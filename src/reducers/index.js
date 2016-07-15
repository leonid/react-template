import { combineReducers } from 'redux';

// Reducers
import companyReducer from './company-reducer';
import pricelistReducer from './pricelist-reducer';

// Combine Reducers
const reducers = combineReducers({
    companyState: companyReducer,
    pricelistState: pricelistReducer
});

export default reducers;
