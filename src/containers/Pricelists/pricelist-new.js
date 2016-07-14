import React, {PropTypes} from 'react';

import Breadcrumbs from '../../blocks/b-breadcrumbs/js/b-breadcrumbs.js';

const CreatePricelist = React.createClass({

    render: function () {
        return (
            <div className="b-create-price">
                <Breadcrumbs />
                <h1 className="g-h1 g-title">New Pricelist</h1>
            </div>
        );
    }
});

export default CreatePricelist;
