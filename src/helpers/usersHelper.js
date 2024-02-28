const addUser = (users, user) => {
    return [...users, user];
};

const updateUser = (users, user) => {
    return users.map(item => {
        if (user.id === item.id) {
            return user;
        }
        return item;
    });
};

const deleteUser = (users, id) => users.filter(item => item.id !== id);

const getFilteredUser = (users, searchedUser) =>
    searchedUser ? users.filter(user => user.name.includes(searchedUser)) : users;

const UsersHelper = {
    addUser,
    updateUser,
    deleteUser,
    getFilteredUser,
};

export default UsersHelper;
