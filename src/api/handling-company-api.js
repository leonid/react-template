import axios from 'axios';
import store from '../store';
import { getCompaniesSuccess, deleteCompanySuccess, companyInfoSuccess } from '../actions/handling-company-actions';

/**
 * Get all companies
 */

export function getCompanies() {
    return axios.get('/api/v1/handlingcompany/')
        .then(response => {
            store.dispatch(getCompaniesSuccess(response.data));
            return response;
        });
}

/**
 * Search companies
 */

export function searchCompanies(query = '') {
    return axios.get('/api/v1/handlingcompany/?query='+ query)
        .then(response => {
            store.dispatch(getCompaniesSuccess(response.data));
            return response;
        });
}

/**
 * Delete a company
 */

export function deleteCompany(companyId) {
    return axios.delete('/api/v1/handlingcompany/' + companyId)
        .then(response => {
            store.dispatch(deleteCompanySuccess(companyId));
            return response;
        });
}

/**
 * getCompanyInfo() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getCompanyInfo(companyId) {

    // Start with an empty profile object and build it up
    // from multiple XHR requests.
    let profile = {};

    // Get the company data from our database.
    return axios.get('/api/v1/handlingcompany/' + companyId)
        .then(response => {

            let company = response.data;
            profile.name = company.name;
            profile.twitter = company.twitter;
            profile.worksOn = company.worksOn;

        });

}
