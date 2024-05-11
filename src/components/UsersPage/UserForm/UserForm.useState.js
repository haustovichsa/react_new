import { useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';

const UserFormUseState = props => {
    const [name, setName] = useState(DEFAULT_NAME);
    const [salary, setSalary] = useState(DEFAULT_SALARY);

    const changeNameHandler = event => {
        setName(event.target.value);
    };

    const changeSalaryHandler = event => setSalary(event.target.value);

    return (
        <Card className="input">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={changeNameHandler} />

            <label htmlFor="salary">Salary</label>
            <input id="salary" type="number" value={salary} onChange={changeSalaryHandler} />

            <Button type="submit">Apply</Button>
        </Card>
    );
};

export default UserFormUseState;
