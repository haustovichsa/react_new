import { useContext, useEffect, useMemo } from 'react';
import usersContext from '../components/UsersPage/contexts/UsersContext';
import UsersList from '../components/UsersPage/UsersList/UsersList';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UsersHelper from '../helpers/usersHelper';

const ListUsersPage = () => {
    const [searchParams] = useSearchParams();
    const { users, getUsers, deleteUser } = useContext(usersContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!users.length) {
            getUsers();
        }
    }, [getUsers, users]);

    const editUserHandler = user => {
        navigate(`/form/${user.id}`);
    };

    const deleteUserHandler = async user => {
        await deleteUser(user);
    };

    const search = searchParams.get('search');

    const filteredUsers = useMemo(
        () => UsersHelper.getFilteredUser(users, search),
        [users, search],
    );

    return (
        <UsersList
            users={filteredUsers}
            onEditUser={editUserHandler}
            onDeleteUser={deleteUserHandler}
        />
    );
};

export default ListUsersPage;
