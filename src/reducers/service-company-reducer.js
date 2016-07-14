import * as types from '../actions/action-types';

const initialState = {
    serviceCompanies: [],
    serviceCompany: {
        repos: []
    }
};

const serviceCompanyReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.GET_COMPANIES_SUCCESS:
            return Object.assign({}, state, {serviceCompanies: action.companies});

        case types.DELETE_COMPANY_SUCCESS:
            const newCompanies = _.filter(state.serviceCompanies, company => company.id != action.companyId);
            return Object.assign({}, state, {serviceCompanies: newCompanies});

        case types.VIEW_COMPANY_SUCCESS:
            return Object.assign({}, state, {serviceCompanyInfo: action.companyInfo});
    }

    return state;

};

export default serviceCompanyReducer;
