import React from 'react';
import {Ava, Message, LikesBlock, CommentBlock} from './elements.js';  

export default class CommentBlockComponent extends React.Component {
  render() {
    return (
    <CommentBlock>
      <Ava ></Ava>
      <Message></Message>
      <LikesBlock></LikesBlock> 
      </CommentBlock>
    );
  } 
} 

