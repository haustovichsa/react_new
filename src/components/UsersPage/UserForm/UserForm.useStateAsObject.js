import { useState } from 'react';
import styles from './UserForm.module.css'
import Card from '../../../UI/Card/Card';
import Button from '../../../UI/Button/Button';
import ErrorModal from "../../../UI/ErrorModal/ErrorModal";
import { getValidationError } from './helpers/getValidationError';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const EMPTY_ERROR = null;

const UserForm = (props) => {
    const [userData, setUserData] = useState({
        name: DEFAULT_NAME,
        salary: DEFAULT_SALARY,
        error: EMPTY_ERROR,
    })

    const changeNameHandler = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    }
    const changeSalaryHandler = (event) => {
        setUserData((prevState) => ({
            ...prevState,
            salary: event.target.value,
        }));
    }
    const confirmErrorHandler = () => {
        setUserData((prevState) => ({
            ...prevState,
            error: EMPTY_ERROR,
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const {name, salary} = userData;
        const validationError = getValidationError(name, salary);

        if (validationError) {
            setUserData((prevState) => ({
                ...prevState,
                error: validationError,
            }))
            return;
        }

        props.onGetUser({ name, salary });

        setUserData((prevState) => ({
            ...prevState,
            salary: DEFAULT_SALARY,
            name: DEFAULT_NAME,
        }));
    }

    return (
        <>
            {
                userData.error && <ErrorModal
                    title={userData.error.title}
                    message={userData.error.message}
                    onConfirm={confirmErrorHandler}
                />
            }
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={userData.name}
                        onChange={changeNameHandler}
                    />

                    <label htmlFor="salary">Salary</label>
                    <input
                        id="salary"
                        type="number"
                        value={userData.salary}
                        onChange={changeSalaryHandler}
                    />

                    <Button type="submit">Apply</Button>
                </form>
            </Card>
        </>
    );
}

export default UserForm;