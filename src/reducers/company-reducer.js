import * as types from '../actions/action-types';

const initialState = {
    companies: [],
    company: {}
};

const companyReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.GET_COMPANIES_SUCCESS:
            return Object.assign({}, state, {companies: action.companies});

        case types.DELETE_COMPANY_SUCCESS:
            const newCompanies = _.filter(state.companies, company => company.id != action.companyId);
            return Object.assign({}, state, {companies: newCompanies});

        case types.GET_COMPANY_SUCCESS:
            return Object.assign({}, state, {company: action.companyInfo});
    }

    return state;

};

export default companyReducer;
