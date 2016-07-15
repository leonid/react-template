import axios from 'axios';
import store from '../store';
import MyAPI from './my-api';

import { getCompaniesSuccess, deleteCompanySuccess, getCompanySuccess, createCompanySuccess, updateCompanySuccess } from '../actions/company-actions';

class ServiceCompanyAPI extends MyAPI {
    constructor() {
        super('/api/v1/servicecompany/', {
            list: getCompaniesSuccess,
            search: getCompaniesSuccess,
            create: createCompanySuccess,
            view: getCompanySuccess,
            update: updateCompanySuccess,
            delete: deleteCompanySuccess
        });
    }
}

export default ServiceCompanyAPI;
