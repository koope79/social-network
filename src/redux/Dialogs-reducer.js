const SEND_MESSAGE_REDX = 'react-1/dialogs/SEND_MESSAGE_REDX';

let initialState = {
    dialogsData: [
        { id: 1, name: "Yaroslav" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Alena" },
        { id: 4, name: "Kirill" }
    ],
    messagesData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "Yoooo" },
        { id: 3, text: "How are u?" }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE_REDX: {
            let lastId = state.messagesData[Object.keys(state.messagesData)[Object.keys(state.messagesData).length - 1]];
            return {
                ...state,
                messagesData: [...state.messagesData, {id: lastId + 1, text: action.messageBody}]
            }
        }
        default:
            return state;
    }
}

export const sendMessageAC = (messageBody) => {
    return {
        type: SEND_MESSAGE_REDX,
        messageBody
    }
}

export default dialogsReducer;