import React from "react";
import s from "./AddingPost.module.css";
import { Field, reduxForm, reset } from 'redux-form';
import { requiredField } from "../../../../validators/validators";


const AddingPostForm = (props) => {
    //console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
            
            <div>
                <Field name={"textArea"} validate={[requiredField]} component={"textarea"} placeholder={"Start to write..."} />
            </div>
            <div>
                <button type="submit" disabled={props.valid ? "" : "disabled"}>Add Post</button>
            </div>

        </form>
    );
}

const AddingPostRedux = reduxForm({form: 'post'}) (AddingPostForm);

const AddingPost = React.memo((props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.textArea);
        props.reset('post');
    }

    return (
        <div className={s.content}>
            <h3>My Posts:</h3>
            <AddingPostRedux onSubmit={onSubmit}/>
        </div>
    );
});

export default AddingPost;