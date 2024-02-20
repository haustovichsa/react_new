import classes from './ModelOverlay.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const ModelOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
    );
};

export default ModelOverlay;
