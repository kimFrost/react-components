var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//import css from "@emotion/css";
import { styled } from '@emotion/styled';
var fieldHeight = 31;
var fieldTextColor = 'black';
var fieldBackgroundColor = 'white';
var fieldErrorColor = 'red';
var fieldFocusColor = 'green';
var Button = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;    \n    background-color: ", ";\n    color: ", ";\n    height: ", "px;\n    border-radius: ", "px;\n    min-width: 300px;\n    outline: none;\n    margin: 0;\n    padding: 0.5em 1em;\n    border: 1px solid grey;\n    &:focus {\n        border-color: ", ";\n    }\n    \n"], ["\n    box-sizing: border-box;    \n    background-color: ", ";\n    color: ", ";\n    height: ", "px;\n    border-radius: ", "px;\n    min-width: 300px;\n    outline: none;\n    margin: 0;\n    padding: 0.5em 1em;\n    border: 1px solid grey;\n    &:focus {\n        border-color: ", ";\n    }\n    \n"])), fieldBackgroundColor, fieldTextColor, fieldHeight, fieldHeight / 2, fieldFocusColor);
export { Button };
var templateObject_1;
//# sourceMappingURL=Button.styles.js.map