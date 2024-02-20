import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import ModelOverlay from "../ModelOverlay/ModelOverlay";

const ErrorModal = (props) => {
   return (
       <>
            {
                ReactDOM.createPortal(
                    <Backdrop onClick={props.onConfirm}/>,
                    document.getElementById('backdrop-root'),
                )
            }
            {
                ReactDOM.createPortal(
                    <ModelOverlay
                        title={props.title}
                        message={props.message}
                        onConfirm={props.onConfirm}
                    />,
                    document.getElementById('modal-root'),
                )
            }
        </>
   )
}

export default ErrorModal;