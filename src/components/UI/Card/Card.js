import styles from './Card.module.css';

const Card = (props) => {
    const { className, children } = props;
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );
}

export default Card;