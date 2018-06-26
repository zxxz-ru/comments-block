import React from 'react';
import EditorBlockComponent from './editor-block-component'; 
import CommentBlockComponent from './comment-block-component'; 
import {MainBlock} from './elements.js'; 
import {model} from './utils.js'; 

/** Main Container to hold everything */
export default class CommentsBlock extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      comments: model
    }
  }
  render() {
    const model = this.state.comments.posts;
    console.log(model);
    const items = model.map((c) => {
        const id = c.id;
       const  ava = c.post.avatar;
       const  message = c.post.msg;
       const  likes = c.post.likes;
       const  likes_handler = null;
      
      return ( <CommentBlockComponent
        key = {id}
        id={id}
        ava={ava}
        message={message}
        likes={likes}
        likes_handler={likes_handler}
        >
        </CommentBlockComponent>)});

    return (
    <MainBlock>
      <EditorBlockComponent></EditorBlockComponent>
      {items}
      </MainBlock>
    );
  }
}

