import { useEffect, useRef, useState } from 'react';
import classes from './UserForm.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { getValidationError } from './helpers/getValidationError';
import Input from '../../UI/Input/Input.forwardRef';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '';
const EMPTY_ERROR = null;

const UserForm = props => {
    const [error, setError] = useState(EMPTY_ERROR);

    const nameRef = useRef();
    const salaryRef = useRef();

    useEffect(() => {
        salaryRef.current.focus();
    }, []);

    const confirmErrorHandler = () => setError(EMPTY_ERROR);

    const submitHandler = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const salary = salaryRef.current.value;

        const validationError = getValidationError(name, salary);

        if (validationError) {
            setError(validationError);
            return;
        }

        if (props.onGetUser) {
            props.onGetUser({ name, salary });
        }

        nameRef.current.value = DEFAULT_NAME;
        salaryRef.current.value = DEFAULT_SALARY;
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
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <Input ref={nameRef} label="Name" id="name" type="text" />

                    <Input ref={salaryRef} label="Salary" id="salary" type="number" />

                    <Button type="submit">Apply</Button>
                </form>
            </Card>
        </>
    );
};

export default UserForm;
