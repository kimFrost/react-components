import React from 'react';
import { ThemeProvider as ThemeProviderComp } from 'styled-components';

interface IProps {
    theme: any
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
    return (
        <ThemeProviderComp theme={theme}>
            {children}
        </ThemeProviderComp>
    )
}

export default ThemeProvider;
