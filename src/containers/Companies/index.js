import React from 'react';

import Breadcrumbs from 'components/Breadcrumbs';
import {Link} from 'react-router/es6';

// import Table from '../../components/Table';

const CompaniesList = React.createClass({
    getInitialState: function () {
        return {
            companies: []
        };
    },

    componentDidMount: function () {

        fetch('/api/v1/handlingcompany/', {credentials: 'same-origin'}).then( (result)=> {
            return result.json();
        }).then( (data) => {
            this.setState({
                companies: data.objects
            });
        });
    },

    render: function () {
        return (
            <article>
                <Breadcrumbs/>

                <h1 className="g-h1 g-title">
                    Handling companies
                    <Link to="/factbooks/pricelists/new" className="g-h1__action--primary">
                        <i className="fa fa-plus-square" /> Add pricelist
                    </Link>
                    <label className="g-h1__action--secondary">
                        <i className="fa fa-filter" /> Reset filters
                    </label>
                </h1>
                <div className="g-section">
                     {
                         this.state.companies.length > 0 ?
                            'Table':
                             <p>No companies</p>
                     }
                </div>
            </article>
        );
    }
});

export default CompaniesList;
