import { useEffect, useRef, useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { getValidationError } from './helpers/getValidationError';
import Input from '../../UI/Input/Input.useEffect';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const DEFAULT_ERROR = null;

const UserForm = props => {
    const [name, setName] = useState(DEFAULT_NAME);
    const [salary, setSalary] = useState(DEFAULT_SALARY);
    const [error, setError] = useState(DEFAULT_ERROR);
    const nameRef = useRef();

    const confirmErrorHandler = () => setError(DEFAULT_ERROR);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    useEffect(() => {
        console.log('UserForm render');
    });

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

        setName(DEFAULT_NAME);
        setSalary(DEFAULT_SALARY);
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
                        id="name"
                        type="text"
                        value={name}
                        ref={nameRef}
                        onChange={setName}
                    />

                    <Input
                        label="Salary"
                        id="salary"
                        type="number"
                        value={salary}
                        onChange={setSalary}
                    />

                    <Button type="submit">Apply</Button>
                </form>
            </Card>
        </>
    );
};

export default UserForm;
