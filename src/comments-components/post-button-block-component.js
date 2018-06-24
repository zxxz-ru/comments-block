import React from 'react';
import {PostButton, PostButtonBlock} from './elements';

export default class PostButtonBlockComponent extends React.Component {
render() {
return (
<PostButtonBlock>
  <PostButton>Post</PostButton>
  </PostButtonBlock>
);
}
}
