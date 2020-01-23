
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
    color?: EColor | string,
    className?: string
}

const getColorClass = (color: EColor): string => {
    switch (color) {
        case EColor.LIGHT:
            return styles.boxLight
        default:
            return ''
    }
}

const Box: React.FC<IProps> = ({ children, color, className }) => {
    return (
        <div className={[
            styles.box,
            getColorClass(color as EColor),
            className
        ].join(' ')}>
            {children}
        </div>
    )
}

Box.defaultProps = {
    color: EColor.NONE
}

const StyledBox = styled(Box)`
    background-color: ${props => props.theme.primaryColor};
`

export default StyledBox