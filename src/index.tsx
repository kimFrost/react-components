
import TestComponent from './Components/TestComponent';
import Button from './Components/Button/Button';

export { TestComponent, Button }

export function testMethod(param: string) {
  return "Hello " + param;
}