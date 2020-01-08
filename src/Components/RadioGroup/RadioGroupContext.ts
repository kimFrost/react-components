import React from 'react';

interface IContext {
    name?: string
    value?: string
}

const RadioGroupContext = React.createContext<IContext>({});

export default RadioGroupContext;
