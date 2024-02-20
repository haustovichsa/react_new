import classes from './Button.module.css';

const Button = props => {
    return (
        <button {...props} disabled={props.disabled} className={classes.button}>
            {props.children}
        </button>
    );
};

export default Button;
