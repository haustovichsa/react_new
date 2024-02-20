import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button {...props} disabled={props.disabled} className={styles.button}>
            {props.children}
        </button>
    )
};

export default Button;