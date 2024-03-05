import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ id, label, type, value, onChange, ...restProps }, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input id={id} ref={ref} type={type} value={value} onChange={onChange} {...restProps} />
        </div>
    );
});

export default Input;
