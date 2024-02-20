import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const { id, label, type, ...otherProps } = props;
    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} type={type} {...otherProps} />
        </div>
    );
});

export default Input;
