import classes from './SearchUser.module.css';
import Card from '../../UI/Card/Card';
import { useRef } from 'react';
import { useUsersSearchActions } from '../contexts/UserSearchContext';

const SearchUser = () => {
    console.log('SearchUser');

    const { setSearchedUser } = useUsersSearchActions();

    const lastChange = useRef();

    const changeHandler = event => {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchedUser(event.target.value);
        }, 500);
    };

    return (
        <Card className={classes.search}>
            <input onChange={changeHandler} />
        </Card>
    );
};

export default SearchUser;
