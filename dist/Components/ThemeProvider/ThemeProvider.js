import React from 'react';
import { ThemeProvider as ThemeProviderComp } from 'styled-components';
var ThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return (React.createElement(React.Fragment, null, typeof theme === 'string' ?
        React.createElement("div", null, children)
        :
            React.createElement(ThemeProviderComp, { theme: theme }, children)));
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map