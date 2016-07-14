import * as types from '../actions/action-types';

const initialState = {
    handlingCompanies: [],
    handlingCompany: {
        repos: []
    }
};

const handlingCompanyReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.GET_COMPANIES_SUCCESS:
            return Object.assign({}, state, {handlingCompanies: action.companies});

        case types.DELETE_COMPANY_SUCCESS:
            const newCompanies = _.filter(state.handlingCompanies, company => company.id != action.companyId);
            return Object.assign({}, state, {handlingCompanies: newCompanies});

        case types.VIEW_COMPANY_SUCCESS:
            return Object.assign({}, state, {handlingCompany: action.companyInfo});
    }

    return state;

};

export default handlingCompanyReducer;
