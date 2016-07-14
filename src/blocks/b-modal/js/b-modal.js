var Modal = React.createClass({
    propTypes: {
        visible: React.PropTypes.bool,
        tooltip: React.PropTypes.bool,
        overlay: React.PropTypes.bool,
        children: React.PropTypes.node
    },

    getInitialState: function () {
        return {
            visible: this.props.visible || false,
            tooltip: this.props.tooltip || false,
            overlay: this.props.overlay || true
        };
    },

    componentWillMount: function() {
        document.addEventListener('click', this.handleDocumentClick);

        document.addEventListener('keydown', this.handleEscKey, false);
    },

    componentWillUnmount: function() {
        document.addEventListener('click', this.handleDocumentClick);

        document.removeEventListener('keydown', this.handleEscKey, false);
    },

    componentDidMount: function(){
        if (this.state.visible) {
            document.body.classList.add('b-overlayed');
        }
    },

    handleEscKey: function(event){
        if(event.keyCode == 27){
            this.close();
        }
    },

    handleDocumentClick: function(event){
        var area = ReactDOM.findDOMNode(this.refs.modal);

        if (!area.contains(event.target)) {
            // this.setState({
            //     visible: false
            // });
        }
    },

    close: function(e) {
        document.body.classList.remove('b-overlayed');
        this.setState({
            visible: false
        });
    },

    show: function() {
        document.body.classList.add('b-overlayed');
        this.setState({
            visible: true
        });
    },

    render: function() {
        return (
            <div ref="modal" className={'b-modal' + (this.state.visible ? ' b-modal--visible' : '') + (this.state.tootip ? ' b-modal_help' : '')}>
                <a className="b-modal__close" onClick={this.close}><i className="fa fa-times"></i></a>
                <h3 className="b-modal__title">
                    <i className="fa fa-info-circle"></i>
                    IIIA ICAO
                </h3>
                <div className="b-modal__content">
                    <p>Тут текст, который раскрывает редкий термин. Возможно включеает в себя ссылку на <a className="b-link" href="/extra">внешний сайт</a>.</p>
                    <p>Текст показывается в слое под пиктограммой со знаком вопроса. закрыт может быть кликом вне слоя или Esc. Экран при отображении не затеняется.</p>
                    {this.props.children}
                </div>
            </div>
        )
    }
});
