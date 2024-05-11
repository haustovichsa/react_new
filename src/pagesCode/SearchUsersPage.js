import SearchUser from '../components/UsersPage/SearchUser/SearchUser';
import Button from '../components/UI/Button/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchUsersPage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();

    const clickSearchUsersHandler = () => {
        navigate(`/list?search=${value}`);
    };

    return (
        <SearchUser onSearch={setValue}>
            <Button onClick={clickSearchUsersHandler}>Search users</Button>
        </SearchUser>
    );
};

export default SearchUsersPage;
