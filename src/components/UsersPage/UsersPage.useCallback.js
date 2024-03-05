import { useCallback, useEffect, useMemo, useState } from 'react';
import UserForm from './UserForm/UserForm.memo';
import SearchUser from './SearchUser/SearchUser';
import UsersList from './UsersList/UsersList';
import UsersApi from '../../api/usersApi';
import UsersHelper from '../../helpers/usersHelper';
import Spinner from '../UI/Spinner/Spinner';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

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

    const getUsers = useCallback(() => {
        setIsLoading(true);

        UsersApi.getUsers()
            .then(setUsers)
            .catch(() => setError(USERS_API_ERROR.GET_USERS))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const addUser = useCallback(user => {
        setIsLoading(true);

        UsersApi.addUser(user)
            .then(user => setUsers(users => UsersHelper.addUser(users, user)))
            .catch(() => setError(USERS_API_ERROR.ADD_USERS))
            .finally(() => setIsLoading(false));
    }, []);

    const updateUser = useCallback(user => {
        setIsLoading(true);

        UsersApi.updateUser(user)
            .then(item => setUsers(users => UsersHelper.updateUser(users, item)))
            .catch(() => setError(USERS_API_ERROR.UPDATE_USER))
            .finally(() => setIsLoading(false));
    }, []);

    const deleteUserHandler = useCallback(user => {
        setIsLoading(true);

        UsersApi.deleteUser(user.id)
            .then(id => setUsers(users => UsersHelper.deleteUser(users, id)))
            .catch(() => setError(USERS_API_ERROR.DELETE_USER))
            .finally(() => setIsLoading(false));
    }, []);

    const getUserHandler = useCallback(
        async user => {
            setEditedUser(null);

            if (editedUser) {
                await updateUser({ ...editedUser, ...user });
            } else {
                await addUser(user);
            }
        },
        [editedUser, updateUser, addUser],
    );

    const editUserHandler = user => {
        setEditedUser(user);
    };

    const confirmErrorHandler = async () => {
        setError(null);
        if (error === USERS_API_ERROR.GET_USERS) {
            await getUsers();
        }
    };

    const searchHandler = value => setSearchedUser(value);

    const filteredUsers = useMemo(
        () => UsersHelper.getFilteredUser(users, searchedUser),
        [users, searchedUser],
    );

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
