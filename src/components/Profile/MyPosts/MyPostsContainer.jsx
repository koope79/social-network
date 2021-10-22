//import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addPostAC, addLikeActionCreator, setPostsActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPostAC: (formData) => {
      dispatch(addPostAC(formData));
    },
    addLike: (id, changes) => {
      dispatch(addLikeActionCreator(id, changes));
    },
    setPosts: (posts) => {
      dispatch(setPostsActionCreator(posts));
    },
    reset: (name_field) => {
      dispatch(reset(name_field));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer; 