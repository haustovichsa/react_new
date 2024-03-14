import React, { useCallback, useEffect, useMemo, useState } from 'react';
import UserForm from './UserForm/UserForm.customHook';
import SearchUser from './SearchUser/SearchUser';
import UsersList from './UsersList/UsersList';
import UsersHelper from '../../helpers/usersHelper';
import Spinner from '../UI/Spinner/Spinner';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import { USERS_API_ERROR } from './hooks/useUsers';

const UsersPage = props => {
    const {
        ctx: { users, error, isLoading, clearError, getUsers, addUser, updateUser, deleteUser },
    } = props;

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
