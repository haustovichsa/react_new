import classes from './UsersList.module.css';
import Card from '../../UI/Card/Card';
import User from '../User/User';
import Button from '../../UI/Button/Button';

const UsersList = props => {
    /*useEffect(() => {
        return () => {
            console.log('my UsersList');
        };
    }, []);*/

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
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
