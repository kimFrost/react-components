import React, { useState } from 'react';
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
        <div className={styles.dropdownMenuItem}></div>
    )
}

const Dropdown: React.FC<IProps> = ({ onChange, children, options }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [hightlightedItem, setHighlightedItem] = useState(null)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsOpen(true);
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <React.Fragment>
            <div className={[
                styles.dropdown,
                (isOpen ? styles.dropdownIsOpen : '')
            ].join(' ')}>
                <div className={styles.dropdownInput}>
                    <Field onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div className={styles.dropdownList}>
                    <div className={styles.dropdownMenu}>
                        {options && options.map((option) => {
                            return (
                                <div className={styles.dropdownMenuItem}>{option.label}</div>
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
