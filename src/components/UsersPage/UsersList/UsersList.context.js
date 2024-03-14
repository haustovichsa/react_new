import classes from './UsersList.module.css';
import Card from '../../UI/Card/Card';
import User from '../User/User';
import Button from '../../UI/Button/Button';
import { useContext, useMemo } from 'react';
import UsersContext from '../contexts/UsersContext';
import UsersHelper from '../../../helpers/usersHelper';

const UsersList = props => {
    const { users } = useContext(UsersContext);

    const filteredUsers = useMemo(
        () => UsersHelper.getFilteredUser(users, props.searchedUser),
        [users, props.searchedUser],
    );

    return (
        <Card className={classes.users}>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <User name={user.name} salary={user.salary} />
                        <div className={classes.buttons}>
                            <Button onClick={() => props.onEditUser(user)}> edit </Button>
                            <Button onClick={() => props.onDeleteUser(user)}> remove </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
