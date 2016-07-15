import axios from 'axios';
import store from '../store';
import {
  getCompaniesSuccess,
  deleteCompanySuccess,
  getCompanySuccess
} from '../actions/company-actions';

/**
 * Get all companies
 */

export function getCompanies() {
  return axios.get( '/api/v1/company/' )
    .then( response => {
      store.dispatch( getCompaniesSuccess( response.data ) );
      return response;
    } );
}

/**
 * Search companies
 */

export function searchCompanies( query = '' ) {
  return axios.get( '/api/v1/company/?query=' + query )
    .then( response => {
      store.dispatch( getCompaniesSuccess( response.data ) );
      return response;
    } );
}

/**
 * Delete a company
 */

export function deleteCompany( companyId ) {
  return axios.delete( '/api/v1/company/' + companyId )
    .then( response => {
      store.dispatch( deleteCompanySuccess( companyId ) );
      return response;
    } );
}

/**
 * getCompanyInfo() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getCompanyInfo( companyId ) {

  let company = {};

  // Get the company data from our database.
  return axios.get( '/api/v1/company/' + companyId )
    .then( response => {

      company = response.data;

    } );

}
