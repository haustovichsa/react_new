import { useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const initialState = {
    name: '',
    salary: '0',
};

const UserForm = () => {
    const [userData, setUserData] = useState(initialState);

    const changeNameHandler = event => {
        setUserData(prevState => ({
            ...prevState,
            name: event.target.value,
        }));
    };
    const changeSalaryHandler = event => {
        setUserData(prevState => ({
            ...prevState,
            salary: event.target.value,
        }));
    };

    return (
        <Card className="input">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={userData.name} onChange={changeNameHandler} />

            <label htmlFor="salary">Salary</label>
            <input
                id="salary"
                type="number"
                value={userData.salary}
                onChange={changeSalaryHandler}
            />

            <Button type="submit">Apply</Button>
        </Card>
    );
};

export default UserForm;
