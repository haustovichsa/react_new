import classes from './SearchUser.module.css';
import Card from '../../UI/Card/Card';
import { useRef } from 'react';

const SearchUser = props => {
    const lastChange = useRef();

    const { value } = props;

    const changeHandler = event => {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            props.onSearch(event.target.value);
        }, 500);
    };

    return (
        <Card className={classes.search}>
            <input value={value} onChange={changeHandler} />
            {props.children}
        </Card>
    );
};

export default SearchUser;
