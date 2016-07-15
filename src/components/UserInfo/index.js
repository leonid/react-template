import React from 'react';

import '../scss/b-header-user-info.scss';

const UserInfo = React.createClass({
    getInitialState: function () {
        return {
            user: this.props.user
        };
    },

    propTypes: {
        user: React.PropTypes.object
    },

    componentDidMount: function () {
        const url = '/api/v1/user/';

        fetch(url, {credentials: 'same-origin'}).then( (result) => {
            return result.json();
        }).then((data) => {
            this.setState({
                user: data.objects[0]
            });
        });
    },

    render: function () {
        let userProfile;

        if (this.state.user) {
            userProfile = <div className="b-header__user-name">
                <span className="i-user"/>
                &#160;
                {this.state.user.first_name}&#160;{this.state.user.last_name}
                &#160;
                <span className="fa fa-caret-down"/>

                <div className="b-header__user-actions">
                    <a href="/profile/kpi" className="b-header__user-actions--link">Мой KPI</a>
                    <a href="/components" className="b-header__user-actions--link">Components</a>
                    <a href="/profile/settings" className="b-header__user-actions--link">Настройки</a>
                    <hr />
                    <a href="/profile/logout" className="b-header__user-actions--link">Выйти</a>
                </div>
            </div>;
        } else {
            userProfile = <div><a href="login">You should login</a></div>;
        }

        return (
            <div className="b-header__user-info">
                 {userProfile}
            </div>
        );
    }
});

export default UserInfo;
