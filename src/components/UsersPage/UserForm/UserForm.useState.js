import { useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import { getIsFormValid } from './helpers/validationHelper';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';

const UserForm = props => {
    const [name, setName] = useState(props.name || DEFAULT_NAME);
    const [salary, setSalary] = useState(props.salary || DEFAULT_SALARY);

    const changeNameHandler = event => setName(event.target.value);

    const changeSalaryHandler = event => setSalary(event.target.value);

    const submitHandler = event => {
        event.preventDefault();

        const isFormValid = getIsFormValid(name, salary);

        if (!isFormValid) {
            return;
        }

        if (props.onGetUser) {
            props.onGetUser({ name, salary });
        }

        setName(DEFAULT_NAME);
        setSalary(DEFAULT_SALARY);
    };

    return (
        <Card className="input">
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={changeNameHandler} />

                <label htmlFor="salary">Salary</label>
                <input id="salary" type="number" value={salary} onChange={changeSalaryHandler} />

                <Button type="submit">Apply</Button>
            </form>
        </Card>
    );
};

export default UserForm;
