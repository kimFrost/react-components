var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { mix } from 'polished';
var btnHeight = 51;
var btnFontFamily = "sans-serif";
var btnFontWeight = 400;
var btnTextColor = "white";
var btnBackgroundColor = "green";
var ButtonOutline = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: $btn-text-color;\n    border: 1px solid $btn-background-color;\n    color: $btn-background-color;   \n    &:hover {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 30%);\n        color: mix(black, $btn-background-color, 30%);\n    }\n    &:active {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 10%);\n        color: mix(black, $btn-background-color, 10%);\n    }\n    &:disabled {\n        background-color: transparent;\n        color: mix(white, $btn-background-color, 50%);\n        border-color: mix(white, $btn-background-color, 50%);\n    } \n"], ["\n    background-color: $btn-text-color;\n    border: 1px solid $btn-background-color;\n    color: $btn-background-color;   \n    &:hover {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 30%);\n        color: mix(black, $btn-background-color, 30%);\n    }\n    &:active {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 10%);\n        color: mix(black, $btn-background-color, 10%);\n    }\n    &:disabled {\n        background-color: transparent;\n        color: mix(white, $btn-background-color, 50%);\n        border-color: mix(white, $btn-background-color, 50%);\n    } \n"])));
var Button = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    position: relative; \n    overflow: hidden;\n    min-width: 4em;\n    height: ", "px;\n    padding: 0 2.5em;\n    border-radius: 2em;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    text-decoration: none;\n    text-transform: uppercase;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n\n    &:focus {\n        outline: none !important;  \n    }\n    &:hover {\n        background: ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n    &:disabled {\n        background: ", ";\n        cursor: auto;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    ", "\n"], ["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    position: relative; \n    overflow: hidden;\n    min-width: 4em;\n    height: ", "px;\n    padding: 0 2.5em;\n    border-radius: 2em;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    text-decoration: none;\n    text-transform: uppercase;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n\n    &:focus {\n        outline: none !important;  \n    }\n    &:hover {\n        background: ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n    &:disabled {\n        background: ", ";\n        cursor: auto;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    ",
    "\n"])), btnHeight, btnTextColor, btnBackgroundColor, btnFontFamily, btnFontWeight, mix(0.3, 'black', btnBackgroundColor), mix(0.1, 'black', btnBackgroundColor), mix(0.5, 'white', btnBackgroundColor), function (props) { return props.outline && "\n        \n       \n    "; });
export { Button, ButtonOutline };
var templateObject_1, templateObject_2;
//# sourceMappingURL=Button.styles.js.map