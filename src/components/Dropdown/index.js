import React, {PropTypes, Component} from 'react';

import './dropdown.scss';

class Dropdown extends Component {

    static propTypes = {
        items: PropTypes.array,
        filter: PropTypes.func,
        sort: PropTypes.any,
        limit: PropTypes.number,
        renderMenu: PropTypes.func,
        renderItem: PropTypes.func,
        onSelectItem: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        children: PropTypes.element
    };

    static defaultProps = {
        items: [],
        filter: (item, query) => item.toLowerCase().includes(query.toLowerCase()),
        sort: () => {},
        renderMenu: ({items}) => <ul className="b-dropdown__items">{items}</ul>,
        renderItem: ({item, highlighted, selected}) => <li className={'b-dropdown__item' + (selected ? ' b-dropdown__item_selected' : '') + (highlighted ? ' b-dropdown__item_highlighted' : '')}>{selected ? <i className="fa fa-check" />:''}{item}</li>,
        children: <input type="text" />
    };

    state = {
        open: false,
        highlighted: -1,
        selected: -1
    };

    get input() {
        return this.refs.input;
    }

    get items() {
        const {items, filter, sort, limit} = this.props;
        const {value = ''} = this.refs.input || {};

        return items
            .filter(item => filter(item, value))
            .sort(sort)
            .slice(0, limit);
    }

    componentWillMount() {
        this._blur = true;
    }

    open = () => {
        this.setState({open: true});
    };

    close = () => {
        this.setState({open: false});
    };

    toggle = () => {
        this.setState({open: !this.state.open});
    };

    // menu
    handleMouseLeave = _event => {
        this.setState({highlighted: -1});
    };

    handleMouseEnter = index => _event => {
        this.setState({highlighted: index});
    };

    handleMouseDown = () => {
        this._blur = false;
    };

    handleSelectItem = item => event => {
        const {onSelectItem} = this.props;
        const {input} = this.refs;

        /**
         * If there is no onSelectItem, just update the value
         */
        const selectHandler = onSelectItem
            ? onSelectItem(item, event)
            : input.value = item;

        /**
         * After updating the value, we need to trigger an onChange event.
         * Can also trigger by returning true in onSelectItem
         */
        if (selectHandler) {
            const changeEvent = new Event('input', {bubbles: true})
            input.dispatchEvent(changeEvent);
        }

        /**
         * Close the menu and allow blur events
         * to continue,
         */
        setTimeout(() => {
            input.focus();
            this._blur = true;
            this.close();
        });
    };

    // children
    // children
    handleFocus = event => {
        const {onFocus} = this.props;

        this.open();
        onFocus && onFocus(event);
    };

    // children
    handleBlur = event => {
        const {onBlur} = this.props;

        if (!this._blur) return;

        this.close();
        onBlur && onBlur(event);
    };

    // children
    handleKeyDown = event => {
        const {highlighted} = this.state;

        this.open();
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                const next = Math.min(highlighted + 1, this.items.length - 1);
                this.setState({highlighted: next});
                return;

            case 'ArrowUp':
                event.preventDefault();
                const prev = Math.max(highlighted - 1, -1);
                this.setState({highlighted: prev});
                return;

            case 'Enter':
                event.preventDefault();
                if (highlighted > -1) {
                    this.handleSelectItem(this.items[highlighted])(event);
                }
                return;

            case 'Escape':
                this.close();
                return;

            default:
                // TODO: Add debounce
                setTimeout(() => this.forceUpdate());
                return;
        }
    };

    render() {
        const {
            children,
            items,
            filter,
            sort,
            renderMenu: Menu,
            renderItem: Item,
            ...props
        } = this.props;

        const renderedItems = this.items.map((item, index) => {
            const highlighted = this.state.highlighted === index;
            const selected = this.props.value === item;
            return React.cloneElement(Item({item, index, highlighted, selected}), {
                onMouseEnter: this.handleMouseEnter(index),
                onMouseDown: this.handleMouseDown,
                onClick: this.handleSelectItem(item),
                key: `${index}${item.substr(0, 3)}`
            });
        });

        const renderedMenu = React.cloneElement(Menu({items: renderedItems}), {
            onMouseLeave: this.handleMouseLeave
        });

        return (
            <div className="b-dropdown" {...props}>
                 {React.cloneElement(children, {
                     onKeyDown: this.handleKeyDown,
                     onFocus: this.handleFocus,
                     onBlur: this.handleBlur,
                     ref: 'input',
                     name: this.props.name,
                     placeholder: this.props.placeholder,
                     className: 'b-input__field b-input__dropdown'
                 })}
                 {React.createElement('i',{className: 'fa fa-caret-down', onClick: this.toggle })}
                 {this.state.open && renderedMenu}
            </div>
        );
    }
}

export default Dropdown;
