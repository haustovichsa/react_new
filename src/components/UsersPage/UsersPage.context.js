import React, { useCallback, useContext, useEffect, useState } from 'react';
import UserForm from './UserForm/UserForm.customHook';
import SearchUser from './SearchUser/SearchUser';
import UsersList from './UsersList/UsersList.context';
import Spinner from '../UI/Spinner/Spinner';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import { USERS_API_ERROR } from './hooks/useUsers';
import UsersContext from './contexts/UsersContext';

const UsersPage = () => {
    const { users, error, isLoading, clearError, getUsers, addUser, updateUser, deleteUser } =
        useContext(UsersContext);

    const [searchedUser, setSearchedUser] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

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

    const deleteUserHandler = user => {
        deleteUser(user);
    };

    const confirmErrorHandler = async () => {
        clearError();
        if (error === USERS_API_ERROR.GET_USERS) {
            await getUsers();
        }
    };

    const searchHandler = value => setSearchedUser(value);

    return (
        <>
            {isLoading && <Spinner />}
            {error && (
                <ErrorModal title="api error" message={error} onConfirm={confirmErrorHandler} />
            )}
            <UserForm onGetUser={getUserHandler} user={editedUser} />
            <SearchUser onSearch={searchHandler} />

            <UsersList
                searchedUser={searchedUser}
                onEditUser={editUserHandler}
                onDeleteUser={deleteUserHandler}
            />
        </>
    );
};

export default UsersPage;
