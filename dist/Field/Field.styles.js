var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "@emotion/styled";
var fieldHeight = 31;
var fieldTextColor = 'black';
var fieldBackgroundColor = 'white';
var fieldErrorColor = 'red';
var fieldFocusColor = 'green';
var Field = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;    \n    background-color: ", ";\n    color: ", ";\n    height: ", "px;\n    border-radius: ", "px;\n    min-width: 300px;\n    outline: none;\n    margin: 0;\n    padding: 0.5em 1em;\n    border: 1px solid grey;\n    &:focus {\n        border-color: ", ";\n    }\n    ", "\n    ", "\n"], ["\n    box-sizing: border-box;    \n    background-color: ", ";\n    color: ", ";\n    height: ", "px;\n    border-radius: ", "px;\n    min-width: 300px;\n    outline: none;\n    margin: 0;\n    padding: 0.5em 1em;\n    border: 1px solid grey;\n    &:focus {\n        border-color: ", ";\n    }\n    ",
    "\n    ",
    "\n"])), fieldBackgroundColor, fieldTextColor, fieldHeight, fieldHeight / 2, fieldFocusColor, function (props) { return props.focus && "\n        border-color: " + fieldFocusColor + ";\n    "; }, function (props) { return props.invalid && "\n        border-color: " + fieldErrorColor + ";\n        //background-color: " + fieldErrorColor + "\n    "; });
var FieldWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    ", " {\n        \n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    ", " {\n        \n    }\n"])), Field);
var Label = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-bottom: 10px;\n"], ["\n    margin-bottom: 10px;\n"
    /*
    const focusedStyles = (props:IFieldProps) => css`
        border-color: ${fieldFocusColor};
    `
    
    const FieldFocused = styled(Field)`
        border-color: ${fieldFocusColor};
    `
    */
])));
/*
const focusedStyles = (props:IFieldProps) => css`
    border-color: ${fieldFocusColor};
`

const FieldFocused = styled(Field)`
    border-color: ${fieldFocusColor};
`
*/
export { Label, Field, FieldWrapper };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Field.styles.js.map