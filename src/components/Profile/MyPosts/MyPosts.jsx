import React from 'react';
import AddingPost from './AddingPost/AddingPost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let insObj = [
    { id: 4, message: "Hi, man", likes: 5, changes: 0 },
    { id: 3, message: "Yooooo", likes: 10, changes: 0 },
    { id: 2, message: "what's up", likes: 25, changes: 0 },
    { id: 1, message: "fuf", likes: 1, changes: 0 }
  ];

  if (props.postsData.length === 0) {
    props.setPosts(insObj);
  }

  let postElement =
    props.postsData.map((p) => (<Post key={p.id} id={p.id} message={p.message} likes={p.likes} changes={p.changes} addLike={props.addLike} />));

  return (
    <div className={s.postsBlock}>

      <AddingPost addPost={props.addPostAC} reset={props.reset}/>

      <div className={s.item}>
        {postElement}
      </div>

    </div>
  );
}

export default MyPosts;