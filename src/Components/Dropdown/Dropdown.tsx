import React, { useState, useEffect, useCallback, useRef, createRef } from 'react';
import styles from './Dropdown.scss'
import Field from '../Field';


export interface IOption {
    value: string
    label: string
}

export interface IProps {
    id?: string
    value?: any
    openIcon?: JSX.Element
    closeIcon?: JSX.Element
    options?: Array<IOption>
    searchable?: boolean
    filterable?: boolean
    fullWidth?: boolean
    noResultsText?: string
    onChange?: (value: any) => void
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/*
TODO: Keys to bind
- PageUp
- PageDown
- Home
- End
*/

const Dropdown: React.FC<IProps> = (props) => {
    const {
        onChange,
        onInputChange,
        options,
        openIcon,
        closeIcon,
        searchable,
        filterable,
        fullWidth,
        noResultsText
    } = props;

    const [hasFocus, setHasFocus] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [focusedOption, setFocusedOption] = useState<IOption>()
    const [selectedOption, setSelectedOption] = useState<IOption>()
    const controlRef = createRef<HTMLInputElement>()

    const filteredOptions = filterable ? options ? options.filter(option => {
        if (searchText.length) {
            return option.label.toLowerCase().includes(searchText) || (typeof option.value === 'string' ? (option.value.toLowerCase().includes(searchText)) : false)
        }
        else return true
    }) : [] : (options ? options : [])

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
        setFocusedOption(() => {
            return filteredOptions[nextIndex]
        });
    }

    const handleControlClick = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log('handleControlClick', hasFocus, isOpen)
        if (hasFocus && !isOpen) {
            setIsOpen(true)
        }
        else if (hasFocus && isOpen && !searchable) {
            //setIsOpen(false)
        }
    }

    const handleControlFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('handleControlFocus')
        setHasFocus(true);
        setIsOpen(true);
    }

    const handleControlBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('handleControlBlur')
        setIsOpen(false);
        setHasFocus(false);
        resetSearch()
    }

    const handleControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        if (e.target.value.length) {
            setIsOpen(true)
        }
        onInputChange ? onInputChange(e) : null
    }

    const selectOption = (option: IOption) => {
        setSelectedOption(option)
        setFocusedOption(option)
        setIsOpen(false)
        resetSearch()
        {
            onChange &&
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
                        innerRef={controlRef}
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
                    <div className={styles.dropdownIcon}>
                        {isOpen ?
                            closeIcon ? React.cloneElement(closeIcon) : null
                            :
                            openIcon ? React.cloneElement(openIcon) : null
                        }
                    </div>
                </div>
                <div className={styles.dropdownList}>
                    <div className={styles.dropdownMenu}>
                        {filteredOptions.map((option, index) => {
                            return (
                                <div
                                    key={index}
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
    noResultsText: 'No results'
};



export default Dropdown;
