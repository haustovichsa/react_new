import { useDeferredValue } from 'react';
import styles from './UsersList.module.css';
import Card from '../../../UI/Card/Card';
import User from '../User/User';
import Button  from '../../../UI/Button/Button';

const UsersList = (props) => {
    const deferredUsers = useDeferredValue(props.users);
    return (
        <Card className={styles.users}>
            <ul>
                {
                    deferredUsers.map(user => (
                        <li key={user.id}>
                            <User name={user.name} salary={user.salary}/>
                            <div className={styles.buttons}>
                                <Button onClick={() => props.onEditUser(user)}> edit </Button>
                                <Button onClick={() => props.onDeleteUser(user)}> remove </Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Card>
    );
}

export default UsersList;