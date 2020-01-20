"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),__assign=function(){return(__assign=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var r in n=arguments[o])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function styleInject(e,n){void 0===n&&(n={});var o=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var css=".Button_btn__36cCc {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n  min-width: 4em;\n  height: var(--btn-height, 31px);\n  padding: 0 2.5em;\n  border-radius: 2em;\n  color: var(--btn-text-color, white);\n  background: var(--btn-background-color, green);\n  font-family: var(--btn-font-family, sans-serif);\n  font-weight: var(--btn-font-weight, 400);\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent; }\n  .Button_btn__36cCc:focus {\n    outline: none !important; }\n  .Button_btn__36cCc a {\n    text-decoration: none;\n    color: inherit; }\n\n.Button_btn__36cCc:hover {\n  background: var(--btn-background-color-hover, #005a00); }\n\n.Button_btn__36cCc:active {\n  background: var(--btn-background-color-active, #007300); }\n\n.Button_btn__36cCc:disabled {\n  background: var(--btn-background-color-disabled, #80c080);\n  cursor: auto; }\n\n.Button_btn--outline__17CIM {\n  background-color: transparent;\n  border: 2px solid var(--btn-background-color, green);\n  color: var(--btn-background-color, green); }\n  .Button_btn--outline__17CIM:hover {\n    background: transparent;\n    border-color: var(--btn-background-color-hover, #005a00);\n    color: var(--btn-background-color-hover, #005a00); }\n  .Button_btn--outline__17CIM:active {\n    background: transparent;\n    border-color: var(--btn-background-color-active, #007300);\n    color: var(--btn-background-color-active, #007300); }\n  .Button_btn--outline__17CIM:disabled {\n    background-color: transparent;\n    color: var(--btn-background-color-disabled, #80c080);\n    border-color: var(--btn-background-color-disabled, #80c080); }\n",styles={btn:"Button_btn__36cCc","btn--outline":"Button_btn--outline__17CIM",btnOutline:"Button_btn--outline__17CIM"};styleInject(css);var Button=function(e){var n=e.onClick,o=e.children,t=e.disabled,r=e.outline,i=e.type,l={};return i&&(l.type=i),React__default.createElement("button",__assign({},l,{className:styles.btn+(r?" "+styles.btnOutline:""),onClick:n,disabled:t}),o)};Button.defaultProps={onClick:function(){},disabled:!1,outline:!1};var css$1=".Field_field__2rFOc {\n  display: inline-flex;\n  align-items: center;\n  box-sizing: border-box;\n  background: var(--field-background-color, white);\n  border-radius: 1em;\n  min-width: 300px;\n  height: var(--field-height, 34px);\n  border-radius: calc(var(--field-height, 34px) / 2);\n  outline: none;\n  margin: 0;\n  padding: 0.5em 1em;\n  border: 1px solid grey;\n  color: var(--field-text-color, black);\n  font-size: 1em;\n  font-weight: var(--field-font-weight, 400);\n  font-family: var(--field-font-family, sans-serif);\n  transition: border-color 300ms ease; }\n\n.Field_field__2rFOc:focus,\n.Field_field--focus__1PxDA {\n  border-color: var(--field-focus-color, green); }\n\n.Field_field__2rFOc:disabled {\n  background-color: lightgrey;\n  border-color: lightgrey; }\n\n.Field_field__subfields__2D8Lk {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding: 0.5em 1em;\n  pointer-events: none; }\n\n.Field_field__error__1LMdQ {\n  display: none;\n  margin-top: 0.5em;\n  font-size: 0.95em;\n  font-family: var(--field-font-family, sans-serif);\n  color: var(--field-error-color, red); }\n\n.Field_field--invalid__1gaMt {\n  color: var(--field-error-color, red);\n  border-color: var(--field-error-color, red);\n  background-color: var(--field-error-background-color, #ffe6e6); }\n  .Field_field--invalid__1gaMt + .Field_field__error__1LMdQ {\n    display: block; }\n\n.Field_field--full-width__1OB_t {\n  min-width: 100%; }\n\n.Field_field--has-subfields__1vUGw {\n  opacity: 1; }\n\n.Field_field--locked__3-N4E {\n  cursor: default; }\n",styles$1={field:"Field_field__2rFOc","field--focus":"Field_field--focus__1PxDA",field__subfields:"Field_field__subfields__2D8Lk",field__error:"Field_field__error__1LMdQ","field--invalid":"Field_field--invalid__1gaMt","field--full-width":"Field_field--full-width__1OB_t","field--has-subfields":"Field_field--has-subfields__1vUGw","field--locked":"Field_field--locked__3-N4E",fieldFocus:"Field_field--focus__1PxDA",fieldSubfields:"Field_field__subfields__2D8Lk",fieldError:"Field_field__error__1LMdQ",fieldInvalid:"Field_field--invalid__1gaMt",fieldFullWidth:"Field_field--full-width__1OB_t",fieldHasSubfields:"Field_field--has-subfields__1vUGw",fieldLocked:"Field_field--locked__3-N4E"};styleInject(css$1);var css$2=".Checkbox_checkbox__3a6If {\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.Checkbox_checkbox__ui-container__1DwX9 {\n  display: block;\n  position: relative;\n  box-sizing: content-box;\n  height: 20px;\n  width: 20px;\n  margin: 5px; }\n\n.Checkbox_checkbox__input__2j1dP {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  opacity: 0;\n  cursor: pointer; }\n  .Checkbox_checkbox__input__2j1dP:disabled ~ .Checkbox_checkbox__ui__1D-1J {\n    background: lightgrey; }\n  .Checkbox_checkbox__input__2j1dP:checked ~ .Checkbox_checkbox__ui__1D-1J > * {\n    opacity: 1; }\n  .Checkbox_checkbox__input__2j1dP:invalid ~ .Checkbox_checkbox__ui__1D-1J {\n    background-color: var(--checkbox-error-background-color, #ffe6e6);\n    border-color: var(--checkbox-error-border-color, red); }\n\n.Checkbox_checkbox__ui__1D-1J {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  border-radius: 2px;\n  border: 1px solid grey; }\n  .Checkbox_checkbox__ui__1D-1J > * {\n    opacity: 0; }\n\n.Checkbox_checkbox__error-text__1vPzS {\n  color: var(--checkbox-error-text-color, red); }\n",styles$2={checkbox:"Checkbox_checkbox__3a6If","checkbox__ui-container":"Checkbox_checkbox__ui-container__1DwX9",checkbox__input:"Checkbox_checkbox__input__2j1dP",checkbox__ui:"Checkbox_checkbox__ui__1D-1J","checkbox__error-text":"Checkbox_checkbox__error-text__1vPzS",checkboxUiContainer:"Checkbox_checkbox__ui-container__1DwX9",checkboxInput:"Checkbox_checkbox__input__2j1dP",checkboxUi:"Checkbox_checkbox__ui__1D-1J",checkboxErrorText:"Checkbox_checkbox__error-text__1vPzS"};styleInject(css$2);var Checkbox=function(e){var n=e.id,o=e.disabled,t=e.checked,r=e.invalid,i=e.invalidText,l=e.icon,a=e.checkedIcon,d=e.onChange,_=React.useRef(null);return React.useEffect((function(){_.current&&(r?_.current.setCustomValidity("Invalid"):_.current.setCustomValidity(""))}),[r]),React__default.createElement("div",{className:styles$2.checkbox},React__default.createElement("div",{className:styles$2.checkboxUiContainer},React__default.createElement("input",{type:"checkbox",ref:_,className:styles$2.checkboxInput,id:n,disabled:o,checked:t,onChange:d}),React__default.createElement("div",{className:styles$2.checkboxUi},a?React__default.cloneElement(a):l&&React__default.cloneElement(l))),r&&i&&React__default.createElement("span",{className:styles$2.checkboxErrorText},i))};Checkbox.defaultProps={checkedIcon:React__default.createElement("span",null,"✓")};var Field=function(e){var n=e.value,o=e.type,t=e.innerRef,r=e.id,i=e.placeholder,l=e.disabled,a=e.focus,d=e.invalid,_=e.required,c=e.fullWidth,s=e.onChange,p=e.onFocus,u=e.onBlur,f=e.onClick,b=e.locked,h=React.useState(n),m=h[0],g=h[1];React.useEffect((function(){g(n)}),[n]);return"checkbox"==o?React__default.createElement(Checkbox,__assign({},e)):React__default.createElement(React__default.Fragment,null,React__default.createElement("input",{className:[styles$1.field,a?styles$1.fieldFocus:"",d?styles$1.fieldInvalid:"",c?styles$1.fieldFullWidth:"",Array.isArray(m)?styles$1.fieldHasSubfields:"",b?styles$1.fieldLocked:""].join(" "),id:r,ref:t,type:o,value:Array.isArray(m)?m.reduce((function(e,n){return e+n}),""):m,placeholder:i,disabled:l,required:_,onChange:function(e){b||(g(e.target.value),s&&s(e))},onFocus:p,onBlur:u,onClick:f}),Array.isArray(m)&&m.length&&React__default.createElement("div",{className:styles$1.fieldSubfields},m))};Field.defaultProps={type:"text",value:"",required:!1,fullWidth:!1,onChange:function(){},onFocus:function(){},onBlur:function(){}};var ELabelPosition,css$3=".FieldWrapper_field-wrapper__2Cltu {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative; }\n\n.FieldWrapper_field-wrapper__label__1xs3e {\n  display: block;\n  margin: 0; }\n\n.FieldWrapper_field-wrapper__label__1xs3e[for] {\n  cursor: pointer; }\n\n.FieldWrapper_field-wrapper__required__1ukVN {\n  display: inline; }\n\n.FieldWrapper_field-wrapper--label-left__N67NS {\n  flex-direction: row;\n  align-items: center; }\n  .FieldWrapper_field-wrapper--label-left__N67NS .FieldWrapper_field-wrapper__label__1xs3e {\n    margin-right: 0.5em; }\n\n.FieldWrapper_field-wrapper--label-right__1hFkm {\n  flex-direction: row-reverse;\n  align-items: center; }\n  .FieldWrapper_field-wrapper--label-right__1hFkm .FieldWrapper_field-wrapper__label__1xs3e {\n    margin-left: 0.5em; }\n\n.FieldWrapper_field-wrapper--label-top__3OIbf {\n  flex-direction: column; }\n\n.FieldWrapper_field-wrapper--label-inside__98Wtg .FieldWrapper_field-wrapper__label__1xs3e {\n  position: absolute;\n  top: 0;\n  left: 1em;\n  font-size: 1em;\n  line-height: 1em;\n  margin: 0;\n  transform-origin: 0 0;\n  transform: translate(0, 50%) scale(1);\n  transition: all linear 100ms;\n  pointer-events: none; }\n\n.FieldWrapper_field-wrapper--label-inside__98Wtg .FieldWrapper_field-wrapper__required__1ukVN {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 1em;\n  pointer-events: none; }\n\n.FieldWrapper_field-wrapper--hide-label__3J9m8.FieldWrapper_field-wrapper--label-inside__98Wtg .FieldWrapper_field-wrapper__label__1xs3e {\n  transform: translate(0, 0) scale(0.5); }\n\n.FieldWrapper_field-wrapper--full-width__3DSsI {\n  width: 100%; }\n",styles$3={"field-wrapper":"FieldWrapper_field-wrapper__2Cltu","field-wrapper__label":"FieldWrapper_field-wrapper__label__1xs3e","field-wrapper__required":"FieldWrapper_field-wrapper__required__1ukVN","field-wrapper--label-left":"FieldWrapper_field-wrapper--label-left__N67NS","field-wrapper--label-right":"FieldWrapper_field-wrapper--label-right__1hFkm","field-wrapper--label-top":"FieldWrapper_field-wrapper--label-top__3OIbf","field-wrapper--label-inside":"FieldWrapper_field-wrapper--label-inside__98Wtg","field-wrapper--hide-label":"FieldWrapper_field-wrapper--hide-label__3J9m8","field-wrapper--full-width":"FieldWrapper_field-wrapper--full-width__3DSsI",fieldWrapper:"FieldWrapper_field-wrapper__2Cltu",fieldWrapperLabel:"FieldWrapper_field-wrapper__label__1xs3e",fieldWrapperRequired:"FieldWrapper_field-wrapper__required__1ukVN",fieldWrapperLabelLeft:"FieldWrapper_field-wrapper--label-left__N67NS",fieldWrapperLabelRight:"FieldWrapper_field-wrapper--label-right__1hFkm",fieldWrapperLabelTop:"FieldWrapper_field-wrapper--label-top__3OIbf",fieldWrapperLabelInside:"FieldWrapper_field-wrapper--label-inside__98Wtg",fieldWrapperHideLabel:"FieldWrapper_field-wrapper--hide-label__3J9m8",fieldWrapperFullWidth:"FieldWrapper_field-wrapper--full-width__3DSsI"};styleInject(css$3),function(e){e.TOP="top",e.LEFT="left",e.INSIDE="inside",e.RIGHT="right"}(ELabelPosition||(ELabelPosition={}));var getPositionClass=function(e){switch(e){case ELabelPosition.LEFT:return styles$3.fieldWrapperLabelLeft;case ELabelPosition.TOP:return styles$3.fieldWrapperLabelTop;case ELabelPosition.INSIDE:return styles$3.fieldWrapperLabelInside;case ELabelPosition.RIGHT:return styles$3.fieldWrapperLabelRight;default:return styles$3.fieldWrapperLabelLeft}},FieldWrapper=function(e){var n=e.id,o=e.label,t=e.labelPos,r=e.control,i=e.required,l=e.requiredIcon,a=e.fullWidth,d=e.value,_=e.invalid,c=e.errorText,s=e.children,p=e.onChange,u=React.useState((d||"").toString().length>0),f=u[0],b=u[1];return React.useEffect((function(){}),[d]),React__default.createElement("div",{className:[styles$3.fieldWrapper,getPositionClass(t),f?styles$3.fieldWrapperHideLabel:"",a?styles$3.fieldWrapperFullWidth:""].join(" ")},o&&React__default.createElement("label",{className:styles$3.fieldWrapperLabel,htmlFor:n},o,i&&l&&t!==ELabelPosition.INSIDE&&React__default.createElement("span",{className:styles$3.fieldWrapperRequired},React__default.cloneElement(l))),r&&React__default.cloneElement(r,__assign(__assign({},e),{onChange:function(e){b(e.target.value.length||document.activeElement==e.target),p&&p(e)},onFocus:function(){b(!0)},onBlur:function(e){b(e.target.value.length>0)}})),i&&l&&t===ELabelPosition.INSIDE&&React__default.createElement("span",{className:styles$3.fieldWrapperRequired},React__default.cloneElement(l)),_&&c&&React__default.createElement("span",null,c),s)};FieldWrapper.defaultProps={labelPos:ELabelPosition.TOP,control:React__default.createElement(Field,null),requiredIcon:React__default.createElement(React__default.Fragment,null,"*")};var css$4='.Radio_radio__x25Ie {\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.Radio_radio__ui-container__FEFgs {\n  display: block;\n  position: relative;\n  box-sizing: content-box;\n  height: 20px;\n  width: 20px;\n  margin: 5px; }\n\n.Radio_radio__input__25Ci1 {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  outline: none;\n  border: none;\n  opacity: 0;\n  cursor: pointer; }\n  .Radio_radio__input__25Ci1:disabled ~ .Radio_radio__ui__ge7Kh {\n    background: lightgrey;\n    border: none; }\n  .Radio_radio__input__25Ci1:checked ~ .Radio_radio__ui__ge7Kh::before {\n    display: flex;\n    content: "";\n    position: absolute;\n    border-radius: 50%;\n    background: grey;\n    padding: 5px;\n    align-items: center;\n    justify-content: center; }\n  .Radio_radio__input__25Ci1:invalid ~ .Radio_radio__ui__ge7Kh {\n    background-color: var(--radio-error-background-color, #ffe6e6);\n    border-color: var(--radio-error-border-color, red); }\n\n.Radio_radio__ui__ge7Kh {\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  border-radius: 10px;\n  border: 1px solid grey; }\n\n.Radio_radio__error-text__1Fe5f {\n  color: var(--radio-error-text-color, red); }\n',styles$4={radio:"Radio_radio__x25Ie","radio__ui-container":"Radio_radio__ui-container__FEFgs",radio__input:"Radio_radio__input__25Ci1",radio__ui:"Radio_radio__ui__ge7Kh","radio__error-text":"Radio_radio__error-text__1Fe5f",radioUiContainer:"Radio_radio__ui-container__FEFgs",radioInput:"Radio_radio__input__25Ci1",radioUi:"Radio_radio__ui__ge7Kh",radioErrorText:"Radio_radio__error-text__1Fe5f"};styleInject(css$4);var RadioGroupContext=React__default.createContext({}),Radio=function(e){var n=e.disabled,o=e.checked,t=e.invalid,r=e.invalidText,i=e.value,l=e.name,a=e.id,d=e.onClick,_=React.useRef(null),c=React.useContext(RadioGroupContext);return c&&(l=c.name||l),React.useEffect((function(){_.current&&(t?_.current.setCustomValidity("Invalid"):_.current.setCustomValidity(""))}),[t]),React__default.createElement("div",{className:styles$4.radio},React__default.createElement("div",{className:styles$4.radioUiContainer},React__default.createElement("input",{type:"radio",ref:_,id:a,value:i,name:l,className:styles$4.radioInput,disabled:n,checked:o,onClick:d}),React__default.createElement("div",{className:styles$4.radioUi})),t&&r&&React__default.createElement("span",{className:styles$4.radioErrorText},r))};Radio.defaultProps={};var css$5='.Tooltip_tooltip__jLmh8 {\n  display: block;\n  position: relative;\n  width: 12em;\n  padding: 1em 1.5em;\n  border: 1px solid var(--tooltip-border-color, green);\n  background: white;\n  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.3);\n  color: var(--tooltip-text-color, inherit);\n  font-size: var(--tooltip-font-size, inherit); }\n  .Tooltip_tooltip__jLmh8::before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: -1px;\n    top: 1em;\n    height: 1.8em;\n    width: 1.8em;\n    transform-origin: 0 0;\n    transform: rotate(45deg);\n    border: inherit;\n    border-top: none;\n    border-right: none;\n    background: inherit; }\n\n.Tooltip_tooltip--top__1j5yt::before {\n  border: inherit;\n  border-top: none;\n  border-left: none;\n  transform-origin: 0 100%;\n  top: auto;\n  right: auto;\n  bottom: -1px;\n  left: 1em; }\n\n.Tooltip_tooltip--right__1y8l8::before {\n  border: inherit;\n  border-top: none;\n  border-right: none;\n  transform-origin: 0 0;\n  top: 1em;\n  right: auto;\n  bottom: auto;\n  left: -1px; }\n\n.Tooltip_tooltip--bottom__3XmEn::before {\n  border: inherit;\n  border-bottom: none;\n  border-right: none;\n  transform-origin: 100% 0;\n  top: -1px;\n  right: 1em;\n  bottom: auto;\n  left: auto; }\n\n.Tooltip_tooltip--left__1PPoA::before {\n  border: inherit;\n  border-bottom: none;\n  border-left: none;\n  transform-origin: 100% 100%;\n  top: auto;\n  left: auto;\n  bottom: 1em;\n  right: -1px; }\n',styles$5={tooltip:"Tooltip_tooltip__jLmh8","tooltip--top":"Tooltip_tooltip--top__1j5yt","tooltip--right":"Tooltip_tooltip--right__1y8l8","tooltip--bottom":"Tooltip_tooltip--bottom__3XmEn","tooltip--left":"Tooltip_tooltip--left__1PPoA",tooltipTop:"Tooltip_tooltip--top__1j5yt",tooltipRight:"Tooltip_tooltip--right__1y8l8",tooltipBottom:"Tooltip_tooltip--bottom__3XmEn",tooltipLeft:"Tooltip_tooltip--left__1PPoA"};styleInject(css$5);var getModifierClassName=function(e){switch(void 0===e&&(e=""),e){case"top":return styles$5.tooltipTop;case"right":return styles$5.tooltipRight;case"bottom":return styles$5.tooltipBottom;case"left":return styles$5.tooltipLeft;default:return""}},Tooltip=function(e){var n=e.text,o=e.placement;return React__default.createElement("div",{className:styles$5.tooltip+" "+getModifierClassName(o)},n)};Tooltip.defaultProps={};var ESizes,css$6=".Container_container__2ZjEE {\n  display: flex; }\n",styles$6={container:"Container_container__2ZjEE"};styleInject(css$6),function(e){e[e.sm=0]="sm",e[e.s=1]="s",e[e.m=2]="m",e[e.l=3]="l",e[e.xl=4]="xl"}(ESizes||(ESizes={}));var Container=function(e){var n=e.children;return React__default.createElement("div",{className:styles$6.container},n)};Container.defaultProps={maxWidth:ESizes.xl};var ESizes$1,EColor,css$7=".Box_box__3uhyZ {\n  display: block;\n  padding: 2em; }\n\n.Box_box--light__1DR0- {\n  background-color: #f6f5f5; }\n",styles$7={box:"Box_box__3uhyZ","box--light":"Box_box--light__1DR0-",boxLight:"Box_box--light__1DR0-"};styleInject(css$7),function(e){e[e.SM=0]="SM",e[e.S=1]="S",e[e.M=2]="M",e[e.L=3]="L",e[e.XL=4]="XL"}(ESizes$1||(ESizes$1={})),function(e){e.NONE="",e.LIGHT="light"}(EColor||(EColor={}));var getColorClass=function(e){switch(e){case EColor.LIGHT:return styles$7.boxLight;default:return""}},Box=function(e){var n=e.children,o=e.color;return React__default.createElement("div",{className:styles$7.box+" "+getColorClass(o)},n)};Box.defaultProps={color:EColor.NONE};var css$8=".RadioGroup_radio-group__3Siyf {\n  display: inline-flex;\n  flex-direction: row;\n  margin: -10px; }\n  .RadioGroup_radio-group__3Siyf > * {\n    margin: 10px; }\n",styles$8={"radio-group":"RadioGroup_radio-group__3Siyf",radioGroup:"RadioGroup_radio-group__3Siyf"};styleInject(css$8);var RadioGroup=function(e){var n=e.children,o=e.name,t=e.value;return React__default.createElement(RadioGroupContext.Provider,{value:{name:o,value:t}},React__default.createElement("div",{className:styles$8.radioGroup},n))};RadioGroup.defaultProps={};var css$9=".Dropdown_dropdown__1dxqs {\n  display: inline-flex;\n  align-items: center;\n  position: relative; }\n\n.Dropdown_dropdown__input__14ufm {\n  cursor: pointer;\n  width: inherit; }\n\n.Dropdown_dropdown__list__1WaBV {\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  margin-top: 3px;\n  opacity: 0;\n  z-index: 1; }\n\n.Dropdown_dropdown__menu__1h7OR {\n  display: flex;\n  flex-direction: column;\n  border-radius: 1em;\n  padding: 0.5em 1em;\n  border: 1px solid;\n  background-color: var(--dropdown-list-background-color, white);\n  border-color: var(--dropdown-list-border-color, green);\n  overflow-y: auto;\n  max-height: 0;\n  /*\r\n    &::-webkit-scrollbar {\r\n        width: 11px;\r\n        background: transparent;\r\n    }\r\n    &::-webkit-scrollbar-track {\r\n        background: transparent;\r\n    }\r\n    &::-webkit-scrollbar-thumb {\r\n        background: blue;\r\n        border-top: 10px solid rgba(white, 0);\r\n        border-bottom: 10px solid rgba(white, 0.1);\r\n        border-right: 10px solid rgba(white, 0.1);\r\n    }\r\n    */ }\n\n.Dropdown_dropdown__menu-item__1q7Q_ {\n  display: block; }\n\n.Dropdown_dropdown__select__2suAg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0.1; }\n  .Dropdown_dropdown__select__2suAg option {\n    opacity: 0.2; }\n\n.Dropdown_dropdown__value-container__36aEe {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  padding: 0.5em 1em;\n  pointer-events: none; }\n\n.Dropdown_dropdown__icon__2NV08 {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 0.5em 1em;\n  box-sizing: border-box;\n  pointer-events: none; }\n\n.Dropdown_dropdown--is-open__2tAhX .Dropdown_dropdown__list__1WaBV {\n  opacity: 1; }\n\n.Dropdown_dropdown--is-open__2tAhX .Dropdown_dropdown__menu__1h7OR {\n  max-height: 300px; }\n\n.Dropdown_dropdown__menu-item--focus__3apm7 {\n  background-color: var(--dropdown-option-focus-background-color, #c3c3c3); }\n\n.Dropdown_dropdown__menu-item--selected__3uhIl {\n  color: var(--dropdown-option-selected-color, green); }\n\n.Dropdown_dropdown--full-width__9XS8x {\n  width: 100%; }\n",styles$9={dropdown:"Dropdown_dropdown__1dxqs",dropdown__input:"Dropdown_dropdown__input__14ufm",dropdown__list:"Dropdown_dropdown__list__1WaBV",dropdown__menu:"Dropdown_dropdown__menu__1h7OR","dropdown__menu-item":"Dropdown_dropdown__menu-item__1q7Q_",dropdown__select:"Dropdown_dropdown__select__2suAg","dropdown__value-container":"Dropdown_dropdown__value-container__36aEe",dropdown__icon:"Dropdown_dropdown__icon__2NV08","dropdown--is-open":"Dropdown_dropdown--is-open__2tAhX","dropdown__menu-item--focus":"Dropdown_dropdown__menu-item--focus__3apm7","dropdown__menu-item--selected":"Dropdown_dropdown__menu-item--selected__3uhIl","dropdown--full-width":"Dropdown_dropdown--full-width__9XS8x",dropdownInput:"Dropdown_dropdown__input__14ufm",dropdownList:"Dropdown_dropdown__list__1WaBV",dropdownMenu:"Dropdown_dropdown__menu__1h7OR",dropdownMenuItem:"Dropdown_dropdown__menu-item__1q7Q_",dropdownSelect:"Dropdown_dropdown__select__2suAg",dropdownValueContainer:"Dropdown_dropdown__value-container__36aEe",dropdownIcon:"Dropdown_dropdown__icon__2NV08",dropdownIsOpen:"Dropdown_dropdown--is-open__2tAhX",dropdownMenuItemFocus:"Dropdown_dropdown__menu-item--focus__3apm7",dropdownMenuItemSelected:"Dropdown_dropdown__menu-item--selected__3uhIl",dropdownFullWidth:"Dropdown_dropdown--full-width__9XS8x"};styleInject(css$9);var Dropdown=function(e){var n=e.onChange,o=e.onInputChange,t=(e.children,e.options),r=e.openIcon,i=e.closeIcon,l=e.searchable,a=e.filterable,d=e.fullWidth,_=React.useState(!1),c=_[0],s=_[1],p=React.useState(!1),u=p[0],f=p[1],b=React.useState(""),h=b[0],m=b[1],g=React.useState(),w=g[0],x=g[1],v=React.useState(),y=v[0],k=v[1],R=React.createRef(),F=a?t?t.filter((function(e){return!h.length||(e.label.toLowerCase().includes(h)||"string"==typeof e.value&&e.value.toLowerCase().includes(h))})):[]:t||[];React.useEffect((function(){return c&&window.addEventListener("keydown",E),function(){window.removeEventListener("keydown",E)}}),[c,u,w,F]);var E=function(e){switch(e.key){case"ArrowUp":e.preventDefault(),u?C(-1):f(!0);break;case"ArrowDown":e.preventDefault(),u?C(1):f(!0);break;case"Enter":e.preventDefault(),w&&W(w);break;case"Escape":e.preventDefault(),f(!1),$()}},C=function(e){var n=w?F.indexOf(w):-1,o=Math.max(0,Math.min(n+e,F.length-1));x((function(){return F[o]}))},W=function(e){k(e),x(e),f(!1),$(),n&&n(e)},$=function(){m("")};return React__default.createElement(React__default.Fragment,null,React__default.createElement("div",{className:[styles$9.dropdown,u?styles$9.dropdownIsOpen:"",d?styles$9.dropdownFullWidth:""].join(" ")},React__default.createElement("div",{className:styles$9.dropdownInput},React__default.createElement(Field,{innerRef:R,onChange:function(e){m(e.target.value),e.target.value.length&&f(!0),o&&o(e)},onFocus:function(e){s(!0),f(!0)},onBlur:function(e){f(!1),s(!1),$()},onClick:function(e){c&&!u&&f(!0)},locked:!l,fullWidth:d,value:h.length?h:""}),React__default.createElement("div",{className:styles$9.dropdownValueContainer},0===h.length&&y?y.label:""),React__default.createElement("div",{className:styles$9.dropdownIcon},u?i?React__default.cloneElement(i):null:r?React__default.cloneElement(r):null)),React__default.createElement("div",{className:styles$9.dropdownList},React__default.createElement("div",{className:styles$9.dropdownMenu},F.map((function(e,n){return React__default.createElement("div",{key:n,className:[styles$9.dropdownMenuItem,y===e?styles$9.dropdownMenuItemSelected:"",w===e?styles$9.dropdownMenuItemFocus:""].join(" "),onClick:function(n){return W(e)},onMouseDown:function(e){e.preventDefault()},onMouseMove:function(){return x(e)}},e.label)})),0===F.length&&React__default.createElement("div",{className:styles$9.dropdownMenuItem},"Ingen resultater")))))};Dropdown.defaultProps={searchable:!1,filterable:!0,openIcon:React__default.createElement("span",null,"↓"),closeIcon:React__default.createElement("span",null,"↑"),fullWidth:!1},exports.Box=Box,exports.Button=Button,exports.Checkbox=Checkbox,exports.Container=Container,exports.Dropdown=Dropdown,exports.Field=Field,exports.FieldWrapper=FieldWrapper,exports.Radio=Radio,exports.RadioGroup=RadioGroup,exports.Tooltip=Tooltip;
