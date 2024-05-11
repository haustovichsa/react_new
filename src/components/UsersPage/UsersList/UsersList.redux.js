import classes from './UsersList.module.css';
import Card from '../../UI/Card/Card';
import User from '../User/User';
import Button from '../../UI/Button/Button';
import { useMemo } from 'react';
import UsersHelper from '../../../helpers/usersHelper';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedUser } from '../../../store/base/usersSearch/selectors';
import { getUsers } from '../../../store/base/users/selectors';
import { setEditedUser } from '../../../store/base/usersList/actions';
import { deleteUserAsync } from '../../../store/base/users/actions';

const UsersList = () => {
    console.log('UsersList');

    const dispatch = useDispatch();

    const users = useSelector(getUsers);
    const searchedUser = useSelector(getSearchedUser);

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
                            <Button onClick={() => dispatch(setEditedUser(user))}> edit </Button>
                            <Button onClick={() => dispatch(deleteUserAsync(user.id))}>
                                {' '}
                                remove{' '}
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;
