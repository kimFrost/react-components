import n from"react";import o,{css as e}from"styled-components";import{mix as t}from"polished";var r={testComponent:"TestComponent-module_testComponent__3dFd1",body:"TestComponent-module_body__xKHSp",testComponent__body:"TestComponent-module_testComponent__body__1Sr_9","testComponent--hot":"TestComponent-module_testComponent--hot__2qO2O",a:"TestComponent-module_a__256dz",testComponentBody:"TestComponent-module_testComponent__body__1Sr_9",testComponentHot:"TestComponent-module_testComponent--hot__2qO2O"};!function(n,o){void 0===o&&(o={});var e=o.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}(".TestComponent-module_testComponent__3dFd1 {\n  color: red; }\n\n.TestComponent-module_body__xKHSp {\n  color: ghostwhite; }\n\n.TestComponent-module_testComponent__body__1Sr_9 {\n  color: honeydew; }\n\n.TestComponent-module_testComponent--hot__2qO2O {\n  color: aquamarine; }\n  .TestComponent-module_testComponent--hot__2qO2O .TestComponent-module_body__xKHSp {\n    color: hotpink; }\n\nheader {\n  color: blueviolet; }\n\np {\n  color: hotpink; }\n\n.TestComponent-module_a__256dz {\n  color: navajowhite; }\n");var c=function(){return console.log("styles",r),n.createElement("div",{className:"testComponent "+r["testComponent--hot"]},n.createElement("div",{className:r.body},"Test component from new react component library"))};
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
function d(n,o){return Object.defineProperty?Object.defineProperty(n,"raw",{value:o}):n.raw=o,n}c.defaultProps={};e(l||(l=d(["\n    background-color: $btn-text-color;\n    border: 1px solid $btn-background-color;\n    color: $btn-background-color;   \n    &:hover {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 30%);\n        color: mix(black, $btn-background-color, 30%);\n    }\n    &:active {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 10%);\n        color: mix(black, $btn-background-color, 10%);\n    }\n    &:disabled {\n        background-color: transparent;\n        color: mix(white, $btn-background-color, 50%);\n        border-color: mix(white, $btn-background-color, 50%);\n    } \n"],["\n    background-color: $btn-text-color;\n    border: 1px solid $btn-background-color;\n    color: $btn-background-color;   \n    &:hover {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 30%);\n        color: mix(black, $btn-background-color, 30%);\n    }\n    &:active {\n        background: transparent;\n        border-color: mix(black, $btn-background-color, 10%);\n        color: mix(black, $btn-background-color, 10%);\n    }\n    &:disabled {\n        background-color: transparent;\n        color: mix(white, $btn-background-color, 50%);\n        border-color: mix(white, $btn-background-color, 50%);\n    } \n"])));var l,a,i=o.button(a||(a=d(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    position: relative; \n    overflow: hidden;\n    min-width: 4em;\n    height: ","px;\n    padding: 0 2.5em;\n    border-radius: 2em;\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-weight: ",";\n    text-decoration: none;\n    text-transform: uppercase;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n\n    &:focus {\n        outline: none !important;  \n    }\n    &:hover {\n        background: ",";\n    }\n    &:active {\n        background: ",";\n    }\n    &:disabled {\n        background: ",";\n        cursor: auto;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    ","\n"],["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    position: relative; \n    overflow: hidden;\n    min-width: 4em;\n    height: ","px;\n    padding: 0 2.5em;\n    border-radius: 2em;\n    color: ",";\n    background: ",";\n    font-family: ",";\n    font-weight: ",";\n    text-decoration: none;\n    text-transform: uppercase;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n\n    &:focus {\n        outline: none !important;  \n    }\n    &:hover {\n        background: ",";\n    }\n    &:active {\n        background: ",";\n    }\n    &:disabled {\n        background: ",";\n        cursor: auto;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    ","\n"])),51,"white","green","sans-serif",400,t(.3,"black","green"),t(.1,"black","green"),t(.5,"white","green"),(function(n){return n.outline&&"\n        \n       \n    "})),s=function(o){var e=o.onClick,t=o.children,r=o.disabled,c=o.outline;return n.createElement("div",null,n.createElement(i,{outline:c,onClick:e,disabled:r},t))};s.defaultProps={onClick:function(){},disabled:!1,outline:!1};var b=function(n){return"Hello "+n};export{s as Button,b as Greeter,c as TestComponent};
