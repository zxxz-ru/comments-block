import React from 'react';
import {Editor, EditorBlock} from './elements';
import PostButtonBlockComponent from './post-button-block-component';

export default class EditorBlockComponent extends React.Component {
render() {
return (
<EditorBlock>
  <Editor rows="3" cols="27" placeholder="Enter Your Comment here."></Editor>
  <PostButtonBlockComponent></PostButtonBlockComponent>
  </EditorBlock>
);
}
}
