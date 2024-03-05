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

const getSlowFilteredUsers = (users, searchedUser) => {
    const fibonacci = n => {
        return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    };
    console.log('fibonacci 1');
    fibonacci(42);
    console.log('fibonacci 2');

    return getFilteredUser(users, searchedUser);
};

const UsersHelper = {
    addUser,
    updateUser,
    deleteUser,
    getFilteredUser,
    getSlowFilteredUsers,
};

export default UsersHelper;
