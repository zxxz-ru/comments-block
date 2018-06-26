import styled from 'styled-components';

/** Used for all avatars in comments block */
export const Ava = styled.img`
  border: 1px solid black;
  padding: 0.24em;
  height: 2.8em;
  width: 2.8em;
  margin-right: 1.5em;
  float: left;
`;

/** Comment Message */
export const Message = styled.p`
  font-size: 1.2em;
`;

/** Post button to add message */
export const PostButton = styled.button`
 padding: 0 1em 0 1em;
`;

/** Textarea to enter message */
export const Editor = styled.textarea`
  width: 95%;
  margin: 0 2.5%;
  resize: none;

`;
/** Container for all elements needed for comments-block */
export const MainBlock = styled.div`
  padding: 0.5em 1em;
  border: 2px solid rgba(242, 242, 242, 1);
  border-radius: 1em;
  box-shadow: 3px 3px 3px #f4f4f4;
  margin: 1em;
min-width: 15em;

`;
/** Main comment block container for Ava, Message */
export const CommentBlock = styled.div`
  padding: 0.5em 1em;
  border: 2px solid rgba(244, 244, 244, 0.8);
  border-radius: 1.25em;
  box-shadow: 1px 1px 2px #f4f4f4;
  box-sizing: border-box;
  min-height: 4.8em;
  margin: 2em auto;
  width: 95%;
  font-size: 12px;
  line-height: 1.2;
`;
/** Block to display likes */
export const LikesBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/** Span to display number of likes in LikesBlockComponent. Used in
 * likes-block-component.js
 */
export const LikesBadge = styled.span`
font-size: 1.3em;
background-color: #a6a6d9;
color: black;
padding: 0.3em;
margin-right: 0.5em;
  border-radius: 1.25em;
`;

/** Image with hearts to click on for adding more likes.
 * Used in likes-block-component.js
 */
export const LikesImage = styled.img`
   height: 1.9em;
width: 1.9em;
`;


/**Container for PostButton.  Need it to push post button to right */
export const PostButtonBlock = styled.div`
  width: 95%;
  margin: 0.1875em 2.5%;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
/** Block to hold Editor and PostButtonBlock */
export const EditorBlock = styled.div`
  position: relative;
`;
