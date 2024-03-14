import UserForm from '../components/UsersPage/UserForm/UserForm.useEffect';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import UsersContext from '../components/UsersPage/contexts/UsersContext';

const UserFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { users, updateUser, addUser } = useContext(UsersContext);

    const user = users.find(user => user.id === id);

    const getUserHandler = async formUser => {
        navigate('/list');

        if (id) {
            await updateUser({ ...user, ...formUser });
        } else {
            await addUser(formUser);
        }
    };

    return <UserForm user={user} onGetUser={getUserHandler} />;
};

export default UserFormPage;
