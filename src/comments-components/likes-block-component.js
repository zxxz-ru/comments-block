import React from 'react';
import {LikesBlock, LikesBadge, LikesImage} from './elements.js';  
import {likes_img} from './utils.js';

/** This class is displayed on bottom of ComponentBlock it shows number of likes
 * and clickable image to add one more like to the Comment.
 * Class is used in comment-block-component.js*/
export default class LikesBlockComponent extends React.Component {
  constructor(props) {
  super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    e.target.style.cursor="pointer";
    }
  
  render() {
    const likes = this.props.likes;
    const likes_handler = this.props.likes_handler;
    const id = this.props.id;
    return (
    <LikesBlock>
<LikesBadge>{likes}</LikesBadge>
      <LikesImage
      id ={id}
      src={likes_img}
      alt="Click to add like!"
      onClick={likes_handler}
      onMouseEnter={this.handleMouseOver}
    ></LikesImage>
      </LikesBlock>
    );
  } 
} 

          
