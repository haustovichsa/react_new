import styles from './SearchUser.module.css';
import Card from '../../../UI/Card/Card';

// TODO: need to fix page that calls this component
const SearchUser = (props) => {
    // const [searchValue, setSearchValue] = useState('');

    const { value } = props;

    // useEffect(() => setSearchValue(value), [value])

    const changeHandler = (event) => {
        props.onSearch(event.target.value);
    }

    return (
        <Card className={styles.search}>
            <input value={value} onChange={changeHandler}/>
            {
                props.children
            }
        </Card>
    );
}

export default SearchUser;