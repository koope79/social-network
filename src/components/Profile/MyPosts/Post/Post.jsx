import React from 'react';
//import { addLikeActionCreator } from '../../../../redux/Profile-reducer';
import s from './Post.module.css';

const Post = React.memo((props) => {
  let newLike = React.createRef();

  let onAddLike = () => {
    props.addLike(props.id, props.changes);
    //props.dispatch(addLikeActionCreator(props.id, props.changes));
  };

  return (
    <div className={s.item}>
      <div className={s.avaItem}>
        <img src='https://www.birminghamzoo.com/wp-content/uploads/2013/11/Red-Panda-Parker-001-Birmingham-Zoo-2-27-18-1024x801.jpg' />
      </div>

      <div>
        {props.message}
      </div>

      <div className={s.likesBox}>
        {/* <em><span>likes: {props.likes}</span></em>    onMouseOver={addLike}*/}
        <em><a className={s.like} ref={newLike} onClick={onAddLike} data-count={props.likes} role="button" >Like: {props.likes}</a></em>
      </div>

    </div>
  );
});

export default Post;