import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

/*
<ul className={classes.list}>
    <li>
        <Link to="/list">list</Link>
    </li>
    <li>
        <Link to="/form">form</Link>
    </li>
    <li>
        <Link to="/search">search</Link>
    </li>
</ul>
* */

const items = [
    { to: '/list', label: 'list' },
    { to: '/form', label: 'form' },
    { to: '/search', label: 'search' },
];

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {items.map(({ to, label }) => (
                        <li key={label}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
