import ReactDOM from 'react-dom/client';
import './index.css';

// default
// import App from './App';
// 8_Syntax
// import App from './components/SyntaxComponent/SyntaxComponent';
// 9_state
// import App from './components/UsersPage/UserForm/UserForm.useState';
// import App from './components/UsersPage/UserForm/UserForm.useStateAsObject';
// import App from './components/UsersPage/UserForm/UserForm.sharedHandler';
// import App from './components/UsersPage/UsersPage.computed';
// 10_form
// import App from './components/UsersPage/UserForm/UserForm.form';
// import App from './components/UsersPage/UserForm/UserForm.FormData';
// 11_share_data_between_components
// import App from './components/UsersPage/UsersPage.dataFlow';
// 12_styling
// import App from './components/UsersPage/UserForm/UserForm.styles.dynamicInline';
// import App from './components/UsersPage/UserForm/UserForm.styles.dynamicClasses';
// import App from './components/UsersPage/UserForm/UserForm.styles.styled';
// import App from './components/UsersPage/UserForm/UserForm.styles.modules';
// 13_portal
// import App from './components/UsersPage/UserForm/UserForm.portal';
// 14_useRef
// import App from './components/UsersPage/UserForm/UserForm.useRef';
// import App from './components/UsersPage/UserForm/UserForm.useRef.forward';
// 15_useEffect
// import App from './components/UsersPage/UserForm/UserForm.useEffect';
// import App from './components/UsersPage/UsersPage.useEffect';
// 16_useReducer
// import App from './components/UsersPage/UserForm/UserForm.useReducer';
// 17_async
// import App from './components/UsersPage/UsersPage.async';
// 18_useMemo
// import App from './components/UsersPage/UsersPage.useMemo';
// 19_useMemo
// import App from './components/UsersPage/UsersPage.useCallback';
// 20_customHook
// import App from './components/UsersPage/UsersPage.customHook';
// code
// import App from './components/UsersPage/UsersPage.async.code';
// TODO: page list
// import App from './components/UsersPage/UsersPage.usersList';
// TODO: unit tests
// ...
// 21_context
// import App from './components/UsersPage/contexts/context.explanation';
// import App from './components/UsersPage/UsersPage.context';
// import App from './components/UsersPage/UsersPage.context.code'; // TODO: delete
// import { UsersContextProvider } from './components/UsersPage/contexts/UsersContext';
// import { UserSearchContextProvider } from './components/UsersPage/contexts/UserSearchContext';
// import { UsersListContextProvider } from './components/UsersPage/contexts/UsersListContext'; // TODO: REDUX
// TODO: REDUX
import App from './components/UsersPage/UsersPage.context';
import { Provider } from 'react-redux';
import { store as baseStore } from './store/base/store';
// 22_react_router
// 22_react_router
/*const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <UsersListPage /> },
            { path: '/list', element: <UsersListPage /> },
            { path: '/form', element: <UserFormPage /> },
            { path: '/form/:id', element: <UserFormPage /> },
            { path: '/search', element: <UserSearchPage /> },
        ],
    },
]);*/
/*
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <ListUsersPage /> },
            { path: 'list', element: <ListUsersPage /> },
            { path: 'form', element: <FormUserPage /> },
            { path: 'form/:id', element: <FormUserPage /> },
            { path: 'search', element: <SearchUsersPage /> },
        ],
    },
]);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

root.render(
    <Provider store={baseStore}>
        <App />
    </Provider>,
);

/*root.render(
    <UsersContextProvider>
        <UsersListContextProvider>
            <UserSearchContextProvider>
                <App />
            </UserSearchContextProvider>
        </UsersListContextProvider>
    </UsersContextProvider>,
);*/
/*root.render(
    <UsersContextProvider>
        <UsersContext>{
            ctx => <App ctx={ctx} />
        }</UsersContext>
    </UsersContextProvider>,
);*/
/*
root.render(
    <UsersContextProvider>
        <RouterProvider router={router} />{' '}
    </UsersContextProvider>,
);
*/
/*root.render(
    <UsersContextProvider>
        <RouterProvider router={router} />
    </UsersContextProvider>,
);*/



