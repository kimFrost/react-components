import React from 'react';
declare enum ESizes {
    sm = 0,
    s = 1,
    m = 2,
    l = 3,
    xl = 4
}
interface IProps {
    padding?: ESizes;
}
declare const Box: React.FC<IProps>;
export default Box;
