import { useState } from 'react';
import UserForm from './UserForm/UserForm.usersList';
import Button from '../UI/Button/Button';
import { generateId } from '../../helpers/generateId';
import Input from '../UI/Input/Input';

const DEFAULT_USERS = [
    {
        id: '111',
        name: 'test1',
        salary: 10,
        type: 'typeA',
    },
    {
        id: '222',
        name: 'test2',
        salary: 20,
        type: 'typeB',
    },
    {
        id: '333',
        name: 'test3',
        salary: 30,
        type: 'typeA',
    },
    {
        id: '444',
        name: 'test4',
        salary: 40,
        type: 'typeB',
    },
];

const getErrorMsg = (errors, userId, field) => {
    const error = errors.find(item => item.userId === userId);
    if (error) {
        return error[field];
    }
    return undefined;
};

const UsersPage = () => {
    const [users, setUsers] = useState(DEFAULT_USERS);
    const [errors, setErrors] = useState([]);
    const [type, setType] = useState('');
    const [selectedType, setSelectedType] = useState('typeA');

    const changeNameHandler = (e, id) => {
        setUsers(prevUsers => {
            return prevUsers.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        name: e.target.value,
                    };
                }
                return user;
            });
        });
    };

    const changeSalaryHandler = (e, id) => {
        setUsers(prevUsers => {
            return prevUsers.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        salary: e.target.value,
                    };
                }
                return user;
            });
        });
    };

    const addNewUserHandler = () => {
        const emptyUser = {
            id: generateId(),
            name: '',
            salary: '0',
            type: selectedType,
        };
        setUsers(prevUsers => [...prevUsers, emptyUser]);
    };

    const deleteUserHandler = id => {
        setUsers(prevState => prevState.filter(user => user.id !== id));
    };

    const validate = () => {
        const isNameValid = value => (value ?? '').trim().length > 0;

        const isSalaryValid = value => String(value ?? '').trim().length > 0 && Number(value) > 0;

        const validatedUsers = users.map(user => ({
            userId: user.id,
            nameError: isNameValid(user.name) ? undefined : 'name is invalid',
            salaryError: isSalaryValid(user.salary) ? undefined : 'salary is invalid',
        }));

        setErrors(validatedUsers);

        const isInvalid = validatedUsers.some(item => item.nameError || item.salaryError);
        return !isInvalid;
    };

    const submitHandler = e => {
        e.preventDefault();

        const isValid = validate();

        if (isValid) {
            alert(JSON.stringify(users, null, 4));
        }
    };

    const selectTypeHandler = () => {
        setSelectedType(type);
    };

    const _users = users.filter(user => user.type === selectedType);

    return (
        <form onSubmit={submitHandler}>
            <Input
                label="type"
                id="type"
                type="text"
                value={type}
                onBlur={selectTypeHandler}
                onChange={e => setType(e.target.value)}
            />

            {_users.map(user => (
                <UserForm
                    key={user.id}
                    onChangeName={e => changeNameHandler(e, user.id)}
                    onChangeSalary={e => changeSalaryHandler(e, user.id)}
                    onDeleteUser={() => deleteUserHandler(user.id)}
                    name={user.name}
                    salary={user.salary}
                    nameError={getErrorMsg(errors, user.id, 'nameError')}
                    salaryError={getErrorMsg(errors, user.id, 'salaryError')}
                />
            ))}
            <Button type="button" onClick={addNewUserHandler}>
                Add new
            </Button>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default UsersPage;
