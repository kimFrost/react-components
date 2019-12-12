import React from 'react';
import 'TestComponent.scss'

interface IProps {}

const TestComponent: React.FC<IProps> = () => {
    return (
        <div className="test-component">Test component</div>
    )
}

TestComponent.defaultProps = {}

export default TestComponent