import React from 'react';
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
// import App from './components/UsersPage/UsersPage.context.code';
// import { UsersContextProvider } from './components/UsersPage/contexts/UsersContext';
// 22_react_router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersListPage from './pages/UsersListPage';
import UserFormPage from './pages/UserFormPage';
import UserSearchPage from './pages/UserSearchPage';
import { UsersContextProvider } from './components/UsersPage/contexts/UsersContext';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
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
]);
/*
const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<UsersListPage />} />
        <Route path="/list" element={<UsersListPage />} />
        <Route path="/form" element={<UserFormPage />} />
        <Route path="/search" element={<UserSearchPage />} />
    </Route>,
);
const routerV2 = createBrowserRouter(routeDefinitions);
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
/*root.render(
    <UsersContextProvider>
        <App />
    </UsersContextProvider>,
);*/
/*root.render(
    <UsersContextProvider>
        <UsersContext>{
            ctx => <App ctx={ctx} />
        }</UsersContext>
    </UsersContextProvider>,
);*/
root.render(
    <UsersContextProvider>
        <RouterProvider router={router} />
    </UsersContextProvider>,
);
