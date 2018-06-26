import React from 'react';
import EditorBlockComponent from './editor-block-component'; 
import CommentBlockComponent from './comment-block-component'; 
import {MainBlock} from './elements.js'; 
import {model} from './utils.js'; 
import * as W from './worker';

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
    this.handleLikes = this.handleLikes.bind(this);
  }


handleLikes(e){
  this.setState({comments:
    W.addLikes(this.state.comments, e.target.id)});
  e.preventDefault();
}

createArrayComments(arr) {
  const items = arr.map((c) => {
  const id = c.id;
  const  ava = c.avatar;
  const  message = c.msg;
  const  likes = c.likes;
  const  likes_handler = this.handleLikes;

  return (
    <CommentBlockComponent
      key = {id}
      id={id}
      ava={ava}
      message={message}
      likes={likes}
      likes_handler={likes_handler}
      ></CommentBlockComponent>
  )});
  return items;
}


  render() {
    const model = this.state.comments;
    const items = this.createArrayComments(model.posts);

    return (
    <MainBlock>
      <EditorBlockComponent></EditorBlockComponent>
      {items}
      </MainBlock>
    );
  }
}

