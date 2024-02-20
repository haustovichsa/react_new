import { useState } from 'react';
import styles from './UserForm.module.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import { getValidationError } from './helpers/getValidationError';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const EMPTY_ERROR = null;

const UserForm = (props) => {
    const [name, setName] = useState(props.name || DEFAULT_NAME);
    const [salary, setSalary] = useState(props.salary || DEFAULT_SALARY);
    const [error, setError] = useState(EMPTY_ERROR);
    const changeNameHandler = (event) => setName(event.target.value);
    const changeSalaryHandler = (event) => setSalary(event.target.value);

    const changeValueHandler = (setValue) => (event) => {
        setValue(event.target.value)
    }
    const confirmErrorHandler = () => setError(EMPTY_ERROR);

    const submitHandler = (event) => {
        event.preventDefault();

        const validationError = getValidationError(name, salary);

        if (validationError) {
            setError(validationError);
            return;
        }

        if (props.onGetUser) {
            props.onGetUser({name, salary});
        }

        setName(DEFAULT_NAME);
        setSalary(DEFAULT_SALARY);
    }

    return (
        <>
            {
                error && <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={confirmErrorHandler}
                />
            }
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={changeNameHandler}
                    />

                    <label htmlFor="salary">Salary</label>
                    <input
                        id="salary"
                        type="number"
                        value={salary}
                        onChange={changeSalaryHandler}
                    />

                    <Button type="submit">Apply</Button>
                </form>
            </Card>
        </>
    );
}

export default UserForm;
