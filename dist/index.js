"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React);function styleInject(e,o){void 0===o&&(o={});var t=o.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var css=".TestComponent-module_testComponent__1fa5h {\n  color: red; }\n\n.TestComponent-module_body__pfXpT {\n  color: ghostwhite; }\n\n.TestComponent-module_testComponent__body__2RzlS {\n  color: honeydew; }\n\n.TestComponent-module_testComponent--hot__XoBCi {\n  color: aquamarine; }\n  .TestComponent-module_testComponent--hot__XoBCi .TestComponent-module_body__pfXpT {\n    color: hotpink; }\n\nheader {\n  color: blueviolet; }\n\np {\n  color: hotpink; }\n\n.TestComponent-module_a__1zSaT {\n  color: navajowhite; }\n",styles={testComponent:"TestComponent-module_testComponent__1fa5h",body:"TestComponent-module_body__pfXpT",testComponent__body:"TestComponent-module_testComponent__body__2RzlS","testComponent--hot":"TestComponent-module_testComponent--hot__XoBCi",a:"TestComponent-module_a__1zSaT",testComponentBody:"TestComponent-module_testComponent__body__2RzlS",testComponentHot:"TestComponent-module_testComponent--hot__XoBCi"};styleInject(css);var TestComponent=function(){return console.log("styles",styles),React__default.createElement("div",{className:"testComponent "+styles["testComponent--hot"]},React__default.createElement("div",{className:styles.testComponentHot},"Test component from new react component library"))};TestComponent.defaultProps={};var css$1=".Button_btn__36cCc {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  min-width: 4em;\n  height: var(--btn-height, 31px);\n  padding: 0 2.5em;\n  border-radius: 2em;\n  color: var(--btn-text-color, white);\n  background: var(--btn-background-color, green);\n  font-family: var(--btn-font-family, sans-serif);\n  font-weight: var(--btn-font-weight, 400);\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent; }\n  .Button_btn__36cCc:focus {\n    outline: none !important; }\n  .Button_btn__36cCc a {\n    text-decoration: none;\n    color: inherit; }\n\n.Button_btn__36cCc:hover {\n  background: var(--btn-background-color-hover, #005a00); }\n\n.Button_btn__36cCc:active {\n  background: var(--btn-background-color-active, #007300); }\n\n.Button_btn__36cCc:disabled {\n  background: var(--btn-background-color-disabled, #80c080);\n  cursor: auto; }\n\n.Button_btn--outline__17CIM {\n  background-color: var(--btn-text-color, white);\n  border: 1px solid var(--btn-background-color, green);\n  color: var(--btn-background-color, green); }\n  .Button_btn--outline__17CIM:hover {\n    background: transparent;\n    border-color: var(--btn-background-color-hover, #005a00);\n    color: var(--btn-background-color-hover, #005a00); }\n  .Button_btn--outline__17CIM:active {\n    background: transparent;\n    border-color: var(--btn-background-color-active, #007300);\n    color: var(--btn-background-color-active, #007300); }\n  .Button_btn--outline__17CIM:disabled {\n    background-color: transparent;\n    color: var(--btn-background-color-disabled, #80c080);\n    border-color: var(--btn-background-color-disabled, #80c080); }\n",styles$1={btn:"Button_btn__36cCc","btn--outline":"Button_btn--outline__17CIM",btnOutline:"Button_btn--outline__17CIM"};styleInject(css$1);var Button=function(e){var o=e.onClick,t=e.children,n=e.disabled,r=e.outline;return(React__default.createElement("button",{className:styles$1.btn+(r?" "+styles$1.btnOutline:""),onClick:o,disabled:n},t))};Button.defaultProps={onClick:function(){},disabled:!1,outline:!1};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign=function(){return(__assign=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e}).apply(this,arguments)},css$2=".Field_field__2rFOc {\n  box-sizing: border-box;\n  background: var(--field-background-color, white);\n  border-radius: 1em;\n  min-width: 300px;\n  height: var(--field-height, 31px);\n  border-radius: calc(var(--field-height, 31px) / 2);\n  outline: none;\n  margin: 0;\n  padding: 0.5em 1em;\n  border: 1px solid grey;\n  color: var(--field-text-color, black);\n  font-size: 1em;\n  font-weight: var(--field-font-weight, 400);\n  font-family: var(--field-font-family, sans-serif); }\n\n.Field_field__2rFOc:focus,\n.Field_field--focus__1PxDA {\n  border-color: var(--field-focus-color, green); }\n\n.Field_field__2rFOc:disabled {\n  background-color: lightgrey;\n  border-color: lightgrey; }\n\n.Field_field__error__1LMdQ {\n  display: none;\n  margin-top: 0.5em;\n  font-size: 0.95em;\n  font-family: var(--field-font-family, sans-serif);\n  color: var(--field-error-color, red); }\n\n.Field_field--invalid__1gaMt {\n  color: var(--field-error-color, red);\n  border-color: var(--field-error-color, red);\n  background-color: var(--field-error-background-color, #ffe6e6); }\n  .Field_field--invalid__1gaMt + .Field_field__error__1LMdQ {\n    display: block; }\n",styles$2={field:"Field_field__2rFOc","field--focus":"Field_field--focus__1PxDA",field__error:"Field_field__error__1LMdQ","field--invalid":"Field_field--invalid__1gaMt",fieldFocus:"Field_field--focus__1PxDA",fieldError:"Field_field__error__1LMdQ",fieldInvalid:"Field_field--invalid__1gaMt"};styleInject(css$2);var css$3=".Checkbox_checkbox__3a6If {\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.Checkbox_checkbox__ui-container__1DwX9 {\n  display: block;\n  position: relative;\n  box-sizing: content-box;\n  height: 20px;\n  width: 20px;\n  margin: 5px; }\n\n.Checkbox_checkbox__input__2j1dP {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  opacity: 0;\n  cursor: pointer; }\n  .Checkbox_checkbox__input__2j1dP:disabled ~ .Checkbox_checkbox__ui__1D-1J {\n    background: lightgrey; }\n  .Checkbox_checkbox__input__2j1dP:checked ~ .Checkbox_checkbox__ui__1D-1J > * {\n    opacity: 1; }\n  .Checkbox_checkbox__input__2j1dP:invalid ~ .Checkbox_checkbox__ui__1D-1J {\n    background-color: var(--checkbox-error-background-color, #ffe6e6);\n    border-color: var(--checkbox-error-border-color, red); }\n\n.Checkbox_checkbox__ui__1D-1J {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  border-radius: 2px;\n  border: 1px solid grey; }\n  .Checkbox_checkbox__ui__1D-1J > * {\n    opacity: 0; }\n\n.Checkbox_checkbox__error-text__1vPzS {\n  color: var(--checkbox-error-text-color, red); }\n",styles$3={checkbox:"Checkbox_checkbox__3a6If","checkbox__ui-container":"Checkbox_checkbox__ui-container__1DwX9",checkbox__input:"Checkbox_checkbox__input__2j1dP",checkbox__ui:"Checkbox_checkbox__ui__1D-1J","checkbox__error-text":"Checkbox_checkbox__error-text__1vPzS",checkboxUiContainer:"Checkbox_checkbox__ui-container__1DwX9",checkboxInput:"Checkbox_checkbox__input__2j1dP",checkboxUi:"Checkbox_checkbox__ui__1D-1J",checkboxErrorText:"Checkbox_checkbox__error-text__1vPzS"};styleInject(css$3);var Checkbox=function(e){var o=e.disabled,t=e.checked,n=e.invalid,r=e.invalidText,i=e.icon,l=e.checkedIcon,a=React.useRef(null);return React.useEffect((function(){a.current&&(n?a.current.setCustomValidity("Invalid"):a.current.setCustomValidity(""))}),[n]),React__default.createElement("div",{className:styles$3.checkbox},React__default.createElement("div",{className:styles$3.checkboxUiContainer},React__default.createElement("input",{type:"checkbox",ref:a,className:styles$3.checkboxInput,disabled:o,checked:t}),React__default.createElement("div",{className:styles$3.checkboxUi},l?React__default.cloneElement(l):i&&React__default.cloneElement(i))),n&&r&&React__default.createElement("span",null,r))};Checkbox.defaultProps={checkedIcon:React__default.createElement("span",null,"✓")};var Field=function(e){var o=e.value,t=e.type,n=e.id,r=e.placeholder,i=e.disabled,l=e.focus,a=e.invalid,_=e.errorText;e.onChange;return"checkbox"==t?React__default.createElement(Checkbox,__assign({},e)):React__default.createElement(React__default.Fragment,null,React__default.createElement("input",{className:[styles$2.field,l?styles$2.fieldFocus:"",a?styles$2.fieldInvalid:""].join(" "),id:n,type:t,value:o,placeholder:r,disabled:i}),a&&_&&React__default.createElement("span",{className:styles$2.fieldError},_))};Field.defaultProps={type:"text",onChange:function(e){}};var ELabelPosition,css$4=".FieldWrapper_field-wrapper__2Cltu {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.FieldWrapper_field-wrapper--label-left__N67NS {\n  flex-direction: row;\n  align-items: center; }\n\n.FieldWrapper_field-wrapper--label-top__3OIbf {\n  flex-direction: column; }\n";styleInject(css$4),function(e){e.TOP="top",e.LEFT="left"}(ELabelPosition||(ELabelPosition={}));var FieldWrapper=function(e){var o=e.id,t=e.label,n=e.labelPos;return React__default.createElement("div",{className:"field-wrapper field-wrapper--label-"+n},t&&React__default.createElement("label",{className:"field-wrapper__label",htmlFor:o},t),React__default.createElement(Field,__assign({},e)))};FieldWrapper.defaultProps={labelPos:ELabelPosition.TOP};var css$5='.Radio_radio__x25Ie {\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.Radio_radio__ui-container__FEFgs {\n  display: block;\n  position: relative;\n  box-sizing: content-box;\n  height: 20px;\n  width: 20px;\n  margin: 5px; }\n\n.Radio_radio__input__25Ci1 {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  opacity: 0;\n  cursor: pointer; }\n  .Radio_radio__input__25Ci1:disabled ~ .Radio_radio__ui__ge7Kh {\n    background: lightgrey;\n    border: none; }\n  .Radio_radio__input__25Ci1:checked ~ .Radio_radio__ui__ge7Kh::before {\n    display: flex;\n    content: "";\n    position: absolute;\n    border-radius: 50%;\n    background: grey;\n    padding: 5px;\n    align-items: center;\n    justify-content: center; }\n  .Radio_radio__input__25Ci1:invalid ~ .Radio_radio__ui__ge7Kh {\n    border-color: red; }\n\n.Radio_radio__ui__ge7Kh {\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  border-radius: 10px;\n  border: 1px solid grey; }\n\n.Radio_radio__error-text__1Fe5f {\n  position: absolute; }\n',styles$4={radio:"Radio_radio__x25Ie","radio__ui-container":"Radio_radio__ui-container__FEFgs",radio__input:"Radio_radio__input__25Ci1",radio__ui:"Radio_radio__ui__ge7Kh","radio__error-text":"Radio_radio__error-text__1Fe5f",radioUiContainer:"Radio_radio__ui-container__FEFgs",radioInput:"Radio_radio__input__25Ci1",radioUi:"Radio_radio__ui__ge7Kh",radioErrorText:"Radio_radio__error-text__1Fe5f"};styleInject(css$5);var Radio=function(e){var o=e.disabled,t=e.checked,n=e.invalid,r=e.invalidText,i=React.useRef(null);return React.useEffect((function(){i.current&&(n?i.current.setCustomValidity("Invalid"):i.current.setCustomValidity(""))}),[n]),React__default.createElement("div",{className:styles$4.radio},React__default.createElement("div",{className:styles$4.radioUiContainer},React__default.createElement("input",{type:"radio",ref:i,className:styles$4.radioInput,disabled:o,checked:t}),React__default.createElement("div",{className:styles$4.radioUi})),n&&r&&React__default.createElement("span",null,r))};Radio.defaultProps={};var css$6='.Tooltip_tooltip__jLmh8 {\n  display: block;\n  position: relative;\n  width: 12em;\n  padding: 1em 1.5em;\n  border: 1px solid var(--tooltip-border-color, green);\n  background: white;\n  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.3);\n  color: var(--tooltip-text-color, inherit);\n  font-size: var(--tooltip-font-size, inherit); }\n  .Tooltip_tooltip__jLmh8::before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: -1px;\n    top: 1em;\n    height: 1.8em;\n    width: 1.8em;\n    transform-origin: 0 0;\n    transform: rotate(45deg);\n    border: inherit;\n    border-top: none;\n    border-right: none;\n    background: inherit; }\n\n.Tooltip_tooltip--top__1j5yt::before {\n  border: inherit;\n  border-top: none;\n  border-left: none;\n  transform-origin: 0 100%;\n  top: auto;\n  right: auto;\n  bottom: -1px;\n  left: 1em; }\n\n.Tooltip_tooltip--right__1y8l8::before {\n  border: inherit;\n  border-top: none;\n  border-right: none;\n  transform-origin: 0 0;\n  top: 1em;\n  right: auto;\n  bottom: auto;\n  left: -1px; }\n\n.Tooltip_tooltip--bottom__3XmEn::before {\n  border: inherit;\n  border-bottom: none;\n  border-right: none;\n  transform-origin: 100% 0;\n  top: -1px;\n  right: 1em;\n  bottom: auto;\n  left: auto; }\n\n.Tooltip_tooltip--left__1PPoA::before {\n  border: inherit;\n  border-bottom: none;\n  border-left: none;\n  transform-origin: 100% 100%;\n  top: auto;\n  left: auto;\n  bottom: 1em;\n  right: -1px; }\n',styles$5={tooltip:"Tooltip_tooltip__jLmh8","tooltip--top":"Tooltip_tooltip--top__1j5yt","tooltip--right":"Tooltip_tooltip--right__1y8l8","tooltip--bottom":"Tooltip_tooltip--bottom__3XmEn","tooltip--left":"Tooltip_tooltip--left__1PPoA",tooltipTop:"Tooltip_tooltip--top__1j5yt",tooltipRight:"Tooltip_tooltip--right__1y8l8",tooltipBottom:"Tooltip_tooltip--bottom__3XmEn",tooltipLeft:"Tooltip_tooltip--left__1PPoA"};styleInject(css$6);var getModifierClassName=function(e){switch(void 0===e&&(e=""),e){case"top":return styles$5.tooltipTop;case"right":return styles$5.tooltipRight;case"bottom":return styles$5.tooltipBottom;case"left":return styles$5.tooltipLeft;default:return""}},Tooltip=function(e){var o=e.text,t=e.placement;return React__default.createElement("div",{className:styles$5.tooltip+" "+getModifierClassName(t)},o)};Tooltip.defaultProps={},exports.Button=Button,exports.Checkbox=Checkbox,exports.Field=Field,exports.FieldWrapper=FieldWrapper,exports.Radio=Radio,exports.TestComponent=TestComponent,exports.Tooltip=Tooltip;
