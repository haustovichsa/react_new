import React, { useEffect } from 'react';
import UserForm from './UserForm/UserForm.redux';
import SearchUser from './SearchUser/SearchUser.redux';
import UsersList from './UsersList/UsersList.redux';
import Spinner from '../UI/Spinner/Spinner';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import { USERS_API_ERROR } from './hooks/useUsers';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from '../../store/base/users/selectors';
import { cleanError, getUsersAsync } from '../../store/base/users/actions';

const ErrorWithLoading = () => {
    const dispatch = useDispatch();
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);

    const confirmErrorHandler = () => {
        dispatch(cleanError());
        if (error === USERS_API_ERROR.GET_USERS) {
            dispatch(getUsersAsync());
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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);

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
