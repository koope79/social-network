import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, man", likes: 5, changes: 0 },
                { id: 2, message: "Yooooo", likes: 10, changes: 0 },
                { id: 3, message: "what's up", likes: 25, changes: 0 },
                { id: 4, message: "fuf", likes: 1, changes: 0 }
            ],
            newPostText: "Hello"
        },
        dialogsPage: {
            dialogsData: [
                { id: "1", name: "Yaroslav" },
                { id: "2", name: "Sasha" },
                { id: "3", name: "Alena" },
                { id: "4", name: "Kirill" }
            ],
            messagesData: [
                { id: "1", text: "Hi" },
                { id: "2", text: "Yoooo" },
                { id: "3", text: "How are u?" }
            ],
            newMessageBody: ""
        }
    },
    _rerenderTree() {
        console.log('func not changed');   // функция, что будет перезаписана с помощью метода subscribe(observer).
    },

    subscribe(observer) {
        this._rerenderTree = observer;
    },
    getState() {
        return this._state;
    },

    // _addPost() {

    //     let newPost = {
    //         id: this._state.profilePage.postsData[0].id + 1,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     };

    //     this._state.profilePage.postsData.unshift(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._rerenderTree(this._state);

    // },
    // _updatePostText(text) {
    //     this._state.profilePage.newPostText = text;
    //     this._rerenderTree(this._state);
    // },

    
    // addLike(idLike, changesMark) {
    //     let currentObj = this._state.profilePage.postsData.find(e => e.id == idLike);
    //     if (changesMark === 0) {
    //         currentObj.likes = currentObj.likes + 1;
    //         currentObj.changes = 1;
    //     }
    //     else if (changesMark === 1) {
    //         currentObj.likes = currentObj.likes - 1;
    //         currentObj.changes = 0;
    //     }
    //     this._rerenderTree(this._state);
    // },


    dispatch(action) {  //{ type: '', ..?. }

        this._state.profilePage = profileReducer(this._state.profilePage, action);      //  reducer'ы
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._rerenderTree(this._state);        // перерисовка по новому state'у

    }
}

export default store;

window.store = store;