import React from 'react';
import EditorBlockComponent from './editor-block-component'; 
import CommentBlockComponent from './comment-block-component'; 
import {MainBlock} from './elements.js'; 
import {model} from './utils.js'; 

/** Main Container to hold everything.
 * imported model is for testing. Data will be obtained from server in
 * production.
 * */
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
       const  ava = c.avatar;
       const  message = c.msg;
       const  likes = c.likes;
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

