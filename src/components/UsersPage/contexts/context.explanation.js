import React from 'react';

const TestContext = React.createContext({
    value: 'value 0',
});

const MyComponent = () => {
    return (
        <TestContext.Consumer>
            {context => (
                <div style={{ color: 'white' }} on>
                    {context.value}
                </div>
            )}
        </TestContext.Consumer>
    );
};

const App = () => {
    return (
        <>
            <TestContext.Provider value={{ value: 'value 1' }}>
                <MyComponent />
            </TestContext.Provider>
            <TestContext.Provider value={{ value: 'value 2' }}>
                <MyComponent />
            </TestContext.Provider>
            <TestContext.Provider value={{ value: 'value 3' }}>
                <TestContext.Provider value={{ value: 'value 4' }}>
                    <MyComponent />
                </TestContext.Provider>
            </TestContext.Provider>
            <MyComponent />
        </>
    );
};

export default App;
