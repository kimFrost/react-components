import e,{useRef as n,useEffect as o}from"react";function t(e,n){void 0===n&&(n={});var o=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var r={testComponent:"TestComponent-module_testComponent__1fa5h",body:"TestComponent-module_body__pfXpT",testComponent__body:"TestComponent-module_testComponent__body__2RzlS","testComponent--hot":"TestComponent-module_testComponent--hot__XoBCi",a:"TestComponent-module_a__1zSaT",testComponentBody:"TestComponent-module_testComponent__body__2RzlS",testComponentHot:"TestComponent-module_testComponent--hot__XoBCi"};t(".TestComponent-module_testComponent__1fa5h {\n  color: red; }\n\n.TestComponent-module_body__pfXpT {\n  color: ghostwhite; }\n\n.TestComponent-module_testComponent__body__2RzlS {\n  color: honeydew; }\n\n.TestComponent-module_testComponent--hot__XoBCi {\n  color: aquamarine; }\n  .TestComponent-module_testComponent--hot__XoBCi .TestComponent-module_body__pfXpT {\n    color: hotpink; }\n\nheader {\n  color: blueviolet; }\n\np {\n  color: hotpink; }\n\n.TestComponent-module_a__1zSaT {\n  color: navajowhite; }\n");var i=function(){return console.log("styles",r),e.createElement("div",{className:"testComponent "+r["testComponent--hot"]},e.createElement("div",{className:r.testComponentHot},"Test component from new react component library"))};i.defaultProps={};var l="Button_btn__36cCc",d="Button_btn--outline__17CIM";t(".Button_btn__36cCc {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  min-width: 4em;\n  height: 31px;\n  padding: 0 2.5em;\n  border-radius: 2em;\n  color: white;\n  background: green;\n  font-family: sans-serif;\n  font-weight: 400;\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent; }\n  .Button_btn__36cCc:focus {\n    outline: none !important; }\n  .Button_btn__36cCc a {\n    text-decoration: none;\n    color: inherit; }\n\n.Button_btn__36cCc:hover {\n  background: #005a00; }\n\n.Button_btn__36cCc:active {\n  background: #007300; }\n\n.Button_btn__36cCc:disabled {\n  background: #80c080;\n  cursor: auto; }\n\n.Button_btn--outline__17CIM {\n  background-color: white;\n  border: 1px solid green;\n  color: green; }\n  .Button_btn--outline__17CIM:hover {\n    background: transparent;\n    border-color: #005a00;\n    color: #005a00; }\n  .Button_btn--outline__17CIM:active {\n    background: transparent;\n    border-color: #007300;\n    color: #007300; }\n  .Button_btn--outline__17CIM:disabled {\n    background-color: transparent;\n    color: #80c080;\n    border-color: #80c080; }\n");var a=function(n){var o=n.onClick,t=n.children,r=n.disabled,i=n.outline;return(e.createElement("button",{className:l+(i?" "+d:""),onClick:o,disabled:r},t))};a.defaultProps={onClick:function(){},disabled:!1,outline:!1};
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
var c=function(){return(c=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},_={field:"Field_field__2rFOc","field--focus":"Field_field--focus__1PxDA",field__error:"Field_field__error__1LMdQ","field--invalid":"Field_field--invalid__1gaMt",fieldFocus:"Field_field--focus__1PxDA",fieldError:"Field_field__error__1LMdQ",fieldInvalid:"Field_field--invalid__1gaMt"};t(".Field_field__2rFOc {\n  box-sizing: border-box;\n  background: white;\n  border-radius: 1em;\n  min-width: 300px;\n  height: 31px;\n  border-radius: 15.5px;\n  outline: none;\n  margin: 0;\n  padding: 0.5em 1em;\n  border: 1px solid grey;\n  color: black;\n  font-size: 1em;\n  font-weight: 400;\n  font-family: sans-serif; }\n\n.Field_field__2rFOc:focus,\n.Field_field--focus__1PxDA {\n  border-color: green; }\n\n.Field_field__2rFOc:disabled {\n  background-color: lightgrey;\n  border-color: lightgrey; }\n\n.Field_field__error__1LMdQ {\n  display: none;\n  margin-top: 0.5em;\n  font-size: 0.95em;\n  font-family: sans-serif;\n  color: red; }\n\n.Field_field--invalid__1gaMt {\n  color: red;\n  border-color: red;\n  background-color: #ffe6e6; }\n  .Field_field--invalid__1gaMt + .Field_field__error__1LMdQ {\n    display: block; }\n");t('.Checkbox_checkbox__3a6If {\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.Checkbox_checkbox__ui-container__1DwX9 {\n  display: block;\n  position: relative;\n  box-sizing: content-box;\n  height: 20px;\n  width: 20px;\n  margin: 5px; }\n\n.Checkbox_checkbox__input__2j1dP {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  opacity: 0;\n  cursor: pointer; }\n  .Checkbox_checkbox__input__2j1dP:disabled ~ .Checkbox_checkbox__ui__1D-1J {\n    background: lightgrey; }\n  .Checkbox_checkbox__input__2j1dP:checked ~ .Checkbox_checkbox__ui__1D-1J::before {\n    display: flex;\n    content: "\\2713";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center; }\n  .Checkbox_checkbox__input__2j1dP:invalid ~ .Checkbox_checkbox__ui__1D-1J {\n    border-color: red; }\n\n.Checkbox_checkbox__ui__1D-1J {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  border-radius: 2px;\n  border: 1px solid grey; }\n\n.Checkbox_checkbox__error-text__1vPzS {\n  position: absolute; }\n');var s=function(t){var r=t.disabled,i=t.checked,l=t.invalid,d=t.invalidText,a=n(null);return o((function(){a.current&&(l?a.current.setCustomValidity("Invalid"):a.current.setCustomValidity(""))}),[l]),e.createElement("div",{className:"checkbox"},e.createElement("div",{className:"checkbox__ui-container"},e.createElement("input",{type:"checkbox",ref:a,className:"checkbox__input",disabled:r,checked:i}),e.createElement("div",{className:"checkbox__ui"})),l&&d&&e.createElement("span",null,d))};s.defaultProps={};var p=function(n){var o=n.value,t=n.type,r=n.id,i=n.placeholder,l=n.disabled,d=n.focus,a=n.invalid,p=n.errorText;n.onChange;return"checkbox"==t?e.createElement(s,c({},n)):e.createElement(e.Fragment,null,e.createElement("input",{className:[_.field,d?_.fieldFocus:"",a?_.fieldInvalid:""].join(" "),id:r,type:t,value:o,placeholder:i,disabled:l}),a&&p&&e.createElement("span",{className:"field__error"},p))};p.defaultProps={type:"text",onChange:function(e){}};var u;t(".FieldWrapper_field-wrapper__2Cltu {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.FieldWrapper_field-wrapper--label-left__N67NS {\n  flex-direction: row;\n  align-items: center; }\n\n.FieldWrapper_field-wrapper--label-top__3OIbf {\n  flex-direction: column; }\n"),function(e){e.TOP="top",e.LEFT="left"}(u||(u={}));var b=function(n){var o=n.id,t=n.label,r=n.labelPos;return e.createElement("div",{className:"field-wrapper field-wrapper--label-"+r},t&&e.createElement("label",{className:"field-wrapper__label",htmlFor:o},t),e.createElement(p,c({},n)))};b.defaultProps={labelPos:u.TOP};var m=function(e){return"Hello "+e};export{a as Button,s as Checkbox,p as Field,b as FieldWrapper,m as Greeter,i as TestComponent};
