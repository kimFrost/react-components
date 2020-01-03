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
}
declare const Box: React.FC<IProps>;
export default Box;
