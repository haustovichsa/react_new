import classes from './UsersList.module.css';
import Card from '../../UI/Card/Card';
import User from '../User/User';
import Button from '../../UI/Button/Button';
import { useMemo } from 'react';
import UsersHelper from '../../../helpers/usersHelper';
import { useUsersState } from '../contexts/UsersContext';
import { useUsersListActions } from '../contexts/UsersListContext';
import { useUsersSearchState } from '../contexts/UserSearchContext';

const UsersList = () => {
    console.log('UsersList');

    const { searchedUser } = useUsersSearchState();
    const { setEditedUser, deleteUser } = useUsersListActions();
    const { users } = useUsersState();

    const filteredUsers = useMemo(
        () => UsersHelper.getFilteredUser(users, searchedUser),
        [users, searchedUser],
    );

    return (
        <Card className={classes.users}>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <User name={user.name} salary={user.salary} />
                        <div className={classes.buttons}>
                            <Button onClick={() => setEditedUser(user)}> edit </Button>
                            <Button onClick={() => deleteUser(user)}> remove </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
