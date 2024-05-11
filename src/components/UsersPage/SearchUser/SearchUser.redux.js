import classes from './SearchUser.module.css';
import Card from '../../UI/Card/Card';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchedUser } from '../../../store/base/usersSearch/actions';

const SearchUser = () => {
    console.log('SearchUser');

    const dispatch = useDispatch();

    const lastChange = useRef();

    const changeHandler = event => {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            dispatch(setSearchedUser(event.target.value));
        }, 500);
    };

    return (
        <Card className={classes.search}>
            <input onChange={changeHandler} />
        </Card>
    );
};

export default SearchUser;
