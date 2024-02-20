import { useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';

const changeValueHandler = setValue => event => setValue(event.target.value);

const UserForm = props => {
    const [name, setName] = useState(DEFAULT_NAME);
    const [salary, setSalary] = useState(DEFAULT_SALARY);

    return (
        <Card className="input">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={changeValueHandler(setName)} />

            <label htmlFor="salary">Salary</label>
            <input
                id="salary"
                type="number"
                value={salary}
                onChange={changeValueHandler(setSalary)}
            />

            <Button type="submit">Apply</Button>
        </Card>
    );
};

export default UserForm;
