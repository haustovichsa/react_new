import styles from './ModelOverlay.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const ModelOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
    );
}

export default ModelOverlay;