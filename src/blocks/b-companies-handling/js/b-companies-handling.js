import React from 'react';

import {Link} from 'react-router/es6';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const CompaniesHandling = React.createClass({
    getInitialState: function () {
        return {
            companies: [],
            airports: []
        };
    },

    componentDidMount: function () {

        const reqObj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        };

        const companyRequest = new Request('/api/v1/handlingcompany/');
        const airportRequest = new Request('/api/v1/airport/');

        fetch(companyRequest, reqObj).then( (result) => {
            return result.json();
        }).then((data) => {

            let companiesOptions = data.objects.map((company)=> {
                return {
                    label: company.title,
                    value: company.id
                };
            });

            this.setState({
                companies: companiesOptions
            });
        });

        fetch(airportRequest, reqObj).then( (result) => {
            return result.json();
        }).then((data) => {

            let airportsOptions = data.objects.map((airport)=> {
                return {
                    label: airport.title,
                    value: airport.id
                };
            });

            this.setState({
                airports: airportsOptions
            });
        });
    },

    render: function () {

        return (
            <div>

                <div className="g-5">
                    <fieldset className="b-form-row">
                        <h2 className="g-h-title">
                            <Link to="/factbooks/companies">Handling companies</Link>
                            <Link to="/factbooks/pricelists" className="g-h-title__crumb">Pricelists</Link>
                        </h2>
                        <Select
                            name="form-field-name"
                            placeholder = "Выберите компанию"
                            options={this.state.companies}
                        />
                    </fieldset>
                    <p>
                        <a href="/factbooks/companies/add" className="b-link__icon"><i className="fa fa-plus-square" /> Add a company</a>
                    </p>
                </div>

                <div className="g-5">
                    <fieldset className="b-form-row">
                        <h2 className="g-h-title"><Link to="/factbooks/airports">Airports</Link></h2>
                        <Select
                            name="form-field-name"
                            placeholder = "Выберите аэропорт"
                            options={this.state.airports}
                        />
                    </fieldset>
                </div>


            </div>
        );
    }
});

export default CompaniesHandling;
