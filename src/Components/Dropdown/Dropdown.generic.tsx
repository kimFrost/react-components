import React, { useState, useEffect, useCallback, useRef, createRef } from 'react';
import styles from './Dropdown.scss'
import Field from '../Field';


export interface IOption<T> {
    value: T
    label: string
}

export interface IProps<T = unknown> {
    id?: string
    value?: IOption<T>
    openIcon?: JSX.Element
    closeIcon?: JSX.Element
    options?: Array<IOption<T>>
    invalid?: boolean
    searchable?: boolean
    filterable?: boolean
    fullWidth?: boolean
    noResultsText?: string
    showIcons?: boolean
    onChange?: (value: IOption<T>) => void
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

/*
TODO: 
IProps extend Field props instead?
Keys to bind
- PageUp
- PageDown
- Home
- End
*/


//type DropDown<T = any> = React.FC<IProps<T>>
//const Dropdown: DropDown = (props) => {
function Dropdown<T>(props: IProps<T>) {
    const {
        value,
        onChange,
        onInputChange,
        onFocus,
        onBlur,
        options,
        openIcon,
        closeIcon,
        invalid,
        searchable,
        filterable,
        fullWidth,
        noResultsText,
        showIcons
    } = props;

    const controlRef = createRef<HTMLInputElement>()
    const scrollContainerRef = createRef<HTMLDivElement>()

    const [hasFocus, setHasFocus] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [focusedOption, setFocusedOption] = useState<IOption<T>>()

    const defaultOption = options ? options.find((option) => option.value === value?.value) : null;
    const [selectedOption, setSelectedOption] = useState<IOption<T> | null | undefined>(defaultOption)

    useEffect(() => {
        if (value) {
            if (selectedOption && selectedOption.value !== value.value) {
                console.log(1, selectedOption.value, value.value)
                selectOption(value)
            }
            else if (!selectedOption) {
                console.log(2)
                selectOption(value)
            }
        }
    }, [value, selectedOption])

    const filteredOptions = filterable ? options ? options.filter(option => {
        if (searchText.length) {
            const pattern = searchText.split("").map((x) => {
                return `(?=.*${x})`
            }).join("");
            var regex = new RegExp(`${pattern}`, "g")
            return option.label.toLowerCase().match(regex) || (typeof option.value === 'string' ? (option.value.toLowerCase().match(regex)) : false)
        }
        else return true
    }) : [] : (options ? options : [])

    const optionRefs = filteredOptions.reduce((refs, option) => {
        refs[option.label] = React.createRef()
        return refs
    }, {})

    useEffect(() => {
        if (hasFocus) {
            window.addEventListener('keydown', handleUserKeyPress);
        }
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        }
    }, [hasFocus, isOpen, focusedOption, filteredOptions]) // These are the required dependencies for the switch logic.

    const handleUserKeyPress = (e: KeyboardEvent) => {
        const { key } = e;
        switch (key) {
            case 'ArrowUp':
                e.preventDefault()
                isOpen ? switchOptionFocus(-1) : setIsOpen(true)
                break;
            case 'ArrowDown':
                e.preventDefault()
                isOpen ? switchOptionFocus(1) : setIsOpen(true)
                break;
            case 'Enter':
                e.preventDefault()
                focusedOption ? selectOption(focusedOption) : null
                break;
            case 'Escape': {
                e.preventDefault()
                setIsOpen(false)
                resetSearch()
            }
            default:
                break;
        }
    }

    const switchOptionFocus = (direction: number) => {
        const currentIndex = focusedOption ? filteredOptions.indexOf(focusedOption) : -1;
        const nextIndex = Math.max(0, Math.min(currentIndex + direction, filteredOptions.length - 1));
        const nextOption = filteredOptions[nextIndex];
        if (nextOption && optionRefs[nextOption.label] && optionRefs[nextOption.label].current) {
            optionRefs[nextOption.label].current.scrollIntoView({
                block: 'nearest'
            })
        }
        setFocusedOption(nextOption);
    }

    const handleControlClick = (e: React.MouseEvent<HTMLInputElement>) => {
        if (hasFocus && !isOpen) {
            setIsOpen(true)
        }
        else if (hasFocus && isOpen && !searchable) {
            setIsOpen(false)
        }
    }

    const handleControlFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setHasFocus(true);
        //setIsOpen(true); // click will handle open/close
        if (onFocus) {
            onFocus(e)
        }
    }

    const handleControlBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsOpen(false);
        setHasFocus(false);
        resetSearch()
        if (onBlur) {
            if (selectedOption) {
                e.target.value = selectedOption.label;
            }
            onBlur(e)
        }
    }

    const handleControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        if (e.target.value.length) {
            setIsOpen(true)
        }
        onInputChange ? onInputChange(e) : null
    }

    const selectOption = (option: IOption<T>) => {
        setSelectedOption(option)
        setFocusedOption(option)
        setIsOpen(false)
        resetSearch()
        if (onChange) {
            onChange(option)
        }
    }

    const resetSearch = () => {
        setSearchText('')
    }

    const blur = () => {
        controlRef.current ? controlRef.current.blur() : null
    }

    const focus = () => {
        controlRef.current ? controlRef.current.focus() : null
    }

    return (
        <React.Fragment>
            <div className={[
                styles.dropdown,
                (isOpen ? styles.dropdownIsOpen : ''),
                (filteredOptions.length === 0 ? styles.dropdownNoResults : ''),
                (fullWidth ? styles.dropdownFullWidth : '')
            ].join(' ')}>
                <div className={styles.dropdownInput}>
                    <Field
                        invalid={invalid}
                        ref={controlRef}
                        onChange={handleControlChange}
                        onFocus={handleControlFocus}
                        onBlur={handleControlBlur}
                        onClick={handleControlClick}
                        locked={!searchable}
                        fullWidth={fullWidth}
                        value={searchText.length ? searchText : ''} />
                    <div className={styles.dropdownValueContainer}>{searchText.length === 0 &&
                        selectedOption ? selectedOption.label : ''
                    }</div>
                    {showIcons &&
                        <div className={styles.dropdownIcon}>
                            {isOpen ?
                                closeIcon ? React.cloneElement(closeIcon) : null
                                :
                                openIcon ? React.cloneElement(openIcon) : null
                            }
                        </div>
                    }
                </div>
                <div className={styles.dropdownList}>
                    <div ref={scrollContainerRef} className={styles.dropdownMenu}>
                        {filteredOptions.map((option, index) => {
                            return (
                                <div
                                    key={index}
                                    ref={optionRefs[option.label]}
                                    className={[
                                        styles.dropdownMenuItem,
                                        (selectedOption === option ? styles.dropdownMenuItemSelected : ''),
                                        (focusedOption === option ? styles.dropdownMenuItemFocus : '')
                                    ].join(' ')}
                                    onClick={(e) => selectOption(option)}
                                    onMouseDown={(e) => {
                                        e.preventDefault()
                                    }}
                                    onMouseMove={() => setFocusedOption(option)}
                                >{option.label}</div>
                            )
                        })}
                        {filteredOptions.length === 0 && searchText.length > 0 &&
                            <div className={styles.dropdownMenuItem}>{noResultsText}</div>
                        }
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

Dropdown.defaultProps = {
    searchable: false,
    filterable: true,
    openIcon: <span>↓</span>,
    closeIcon: <span>↑</span>,
    fullWidth: false,
    noResultsText: 'No results',
    showIcons: true
};



export default Dropdown;
