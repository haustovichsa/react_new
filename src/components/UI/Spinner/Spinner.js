import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Spinner.module.css';

const Spinner = (props) => {
    const { onConfirm } = props;

    return (
        <>
            {
                ReactDOM.createPortal(
                    <Backdrop onConfirm={onConfirm}/>,
                    document.getElementById('backdrop-root')
                )
            }
            {
                ReactDOM.createPortal(
                    <div className={styles.loader}></div>,
                    document.getElementById('spinner-root')
                )

            }
        </>
    );
}

export default Spinner;