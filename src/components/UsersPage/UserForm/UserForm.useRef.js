import { useRef, useState } from 'react';
import classes from './UserForm.module.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { getValidationError } from './helpers/getValidationError';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const EMPTY_ERROR = null;

const UserForm = props => {
    const [error, setError] = useState(EMPTY_ERROR);

    const nameRef = useRef();
    const salaryRef = useRef();

    const confirmErrorHandler = () => setError(EMPTY_ERROR);

    const setFocusHandler = () => salaryRef.current.focus();

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
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" ref={nameRef} />

                    <label htmlFor="salary">Salary</label>
                    <input id="salary" type="number" ref={salaryRef} />

                    <Button type="submit">Apply</Button>
                    <Button type="button" onClick={setFocusHandler}>
                        Set focus
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default UserForm;
