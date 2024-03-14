import UsersList from '../components/UsersPage/UsersList/UsersList';
import { useContext, useEffect, useMemo } from 'react';
import UsersContext from '../components/UsersPage/contexts/UsersContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UsersHelper from '../helpers/usersHelper';

const UsersListPage = () => {
    const [searchParams] = useSearchParams();
    const { users, getUsers, deleteUser } = useContext(UsersContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!users.length) {
            getUsers();
        }
    }, [getUsers, users]);

    const search = searchParams.get('search');
    const filteredUsers = useMemo(
        () => UsersHelper.getFilteredUser(users, search),
        [users, search],
    );

    const editUserHandler = user => {
        navigate(`/form/${user.id}`);
    };

    const deleteUserHandler = user => {
        deleteUser(user);
    };

    return (
        <>
            <UsersList
                users={filteredUsers}
                onEditUser={editUserHandler}
                onDeleteUser={deleteUserHandler}
            />
        </>
    );
};

export default UsersListPage;
