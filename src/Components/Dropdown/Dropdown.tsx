import React, { useState } from 'react';
import styles from './Dropdown.scss'

interface IProps {
    id?: string
    value?: any
    openIcon?: JSX.Element
    closeIcon?: JSX.Element
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const Dropdown: React.FC<IProps> = ({ onChange, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleList = () => {

    }

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {

    }

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {

    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    }

    return (
        <React.Fragment>
            {/* <div className={styles.dropdown}>
                <div>Fake input</div>
                <select className={styles.dropdownSelect} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
                    {children}
                </select>
            </div> */}
        </React.Fragment>
    )
}

Dropdown.defaultProps = {
    openIcon: <span>↓</span>,
    closeIcon: <span>↑</span>
};



export default Dropdown;
