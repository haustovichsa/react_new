const time = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const tryThrowError = () => {
    if (new Date().getSeconds() % 10 < 3) {
        throw new Error('Bad request');
    }
};

const timeWithError = async () => {
    await time(1);
    tryThrowError();
};

const generateId = () => Math.random().toString(16).slice(2);

const STORAGE_KEY = 'USER_DATA';
const getData = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const setData = data => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

export const getUsers = async () => {
    await timeWithError();
    return getData();
};

const getUserById = async id => {
    await timeWithError();
    return getData().find(item => item.id === id) || null;
};

const addUser = async ({ name, salary }) => {
    await timeWithError();

    const newUser = {
        id: generateId(),
        name,
        salary,
    };

    setData([...getData(), newUser]);

    return newUser;
};

const deleteUser = async id => {
    await timeWithError();
    const users = getData().filter(item => item.id !== id);
    setData(users);

    return id;
};

const updateUser = async ({ id, name, salary }) => {
    await timeWithError();

    setData(getData().map(item => (item.id === id ? { id, name, salary } : item)));
    return { id, name, salary };
};

const UsersApi = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
};

export default UsersApi;
