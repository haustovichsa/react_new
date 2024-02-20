import { useState } from 'react';
import usersData from '../../data/users.json';
import SearchUser from './SearchUser/SearchUser';
import UsersList from './UsersList/UsersList';

const getFilteredUser = (users, searchedUser) =>
    searchedUser ? users.filter(user => user.name.includes(searchedUser)) : users;

const UsersPage = () => {
    const [users] = useState(usersData.users);
    const [searchedUser, setSearchedUser] = useState(null);

    const searchHandler = value => setSearchedUser(value);

    const filteredUsers = getFilteredUser(users, searchedUser);

    return (
        <>
            <SearchUser onSearch={searchHandler} />
            {filteredUsers.length > 0 && (
                <UsersList users={filteredUsers} onEditUser={() => {}} onDeleteUser={() => {}} />
            )}
        </>
    );
};

export default UsersPage;
