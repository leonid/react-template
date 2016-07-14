import React from 'react';

import '../scss/b-header-bin.scss';

const HeaderBin = React.createClass({
    getInitialState: function () {
        return {
            tasks: null,
            alerts: null
        };
    },

    render: function() {
        return (
            <div className="b-header__bin">
                <a href="/bin" className="i-bin" title="Bin"></a>
            </div>
        );
    }
});

export default HeaderBin;
