import React, { useState, useEffect, createRef } from 'react';
import styles from './Dropdown.scss';
import Field from '../Field';
/*
TODO: Keys to bind
- PageUp
- PageDown
- Home
- End
*/
var Dropdown = function (props) {
    var value = props.value, onChange = props.onChange, onInputChange = props.onInputChange, options = props.options, openIcon = props.openIcon, closeIcon = props.closeIcon, searchable = props.searchable, filterable = props.filterable, fullWidth = props.fullWidth, noResultsText = props.noResultsText;
    var _a = useState(false), hasFocus = _a[0], setHasFocus = _a[1];
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(''), searchText = _c[0], setSearchText = _c[1];
    var _d = useState(), focusedOption = _d[0], setFocusedOption = _d[1];
    var defaultOption = options ? options.find(function (option) { return option.label === value; }) : null;
    var _e = useState(defaultOption), selectedOption = _e[0], setSelectedOption = _e[1];
    var controlRef = createRef();
    var scrollContainerRef = createRef();
    var filteredOptions = filterable ? options ? options.filter(function (option) {
        if (searchText.length) {
            return option.label.toLowerCase().includes(searchText) || (typeof option.value === 'string' ? (option.value.toLowerCase().includes(searchText)) : false);
        }
        else
            return true;
    }) : [] : (options ? options : []);
    var optionRefs = filteredOptions.reduce(function (refs, option) {
        refs[option.label] = React.createRef();
        return refs;
    }, {});
    useEffect(function () {
        if (hasFocus) {
            window.addEventListener('keydown', handleUserKeyPress);
        }
        return function () {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [hasFocus, isOpen, focusedOption, filteredOptions]); // These are the required dependencies for the switch logic.
    var handleUserKeyPress = function (e) {
        var key = e.key;
        switch (key) {
            case 'ArrowUp':
                e.preventDefault();
                isOpen ? switchOptionFocus(-1) : setIsOpen(true);
                break;
            case 'ArrowDown':
                e.preventDefault();
                isOpen ? switchOptionFocus(1) : setIsOpen(true);
                break;
            case 'Enter':
                e.preventDefault();
                focusedOption ? selectOption(focusedOption) : null;
                break;
            case 'Escape': {
                e.preventDefault();
                setIsOpen(false);
                resetSearch();
            }
            default:
                break;
        }
    };
    var switchOptionFocus = function (direction) {
        var currentIndex = focusedOption ? filteredOptions.indexOf(focusedOption) : -1;
        var nextIndex = Math.max(0, Math.min(currentIndex + direction, filteredOptions.length - 1));
        var nextOption = filteredOptions[nextIndex];
        if (nextOption && optionRefs[nextOption.label] && optionRefs[nextOption.label].current) {
            optionRefs[nextOption.label].current.scrollIntoView({
                block: 'nearest'
            });
        }
        setFocusedOption(nextOption);
    };
    var handleControlClick = function (e) {
        if (hasFocus && !isOpen) {
            setIsOpen(true);
        }
        else if (hasFocus && isOpen && !searchable) {
            setIsOpen(false);
        }
    };
    var handleControlFocus = function (e) {
        setHasFocus(true);
        //setIsOpen(true); // click will handle open/close
    };
    var handleControlBlur = function (e) {
        setIsOpen(false);
        setHasFocus(false);
        resetSearch();
    };
    var handleControlChange = function (e) {
        setSearchText(e.target.value);
        if (e.target.value.length) {
            setIsOpen(true);
        }
        onInputChange ? onInputChange(e) : null;
    };
    var selectOption = function (option) {
        setSelectedOption(option);
        setFocusedOption(option);
        setIsOpen(false);
        resetSearch();
        if (onChange) {
            onChange(option);
        }
    };
    var resetSearch = function () {
        setSearchText('');
    };
    var blur = function () {
        controlRef.current ? controlRef.current.blur() : null;
    };
    var focus = function () {
        controlRef.current ? controlRef.current.focus() : null;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: [
                styles.dropdown,
                (isOpen ? styles.dropdownIsOpen : ''),
                (filteredOptions.length === 0 ? styles.dropdownNoResults : ''),
                (fullWidth ? styles.dropdownFullWidth : '')
            ].join(' ') },
            React.createElement("div", { className: styles.dropdownInput },
                React.createElement(Field, { innerRef: controlRef, onChange: handleControlChange, onFocus: handleControlFocus, onBlur: handleControlBlur, onClick: handleControlClick, locked: !searchable, fullWidth: fullWidth, value: searchText.length ? searchText : '' }),
                React.createElement("div", { className: styles.dropdownValueContainer }, searchText.length === 0 &&
                    selectedOption ? selectedOption.label : ''),
                React.createElement("div", { className: styles.dropdownIcon }, isOpen ?
                    closeIcon ? React.cloneElement(closeIcon) : null
                    :
                        openIcon ? React.cloneElement(openIcon) : null)),
            React.createElement("div", { className: styles.dropdownList },
                React.createElement("div", { ref: scrollContainerRef, className: styles.dropdownMenu },
                    filteredOptions.map(function (option, index) {
                        return (React.createElement("div", { key: index, ref: optionRefs[option.label], className: [
                                styles.dropdownMenuItem,
                                (selectedOption === option ? styles.dropdownMenuItemSelected : ''),
                                (focusedOption === option ? styles.dropdownMenuItemFocus : '')
                            ].join(' '), onClick: function (e) { return selectOption(option); }, onMouseDown: function (e) {
                                e.preventDefault();
                            }, onMouseMove: function () { return setFocusedOption(option); } }, option.label));
                    }),
                    filteredOptions.length === 0 && searchText.length > 0 &&
                        React.createElement("div", { className: styles.dropdownMenuItem }, noResultsText))))));
};
Dropdown.defaultProps = {
    searchable: false,
    filterable: true,
    openIcon: React.createElement("span", null, "\u2193"),
    closeIcon: React.createElement("span", null, "\u2191"),
    fullWidth: false,
    noResultsText: 'No results'
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map