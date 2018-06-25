import React from 'react';
import EditorBlockComponent from './editor-block-component'; 
import CommentBlockComponent from './comment-block-component'; 
import {MainBlock} from './elements.js'; 

/** Main Container to hold everything */
export default class CommentsBlock extends React.Component {
  render() {
    return (
    <MainBlock>
      <EditorBlockComponent></EditorBlockComponent>
      <CommentBlockComponent></CommentBlockComponent>
      </MainBlock>
    );
  }
}

