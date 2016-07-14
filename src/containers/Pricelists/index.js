import React, {PropTypes} from 'react';

import Breadcrumbs from '../../blocks/b-breadcrumbs/js/b-breadcrumbs.js';

const PriceStepCreating = React.createClass({
    propTypes: {
        expandStep: PropTypes.func
    },

    updateStepState: function () {
        console.log('updateStepState');
    },

    render: function () {
        return (
            <div
                className="g-section b-create-price__section b-create-price__section_creating b-create-price__section_active">
                <div className="g-h2 g-section__title" onClick={this.props.expandStep}>1. Creating <i
                    className="fa fa-sort-down"/></div>
                <div className="g-clear g-section__content">
                    <div className="g-section__column g-section__column_50 g-section__column_p-r">
                        <div className="g-section__row">
                            {/*<Field name="handlingCompany" postfix="dropdown float required" icon="sort-down" items={[]}*/}
                                   {/*type="select">Handling company</Field>*/}
                        </div>
                        <div className="g-section__row">
                            <div className="b-create-price__row b-create-price__row_left">
                                {/*<Field name="validFrom" placeholder="Placeholder" postfix="date float required"*/}
                                       {/*icon="calendar" value="10.12.2012" maxLength="10">Pricelist valid from</Field>*/}
                            </div>
                            <div className="b-create-price__row b-create-price__row_right">
                                {/*<Field name="validTo" placeholder="Placeholder" postfix="date" icon="calendar"*/}
                                       {/*value="10.12.2012" maxLength="10">to</Field>*/}
                            </div>
                        </div>
                        <div className="g-section__row">
                            <div className="b-create-price__row b-create-price__row_left">
                                {/*<Field name="validAt" placeholder="Placeholder" postfix="date float required"*/}
                                       {/*icon="calendar" value="10.12.2012" maxLength="10">Still valid at</Field>*/}
                            </div>
                            <div className="b-create-price__row b-create-price__row_right">
                                {/*<Field name="attach" placeholder="Placeholder" postfix="date" icon="calendar"*/}
                                       {/*value="10.12.2012" maxLength="10"><i*/}
                                    {/*className="fa fa-paperclip fa-lg fa-flip-horizontal"/></Field>*/}
                            </div>
                        </div>
                        <div className="g-section__row">
                            {/*<Field name="for_1" postfix="dropdown float tags required" icon="sort-down" items={[]}*/}
                                   {/*type="select">Pricelist for</Field>*/}
                        </div>
                        <div className="g-section__row">
                            {/*<Field name="for_2" postfix="dropdown float tags" icon="sort-down" items={[]} type="select">Pricelist*/}
                                {/*for</Field>*/}
                        </div>
                    </div>
                    <div className="g-section__column g-section__column_50 g-section__column_p-l">
                        <p className="g-bold">Pricelist name "Shannon Air Link Ltd"</p>
                        {/*<FileUpload />*/}
                        <div className="b-create-price__complexity">
                            {/*<Field name="input" postfix="dropdown" icon="caret-down" placeholder="Not defined"*/}
                                   items={['Not defined', 'Complexity easy', 'Complexity medium', 'Complexity hard']}
                                   type="select"/>
                        </div>
                        <div className="b-create-price__complexity">
                        </div>
                    </div>
                </div>
                <div className="g-section__footer b-create-price__step-control">
                    {/*<Button>Next</Button>*/}
                </div>
            </div>
        );
    }
});

const PriceStepDefining = React.createClass({
    getInitialState: function () {
        return {
            currencyList: [1]
        };
    },

    propTypes: {
        expandStep: PropTypes.func
    },

    addCurrency: function () {
        let currencyList = this.state.currencyList;

        currencyList.push(1);
        this.setState({currencyList: currencyList});
    },

    render: function () {
        return (
            <div className="g-section b-create-price__section b-create-price__section_defining">
                <div className="g-h2 g-section__title" onClick={this.props.expandStep}>2. Defining <i
                    className="fa fa-sort-down"/></div>
                <div className="g-clear g-section__content">
                    <div className="g-section__column g-section__column_38 g-section__column_p-r">
                        <div className="g-clear g-section__row b-create-price__defining">
                             {this.state.currencyList.map(function (item, index) {
                                 return (
                                     <Field name={'input_' + index} key={index + Common._generateId()}
                                            postfix={!index ? 'dropdown currency required 32' : 'dropdown currency 32'}
                                            icon="sort-down" type="select"
                                            items={['USD', 'EUR', 'RUB', 'KZT']}>{index ? '' : 'Currency'}</Field>
                                 );
                             }.bind(this))}
                                 <span className="b-link__action" onClick={this.addCurrency}><i className="fa fa-plus"/>Add Currency</span>
                        </div>
                        <div className="g-clear g-section__row b-create-price__defining">
                            <Checkbox>There are <span className="g-bold">groups</span> of plane types in
                                pricelist</Checkbox>
                            <Checkbox>There are <span className="g-bold">sections</span> of pricelist
                                positions</Checkbox>
                        </div>
                    </div>
                    <div className="g-section__column g-section__column_62 g-section__column_p-l">
                        Defining
                    </div>
                </div>
            </div>
        );
    }
});

const PriceStepTyping = React.createClass({
    propTypes: {
        expandStep: PropTypes.func
    },

    render: function () {
        return (
            <div className="g-section b-create-price__section">
                <div className="g-h2 g-section__title" onClick={this.props.expandStep}>
                    3. Typing <i className="fa fa-sort-down"/>
                </div>
                <div className="g-overflow g-section__content">Typing</div>
            </div>
        );
    }
});

const CreatePriceApp = React.createClass({
    expandStep: function (e) {
        e.target.parentNode.classList.toggle('b-create-price__section_active');
    },

    render: function () {
        return (
            <div className="b-create-price">
                <Breadcrumbs />
                <h1 className="g-h1 g-title">New Pricelist</h1>
                <PriceStepCreating expandStep={this.expandStep}/>
                {/*<PriceStepDefining expandStep={this.expandStep}/>*/}
                <PriceStepTyping expandStep={this.expandStep}/>
            </div>
        );
    }
});

export default CreatePriceApp;
