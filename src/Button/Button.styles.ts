//import { css } from "@emotion/core"
//import css from "@emotion/css";
import styled from '@emotion/styled';

const fieldHeight = 31;
const fieldTextColor = 'black';
const fieldBackgroundColor = 'white';
const fieldErrorColor = 'red';
const fieldFocusColor = 'green';

interface IFieldProps {
    outline?: boolean
}

const Button = styled.input<IFieldProps>`
    box-sizing: border-box;    
    background-color: ${fieldBackgroundColor};
    color: ${fieldTextColor};
    height: ${fieldHeight}px;
    border-radius: ${fieldHeight / 2}px;
    min-width: 300px;
    outline: none;
    margin: 0;
    padding: 0.5em 1em;
    border: 1px solid grey;
    &:focus {
        border-color: ${fieldFocusColor};
    }
    ${props => props.focus && `
        border-color: ${fieldFocusColor};
    `}
`


export {
    Button
}