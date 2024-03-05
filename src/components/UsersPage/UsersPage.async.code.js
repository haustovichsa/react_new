import { useEffect, useState } from 'react';
import UserForm from './UserForm/UserForm.async';
import SearchUser from './SearchUser/SearchUser';
import UsersList from './UsersList/UsersList';
import UsersHelper from '../../helpers/usersHelper';
import Spinner from '../UI/Spinner/Spinner';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import UsersApi from '../../api/usersApi';

export const USERS_API_ERROR = {
    GET_USERS: 'GET_USERS',
    ADD_USERS: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_USER: 'UPDATE_USER',
};

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchedUser, setSearchedUser] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    const getUsers = async () => {
        setIsLoading(true);
        try {
            const usersApi = await UsersApi.getUsers();
            setUsers(usersApi);
        } catch (err) {
            setError(USERS_API_ERROR.GET_USERS);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteUser = async id => {
        setIsLoading(true);
        try {
            await UsersApi.deleteUser(id);
            const stateUsers = UsersHelper.deleteUser(users, id);
            setUsers(stateUsers);
        } catch (err) {
            setError(USERS_API_ERROR.DELETE_USER);
        } finally {
            setIsLoading(false);
        }
    };

    const addUser = async user => {
        setIsLoading(true);
        try {
            const newUser = await UsersApi.addUser(user);
            const stateUsers = UsersHelper.addUser(users, newUser);
            setUsers(stateUsers);
        } catch (err) {
            setError(USERS_API_ERROR.ADD_USERS);
        } finally {
            setIsLoading(false);
        }
    };

    const updateUser = async user => {
        setIsLoading(true);
        try {
            const updatedUser = await UsersApi.updateUser(user);
            const stateUsers = UsersHelper.updateUser(users, updatedUser);
            setUsers(stateUsers);
        } catch (err) {
            setError(USERS_API_ERROR.ADD_USERS);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const getUserHandler = user => {
        if (editedUser) {
            updateUser({ id: editedUser.id, ...user });
        } else {
            addUser(user);
        }
    };

    const editUserHandler = user => {
        setEditedUser(user);
    };

    const deleteUserHandler = user => {
        deleteUser(user.id);
    };

    const confirmErrorHandler = async () => {
        const _error = error;
        setError(null);
        if (_error === USERS_API_ERROR.GET_USERS) {
            await getUsers();
        }
    };

    const searchHandler = value => setSearchedUser(value);

    const filteredUsers = UsersHelper.getFilteredUser(users, searchedUser);

    return (
        <>
            {isLoading && <Spinner />}
            {error && (
                <ErrorModal title="api error" message={error} onConfirm={confirmErrorHandler} />
            )}
            <UserForm onGetUser={getUserHandler} user={editedUser} />
            <SearchUser onSearch={searchHandler} />
            {filteredUsers.length > 0 && (
                <UsersList
                    users={filteredUsers}
                    onEditUser={editUserHandler}
                    onDeleteUser={deleteUserHandler}
                />
            )}
        </>
    );
};

export default UsersPage;
