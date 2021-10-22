import { connect } from 'react-redux';
import { compose } from 'redux';
import { reset } from 'redux-form';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageAC } from '../../redux/Dialogs-reducer';
import Dialogs from './Dialogs';


const mapStatetoProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageAC: (messageBody) => {
            dispatch(sendMessageAC(messageBody));
        },
        reset: (name_form) => {
            dispatch(reset(name_form));
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);  // hoc
// const DialogsContainer = connect(mapStatetoProps, mapDispatchToProps) (AuthRedirectComponent);

export default compose(
    connect(mapStatetoProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs);