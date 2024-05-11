import UserForm from '../components/UsersPage/UserForm/UserForm.useEffect';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import usersContext from '../components/UsersPage/contexts/UsersContext';

const FormPage = () => {
    const { users, addUser, updateUser } = useContext(usersContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const editedUser = users.find(i => i.id === id);
    const getUserHandler = async user => {
        if (editedUser) {
            await updateUser({
                ...editedUser,
                ...user,
            });
        } else {
            await addUser(user);
        }
        navigate(`/list`);
    };

    return <UserForm user={editedUser} onGetUser={getUserHandler} />;
};

export default FormPage;
