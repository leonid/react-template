import * as types from '../actions/action-types';

export function getCompaniesSuccess( companies ) {
  return {
    type: types.GET_COMPANIES_SUCCESS,
    companies
  };
}
export function createCompanySuccess( companyInfo ) {
  return {
    type: types.CREATE_COMPANY_SUCCESS,
    companyInfo
  };
}

export function updateCompanySuccess( companyInfo ) {
  return {
    type: types.UPDATE_COMPANY_SUCCESS,
    companyInfo
  };
}

export function deleteCompanySuccess( companyId ) {
  return {
    type: types.DELETE_COMPANY_SUCCESS,
    companyId
  };
}

export function getCompanySuccess( companyInfo ) {
  return {
    type: types.GET_COMPANY_SUCCESS,
    companyInfo
  };
}
