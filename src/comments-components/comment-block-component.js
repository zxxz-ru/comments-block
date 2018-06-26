import React from 'react';
import {Ava, Message, CommentBlock} from './elements.js';  
import LikesBlockComponent from './likes-block-component';

export default class CommentBlockComponent extends React.Component {
  render() {
    const id = this.props.id;
    const ava_img = this.props.ava;
    const message = this.props.message;
    const likes = this.props.likes;
    const likes_handler = this.props.likes_handler;
    return (
    <CommentBlock>
      <Ava src={ava_img} ></Ava>
      <Message>{message}</Message>
      <LikesBlockComponent id={id} likes={likes} likes_handler={likes_handler}>
      </LikesBlockComponent> 
      </CommentBlock>
    );
  } 
} 

