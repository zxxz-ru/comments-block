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
  border: 2px solid rgba(242, 242, 242, 0.8);
  border-radius: 1em;
  box-shadow: 3px 3px 3px #f4f4f4;
  margin: 1em;

`;
/** Main comment block container for Ava, Message */
export const CommentBlock = styled.div`
  padding: 0.5em 1em;
  border: 2px solid rgba(244, 244, 244, 0.6);
  border-radius: 1.25em;
  box-shadow: 1px 1px 2px #f4f4f4;
  margin: 2em auto;
  width: 95%;
  font-size: 14px;
  line-height: 1.2;
`;
/** Block to display likes */
export const LikesBlock = styled.div`
  display: inline-block;
`;
/** Need it to push post button to right */
export const PostButtonBlock = styled.div`
  width: 95%;
  margin: 0 2.5%;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
/** Block to hold Editor and PostButtonBlock */
export const EditorBlock = styled.div`
  position: relative;
`;
