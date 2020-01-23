import React from 'react';
import { ThemeProvider as ThemeProviderComp } from 'styled-components';

interface IProps {
    theme: any
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
    return (
        <React.Fragment>
            {typeof theme === 'string' ?
                <div>{children}</div>
                :
                <ThemeProviderComp theme={theme}>
                    {children}
                </ThemeProviderComp>
            }
        </React.Fragment>
    )
}

export default ThemeProvider;
