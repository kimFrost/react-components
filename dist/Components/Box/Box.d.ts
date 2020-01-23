import React from 'react';
declare enum ESizes {
    SM = 0,
    S = 1,
    M = 2,
    L = 3,
    XL = 4
}
declare enum EColor {
    NONE = "",
    LIGHT = "light"
}
interface IProps {
    padding?: ESizes;
    color?: EColor | string;
    className?: string;
}
declare const StyledBox: import("styled-components").StyledComponent<React.FC<IProps>, any, {}, never>;
export default StyledBox;
