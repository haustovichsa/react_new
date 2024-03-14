import MainNavigation from '../components/UI/MainNavigation/MainNavigation';
import { Outlet } from 'react-router-dom';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorModal from '../components/UI/ErrorModal/ErrorModal';
import { useContext } from 'react';
import UsersContext from '../components/UsersPage/contexts/UsersContext';
import { USERS_API_ERROR } from '../components/UsersPage/hooks/useUsers';

const Layout = () => {
    const { isLoading, error, clearError, getUsers } = useContext(UsersContext);

    const confirmErrorHandler = async () => {
        clearError();
        if (error === USERS_API_ERROR.GET_USERS) {
            await getUsers();
        }
    };

    return (
        <>
            <MainNavigation />
            {isLoading && <Spinner />}
            {error && (
                <ErrorModal title="api error" message={error} onConfirm={confirmErrorHandler} />
            )}
            <Outlet />
        </>
    );
};

export default Layout;
