import React from 'react';
import styles from './RadioGroup.scss'
import RadioGroupContext from './RadioGroupContext';

interface IProps {
    name: string
    value?: any
}

const RadioGroup: React.FC<IProps> = ({ children, name, value }) => {

    return (
        <RadioGroupContext.Provider value={{ name, value }}>
            <div className={styles.radioGroup}>
                {children}
            </div>
        </RadioGroupContext.Provider>
    )
}

RadioGroup.defaultProps = {

}

export default RadioGroup