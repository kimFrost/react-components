import React, { useState, useEffect, useCallback, useRef, createRef } from 'react';
import styles from './Dropdown.scss'
import Field from '../Field';


interface IOption {
    value: string
    label: string
}

interface IProps {
    id?: string
    value?: any
    openIcon?: JSX.Element
    closeIcon?: JSX.Element
    options?: Array<IOption>
    searchable?: boolean
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

/*
Keys to bind
- ArrowUp
- ArrowDown
- Enter
- Escape
- PageUp
- PageDown
- Home
- End
*/

/*
    Add icon support to FieldWrapper, Field or maybe own wrapper component
    Field as toggle input, both as search and button
*/

const Option: React.FC = () => {

    return (
        <div className={styles.dropdownMenuItem} onMouseMove={() => {

        }}></div>
    )
}

const Dropdown: React.FC<IProps> = ({ onChange, children, options }) => {

    const [hasFocus, setHasFocus] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [focusedOption, setFocusedOption] = useState<IOption>()
    const [selectedOption, setSelectedOption] = useState<IOption>()
    const controlRef = createRef<HTMLInputElement>()

    const filteredOptions = options ? options.filter(option => {
        if (searchText.length) {
            return (option.value.includes(searchText) || option.label.includes(searchText))
        }
        else return true
    }) : []

    useEffect(() => {
        if (hasFocus) {
            window.addEventListener('keydown', handleUserKeyPress);
        }
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        }
    }, [hasFocus, isOpen, focusedOption]) // These are the required dependencies for the switch logic.

    useEffect(() => {
        /*
        {onChange &&
            onChange(selectedOption)
        }
        */
    }, [selectedOption])


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
            default:
                break;
        }
    }

    const switchOptionFocus = (direction: number) => {
        if (options) {
            const currentIndex = focusedOption ? options.indexOf(focusedOption) : -1;
            const nextIndex = Math.max(0, Math.min(currentIndex + direction, options.length - 1));
            setFocusedOption(() => {
                return options[nextIndex]
            });
        }
    }

    const handleControlClick = (e: React.MouseEvent<HTMLInputElement>) => {
        if (hasFocus && !isOpen) {
            setIsOpen(true)
        }
    }

    const handleControlFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setHasFocus(true);
        setIsOpen(true);
    }

    const handleControlBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsOpen(false);
        setHasFocus(false);
        resetSearch()
    }

    const handleControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleControlChange', e.target.value)
        //const nextSearchString = selectedOption ? e.target.value.replace(selectedOption.label, '') : e.target.value
        //setSearchText(nextSearchString)
    }

    const selectOption = (option: IOption) => {
        setSelectedOption(option)
        setFocusedOption(option)
        setIsOpen(false)
        resetSearch()
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
                (isOpen ? styles.dropdownIsOpen : '')
            ].join(' ')}>
                <div className={styles.dropdownInput}>
                    <Field
                        innerRef={controlRef}
                        onChange={handleControlChange}
                        onFocus={handleControlFocus}
                        onBlur={handleControlBlur}
                        onClick={handleControlClick}
                        value={[searchText, selectedOption ? selectedOption.label : '']} />
                </div>
                <div className={styles.dropdownList}>
                    <div className={styles.dropdownMenu}>
                        {filteredOptions.map((option) => {
                            return (
                                <div
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

Dropdown.defaultProps = {
    searchable: false,
    openIcon: <span>↓</span>,
    closeIcon: <span>↑</span>
};



export default Dropdown;
