import { useCallback, useState } from 'react';
import UsersApi from '../../../api/usersApi';
import UsersHelper from '../../../helpers/usersHelper';

export const USERS_API_ERROR = {
    GET_USERS: 'GET_USERS',
    ADD_USERS: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_USER: 'UPDATE_USER',
};

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUsers = useCallback(async () => {
        setIsLoading(true);

        await UsersApi.getUsers()
            .then(setUsers)
            .catch(() => setError(USERS_API_ERROR.GET_USERS))
            .finally(() => setIsLoading(false));
    }, []);

    const addUser = useCallback(async user => {
        setIsLoading(true);

        await UsersApi.addUser(user)
            .then(user => setUsers(users => UsersHelper.addUser(users, user)))
            .catch(() => setError(USERS_API_ERROR.ADD_USERS))
            .finally(() => setIsLoading(false));
    }, []);

    const updateUser = useCallback(async user => {
        setIsLoading(true);

        await UsersApi.updateUser(user)
            .then(item => setUsers(users => UsersHelper.updateUser(users, item)))
            .catch(() => setError(USERS_API_ERROR.UPDATE_USER))
            .finally(() => setIsLoading(false));
    }, []);

    const deleteUser = useCallback(async user => {
        setIsLoading(true);

        await UsersApi.deleteUser(user.id)
            .then(id => setUsers(users => UsersHelper.deleteUser(users, id)))
            .catch(() => setError(USERS_API_ERROR.DELETE_USER))
            .finally(() => setIsLoading(false));
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        users,
        isLoading,
        error,
        clearError,
        getUsers,
        addUser,
        updateUser,
        deleteUser,
    };
};

export default useUsers;
