import React from 'react';
import EditorBlockComponent from './editor-block-component'; 
import CommentBlockComponent from './comment-block-component'; 
import {MainBlock} from './elements.js'; 

export default class CommentsBlock extends React.Component {
  render() {
    return (
    <MainBlock>
      <EditorBlockComponent></EditorBlockComponent>
      </MainBlock>
    );
  }
}

