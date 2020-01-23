
import React from 'react';
import styles from './Box.scss'
import styled from 'styled-components';

enum ESizes {
    SM,
    S,
    M,
    L,
    XL
}

enum EColor {
    NONE = "",
    LIGHT = 'light'
}

interface IProps {
    padding?: ESizes
    color?: EColor | string
}

const getColorClass = (color: EColor): string => {
    switch (color) {
        case EColor.LIGHT:
            return styles.boxLight
        default:
            return ''
    }
}

const Box: React.FC<IProps> = ({ children, color }) => {
    return (
        <div className={[
            styles.box,
            getColorClass(color as EColor)
        ].join(' ')}>
            {children}
        </div>
    )
}

Box.defaultProps = {
    color: EColor.NONE
}

// const StyledBox = styled(Box)`
//     background-color: ${props => props.theme.primaryColor};
//     color: ${props => props.theme.secondaryColor};
// `

export default Box