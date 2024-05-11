import React from 'react';
import UserForm from './UserForm/UserForm.context';
import SearchUser from './SearchUser/SearchUser.context';
import UsersList from './UsersList/UsersList.context';
import Spinner from '../UI/Spinner/Spinner';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import { USERS_API_ERROR } from './hooks/useUsers';
import { useUsersActions, useUsersState } from './contexts/UsersContext';

const ErrorWithLoading = () => {
    const { error, isLoading } = useUsersState();
    const { clearError, getUsers } = useUsersActions();

    const confirmErrorHandler = async () => {
        clearError();
        if (error === USERS_API_ERROR.GET_USERS) {
            await getUsers();
        }
    };

    return (
        <>
            {isLoading && <Spinner />}
            {error && (
                <ErrorModal title="api error" message={error} onConfirm={confirmErrorHandler} />
            )}
        </>
    );
};

const UsersPage = () => {
    console.log('UsersPage');

    return (
        <>
            <ErrorWithLoading />
            <UserForm />
            <SearchUser />
            <UsersList />
        </>
    );
};

export default UsersPage;
