import n from"react";function o(n,o){void 0===o&&(o={});var t=o.insertAt;if(n&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var t={testComponent:"TestComponent-module_testComponent__3dFd1",body:"TestComponent-module_body__xKHSp",testComponent__body:"TestComponent-module_testComponent__body__1Sr_9","testComponent--hot":"TestComponent-module_testComponent--hot__2qO2O",a:"TestComponent-module_a__256dz",testComponentBody:"TestComponent-module_testComponent__body__1Sr_9",testComponentHot:"TestComponent-module_testComponent--hot__2qO2O"};o(".TestComponent-module_testComponent__3dFd1 {\n  color: red; }\n\n.TestComponent-module_body__xKHSp {\n  color: ghostwhite; }\n\n.TestComponent-module_testComponent__body__1Sr_9 {\n  color: honeydew; }\n\n.TestComponent-module_testComponent--hot__2qO2O {\n  color: aquamarine; }\n  .TestComponent-module_testComponent--hot__2qO2O .TestComponent-module_body__xKHSp {\n    color: hotpink; }\n\nheader {\n  color: blueviolet; }\n\np {\n  color: hotpink; }\n\n.TestComponent-module_a__256dz {\n  color: navajowhite; }\n");var e=function(){return console.log("styles",t),n.createElement("div",{className:"testComponent "+t["testComponent--hot"]},n.createElement("div",{className:t.body},"Test component from new react component library"))};e.defaultProps={};var r="Button_btn__3SMLJ",d="Button_btn--outline__2317s";o(".Button_btn__3SMLJ {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  min-width: 4em;\n  height: 31px;\n  padding: 0 2.5em;\n  border-radius: 2em;\n  color: white;\n  background: green;\n  font-family: sans-serif;\n  font-weight: 400;\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent; }\n  .Button_btn__3SMLJ:focus {\n    outline: none !important; }\n  .Button_btn__3SMLJ a {\n    text-decoration: none;\n    color: inherit; }\n\n.Button_btn__3SMLJ:hover {\n  background: #005a00; }\n\n.Button_btn__3SMLJ:active {\n  background: #007300; }\n\n.Button_btn__3SMLJ:disabled {\n  background: #80c080;\n  cursor: auto; }\n\n.Button_btn--outline__2317s {\n  background-color: white;\n  border: 1px solid green;\n  color: green; }\n  .Button_btn--outline__2317s:hover {\n    background: transparent;\n    border-color: #005a00;\n    color: #005a00; }\n  .Button_btn--outline__2317s:active {\n    background: transparent;\n    border-color: #007300;\n    color: #007300; }\n  .Button_btn--outline__2317s:disabled {\n    background-color: transparent;\n    color: #80c080;\n    border-color: #80c080; }\n");var _=function(o){var t=o.onClick,e=o.children,_=o.disabled,l=o.outline;return n.createElement("button",{className:r+(l?" "+d:""),onClick:t,disabled:_},e)};_.defaultProps={onClick:function(){},disabled:!1,outline:!1};var l=function(n){return"Hello "+n};export{_ as Button,l as Greeter,e as TestComponent};
