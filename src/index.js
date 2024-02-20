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
import App from './components/UsersPage/UserForm/UserForm.sharedHandler';
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
//import App from './components/UsersPage/UserForm/UserForm.portal';

// 14_useRef
// import App from './components/UsersPage/UserForm/UserForm.useRef';
// import App from './components/UsersPage/UserForm/UserForm.useRef.forward';

// 15_useEffect
// import App from './components/UsersPage/UserForm/UserForm.useEffect';
// import App from './components/UsersPage/UsersPage.useEffect';

// 16_useReducer
// import App from './components/UsersPage/UserForm/UserForm.useReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
