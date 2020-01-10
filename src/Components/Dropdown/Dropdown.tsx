import React, { useState, useEffect, useCallback } from 'react';
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

    const [isOpen, setIsOpen] = useState(false)
    const [focusedOption, setFocusedOption] = useState<IOption>()
    const [selectedOption, setSelectedOption] = useState<IOption>()

    useEffect(() => {
        {
            isOpen &&
            window.addEventListener('keydown', handleUserKeyPress);
        }
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
        }
    }, [isOpen])

    useEffect(() => {
        /*
        {onChange &&
            onChange(selectedOption)
        }
        */
    }, [selectedOption])

    const handleUserKeyPress = useCallback((e: KeyboardEvent) => {
        const { key } = e;
        switch (key) {
            case 'ArrowUp':
                e.preventDefault()
                switchOptionFocus(-1)
                break;
            case 'ArrowDown':
                e.preventDefault()
                switchOptionFocus(1)
                break;
            default:
                break;
        }
    }, [])
    


    const switchOptionFocus = (direction: number) => {
        if (options) {
            const currentIndex = focusedOption ? options.indexOf(focusedOption) : -1;
            const nextIndex = Math.max(-1, Math.min(currentIndex + direction, options.length - 1));
            console.log('next option', options[nextIndex]);
            setFocusedOption(options[nextIndex]);
        }    
    }

    const handleControlFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsOpen(true);
    }

    const handleControlBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsOpen(false);
    }

    const handleControlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // filter list
    }

    const handleSelect = (option: IOption) => {
        setSelectedOption(option)
    }

    return (
        <React.Fragment>
            <div className={[
                styles.dropdown,
                (isOpen ? styles.dropdownIsOpen : '')
            ].join(' ')}>
                <div className={styles.dropdownInput}>
                    <Field onChange={handleControlChange} onFocus={handleControlFocus} onBlur={handleControlBlur} value={selectedOption?.label} />
                </div>
                <div className={styles.dropdownList}>
                    <div className={styles.dropdownMenu}>
                        {options && options.map((option) => {
                            return (
                                <div className={[
                                    styles.dropdownMenuItem,
                                    (selectedOption === option ? styles.dropdownMenuItemSelected : ''),
                                    (focusedOption === option ? styles.dropdownMenuItemFocus : '')
                                ].join(' ')} onClick={(e) => handleSelect(option)}>{option.label}</div>
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
