import * as types from '../actions/action-types';

export function getCompaniesSuccess(companies) {
    return {
        type: types.GET_COMPANIES_SUCCESS,
        companies
    };
}

export function deleteCompanySuccess(companyId) {
    return {
        type: types.DELETE_COMPANY_SUCCESS,
        companyId
    };
}

export function companyInfoSuccess(companyInfo) {
    return {
        type: types.COMPANY_INFO_SUCCESS,
        companyInfo
    };
}
