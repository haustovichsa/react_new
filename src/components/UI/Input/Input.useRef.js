import React, { useEffect, useRef, useState } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ id, label, type, value, onChange, ...restProps }, ref) => {
    const [inputValue, setInputValue] = useState(value ?? '');
    const lastChange = useRef();

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const onChangeValueHandler = event => {
        setInputValue(event.target.value);
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            onChange(event.target.value);
        }, 300);
    };

    console.log('my Input');

    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                ref={ref}
                value={inputValue}
                type={type}
                onChange={onChangeValueHandler}
                {...restProps}
            />
        </div>
    );
});

export default Input;
