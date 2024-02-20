import { useState } from 'react';
import usersData from '../../data/users.json';
import UserFormUseState from './UserForm/UserForm.useState';
import SearchUser from './SearchUser/SearchUser';
import UsersList from './UsersList/UsersList';
import { generateId } from '../../helpers/generateId';

const getFilteredUser = (users, searchedUser) =>
    searchedUser ? users.filter(user => user.name.includes(searchedUser)) : users;

const addUser = user => users => users.concat({ id: generateId(), ...user });

const deleteUser = user => users => users.filter(i => i.id !== user.id);

const UsersPage = () => {
    const [users, setUsers] = useState(usersData.users);
    const [searchedUser, setSearchedUser] = useState(null);

    const searchHandler = value => setSearchedUser(value);

    const getUserHandler = user => setUsers(addUser(user));

    const editUserHandler = user => {}; // FIXME: not implemented yet

    const deleteUserHandler = user => setUsers(deleteUser(user));

    const filteredUsers = getFilteredUser(users, searchedUser);

    return (
        <>
            <UserFormUseState onGetUser={getUserHandler} />
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
