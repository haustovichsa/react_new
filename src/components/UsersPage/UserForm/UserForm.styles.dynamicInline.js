import { useState } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import * as ValidationHelper from './helpers/validationHelper';
import './UserForm.css';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const DEFAULT_IS_NAME_VALID = true;
const DEFAULT_IS_SALARY_VALID = true;

const changeValueHandler = setValue => event => setValue(event.target.value);

const invalidInput = {
    borderColor: 'red',
    background: 'pink',
};

const UserForm = props => {
    const [name, setName] = useState(DEFAULT_NAME);
    const [salary, setSalary] = useState(DEFAULT_SALARY);
    const [isNameValid, setNameIsValid] = useState(DEFAULT_IS_NAME_VALID);
    const [isSalaryValid, setSalaryIsValid] = useState(DEFAULT_IS_SALARY_VALID);

    const blurNameHandler = () => setNameIsValid(ValidationHelper.isNameValid(name));
    const blurSalaryHandler = () => setSalaryIsValid(ValidationHelper.isSalaryValid(salary));

    const submitHandler = event => {
        event.preventDefault();

        if (props.onGetUser) {
            props.onGetUser({ name, salary });
        }

        setName(DEFAULT_NAME);
        setSalary(DEFAULT_SALARY);
    };

    const isFormValid = ValidationHelper.getIsFormValid(name, salary);

    return (
        <Card className="input">
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={changeValueHandler(setName)}
                    onBlur={blurNameHandler}
                    style={isNameValid ? {} : invalidInput}
                />

                <label htmlFor="salary">Salary</label>
                <input
                    id="salary"
                    type="number"
                    value={salary}
                    onChange={changeValueHandler(setSalary)}
                    onBlur={blurSalaryHandler}
                    style={isSalaryValid ? {} : invalidInput}
                />

                <Button type="submit" disabled={!isFormValid}>
                    Apply
                </Button>
            </form>
        </Card>
    );
};

export default UserForm;
