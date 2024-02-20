import React, { useEffect, useState } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ id, label, type, value, onChange, ...restProps }, ref) => {
    const [inputValue, setValue] = useState(value ?? '');

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(inputValue);
        }, 200);

        return () => {
            clearTimeout(timeout);
        };
    }, [inputValue, onChange]);

    useEffect(() => {
        setValue(value);
    }, [value]);

    const onChangeValueHandler = event => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                ref={ref}
                type={type}
                value={inputValue}
                onChange={onChangeValueHandler}
                {...restProps}
            />
        </div>
    );
});

export default Input;
