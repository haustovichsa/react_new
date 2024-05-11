import MainNavigation from '../components/UI/MainNavigation/MainNavigation';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import usersContext from '../components/UsersPage/contexts/UsersContext';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorModal from '../components/UI/ErrorModal/ErrorModal';
import { USERS_API_ERROR } from '../components/UsersPage/hooks/useUsers';

const Layout = () => {
    const { isLoading, error, clearError, getUsers } = useContext(usersContext);

    const confirmErrorHandler = async () => {
        clearError();
        if (error === USERS_API_ERROR.GET_USERS) {
            await getUsers();
        }
    };

    return (
        <>
            {error && (
                <ErrorModal title="api error" message={error} onConfirm={confirmErrorHandler} />
            )}
            {isLoading && <Spinner />}
            <MainNavigation />
            <Outlet />
        </>
    );
};

export default Layout;
