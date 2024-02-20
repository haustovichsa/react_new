import React from "react";

//------------------Fragment---------------------------
// 1.1 Fragment
const FragmentSyntax1 = () => {
    return <div>
        <div>FirstName</div>
        <div>LastName</div>
    </div>;
}
// 1.2 Fragment
const FragmentSyntax2 = () => {
    return <React.Fragment>
        <div>FirstName</div>
        <div>LastName</div>
    </React.Fragment>;
}
// 1.3 Fragment
const FragmentSyntax3 = () => {
    return <>
        <div>FirstName</div>
        <div>LastName</div>
    </>;
}

//------------------Return---------------------------
// 2.1 return one line
const Return1 = () => {
    return <>
        <div>FirstName</div>
        <div>LastName</div>
    </>;
}

// 2.2 return multiple lines
const Return2 = () => {
    return (
        <>
            <div>FirstName</div>
            <div>LastName</div>
        </>
    );
}

//------------------ClassName---------------------------
const className1 = () => {
    return (
        <div className='user-name'>
            <div>FirstName</div>
            <div>LastName</div>
        </div>
    );
}
export default className1;
