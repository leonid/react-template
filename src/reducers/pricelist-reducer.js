import * as types from '../actions/action-types';

const initialState = {
  pricelists: [],
  pricelist: {
    repos: []
  }
};

const pricelistReducer = function ( state = initialState, action ) {

  switch ( action.type ) {

    case types.GET_PRICELISTS_SUCCESS:
      return Object.assign( {}, state, {users: action.pricelists} );

    case types.DELETE_PRICELIST_SUCCESS:

      const newPricelists = _.filter( state.pricelists, pricelist => pricelist.id != action.pricelistId );
      return Object.assign( {}, state, {pricelists: newPricelists} );

    case types.EDIT_PRICELIST_SUCCESS:
    case types.PRICELIST_INFO_SUCCESS:
      return Object.assign( {}, state, {pricelistInfo: action.pricelistInfo} );

  }

  return state;

};

export default pricelistReducer;
