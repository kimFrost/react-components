
import styled, { css } from 'styled-components'
import { mix } from 'polished'

const btnHeight = 31
const btnFontFamily = "sans-serif"
const btnFontWeight = 400
const btnTextColor = "white"
const btnBackgroundColor = "green"

interface IProps {
    outline?: boolean
}

const StyleButtonOutline = css`
    background-color: ${btnTextColor};
    border: 1px solid ${btnBackgroundColor};
    color: ${btnBackgroundColor};   
    &:hover {
        background: transparent;
        border-color: ${mix(0.3, 'black', btnBackgroundColor)};
        color: ${mix(0.3, 'black', btnBackgroundColor)};
    }
    &:active {
        background: transparent;
        border-color: ${mix(0.1, 'black', btnBackgroundColor)};
        color: ${mix(0.1, 'black', btnBackgroundColor)};
    }
    &:disabled {
        background-color: transparent;
        color: ${mix(0.5, 'white', btnBackgroundColor)};
        border-color: ${mix(0.5, 'white', btnBackgroundColor)};
    } 
`


const Button = styled.button<IProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative; 
    overflow: hidden;
    min-width: 4em;
    height: ${btnHeight}px;
    padding: 0 2.5em;
    border-radius: 2em;
    color: ${btnTextColor};
    background: ${btnBackgroundColor};
    font-family: ${btnFontFamily};
    font-weight: ${btnFontWeight};
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    outline: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:focus {
        outline: none !important; 
    }
    &:hover {
        background: ${mix(0.3, 'black', btnBackgroundColor)};
    }
    &:active {
        background: ${mix(0.1, 'black', btnBackgroundColor)};
    }
    &:disabled {
        background: ${mix(0.5, 'white', btnBackgroundColor)};
        cursor: auto;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    ${props => props.outline && css`
        ${StyleButtonOutline}
    `}
`

const ButtonOutline = styled.button<IProps>`
    ${StyleButtonOutline}
`




export {
    Button,
    ButtonOutline
}