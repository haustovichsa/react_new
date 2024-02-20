import React from 'react';
import './SyntaxComponent.css';

//------------------Fragment---------------------------
// 1.1 Fragment
const Fragment1 = () => {
    return (
        <div>
            <div>FirstName: Michael</div>
            <div>LastName: Jordan</div>
        </div>
    );
};

// 1.2 Fragment
const Fragment2 = () => {
    return (
        <React.Fragment>
            <div>FirstName: Michael</div>
            <div>LastName: Jordan</div>
        </React.Fragment>
    );
};
// 1.3 Fragment
const Fragment3 = () => {
    return (
        <>
            <div>FirstName: Michael</div>
            <div>LastName: Jordan</div>
        </>
    );
};

//------------------Return---------------------------
// 2.1 return one line
const Return1 = () => (
    <>
        <div>FirstName: Michael</div>
        <div>LastName: Jordan</div>
    </>
);

// 2.2 return multiple lines
const Return2 = () => {
    return (
        <>
            <div>FirstName: Michael</div>
            <div>LastName: Jordan</div>
        </>
    );
};

//------------------ClassName---------------------------
const ClassName1 = () => {
    return (
        <div className="user-name">
            <div>FirstName: Michael</div>
            <div>LastName: Jordan</div>
        </div>
    );
};

//------------------Props---------------------------
const FullName = props => {
    return (
        <div>
            <div>FirstName: {props.firstName}</div>
            <div>LastName: {props.lastName}</div>
        </div>
    );
};

const FullNameInst = () => {
    return <FullName firstName="Michael" lastName="Jordan" />;
};

//------------------{} - run basic javascript expression------------
const Expression = props => {
    return (
        <div>
            <div>FirstName: {props.firstName}</div>
            <div>LastName: {props.lastName}</div>
            {props.salary && <div>Salary: {props.salary} $</div>}
        </div>
    );
};

const ExpressionInst = () => {
    return <Expression firstName="Michael" lastName="Jordan" salary="100" />;
};

//------------------props.children-----------------------------
const Children = props => {
    return (
        <div>
            <div>FirstName: {props.firstName}</div>
            <div>LastName: {props.lastName}</div>
            {props.children && props.children}
        </div>
    );
};

const ChildrenInst = () => {
    return (
        <Children firstName="Michael" lastName="Jordan">
            <div>Salary: 100 $</div>
        </Children>
    );
};

//-------------createElement------------------
const CreateElement = props => {
    return React.createElement(
        'div',
        {},
        React.createElement('div', {}, `FirstName: ${props.firstName}`),
        React.createElement('div', {}, `LastName: ${props.lastName}`),
        props.salary && React.createElement('div', {}, `Salary: ${props.salary} $`),
    );
};

const CreateElementInst = () => {
    return <CreateElement firstName="Michael" lastName="Jordan" salary="100" />;
};

//-------------------events----------------------
const FullNameEvent = props => {
    return (
        <div>
            <div>FirstName: {props.firstName}</div>
            <div>LastName: {props.lastName}</div>
            <button onClick={() => alert(`Full name: ${props.firstName} ${props.lastName}`)}>
                Show full name
            </button>
        </div>
    );
};

const FullNameEventInst = () => <FullNameEvent firstName="Michael" lastName="Jordan" />;

//-------------------List----------------------
const List = props => {
    return (
        <div>
            {props.items.map(item => (
                <div key={item.id}>
                    {item.name}: {item.salary}
                </div>
            ))}
        </div>
    );
};

const ListInst = () => {
    const items = [
        { id: '1', name: 'Pavel', salary: '100' },
        { id: '2', name: 'Michael', salary: '200' },
    ];

    return <List items={items} />;
};

const Root = () => {
    return (
        <div className="root">
            <ListInst />
        </div>
    );
};

export default Root;
