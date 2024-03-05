import React, { useEffect, useRef, useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { getValidationError } from './helpers/getValidationError';
import Input from '../../UI/Input/Input';
import useForm from './hooks/useForm';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const DEFAULT_ERROR = null;

const UserForm = props => {
    const {
        formData: { name, salary },
        setValue,
        handleInputChange,
    } = useForm({
        name: DEFAULT_NAME,
        salary: DEFAULT_SALARY,
    });

    const [error, setError] = useState(DEFAULT_ERROR);
    const nameRef = useRef();

    const confirmErrorHandler = () => setError(DEFAULT_ERROR);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const { user } = props;

    useEffect(() => {
        if (user) {
            setValue('name', user.name);
            setValue('salary', user.salary);
        }
    }, [user, setValue]);

    const submitHandler = event => {
        event.preventDefault();

        const validationError = getValidationError(name, salary);

        if (validationError) {
            setError(validationError);
            return;
        }

        if (props.onGetUser) {
            props.onGetUser({ name, salary });
        }

        setValue('name', DEFAULT_NAME);
        setValue('salary', DEFAULT_SALARY);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={confirmErrorHandler}
                />
            )}
            <Card className="input">
                <form onSubmit={submitHandler}>
                    <Input
                        label="Name"
                        name="name"
                        id="name"
                        type="text"
                        value={name}
                        ref={nameRef}
                        onChange={handleInputChange}
                    />

                    <Input
                        label="Salary"
                        name="salary"
                        id="salary"
                        type="number"
                        value={salary}
                        onChange={handleInputChange}
                    />

                    <Button type="submit">Apply</Button>
                </form>
            </Card>
        </>
    );
};

export default UserForm;
