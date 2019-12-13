"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TestComponent_1 = __importDefault(require("./Components/TestComponent"));
exports.TestComponent = TestComponent_1.default;
var Button_1 = __importDefault(require("./Components/Button/Button"));
exports.Button = Button_1.default;
function testMethod(param) {
    return "Hello " + param;
}
exports.testMethod = testMethod;
//# sourceMappingURL=index.js.map