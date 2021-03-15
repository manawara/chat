import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import Avatar from 'components/atoms/Avatar/Avatar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import iconDelete from 'assets/img/remove.svg';
import { deleteMessage } from 'actions';

const StyledItem = styled.li`
  display: flex;
  margin-top: 15px;
  padding: 0 10px;
  ${({ own }) =>
    own &&
    css`
      flex-direction: row-reverse;
    `};
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  ${({ own }) =>
    own &&
    css`
      header {
        align-self: flex-end;
      }
    `}
`;

const StyledBody = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  margin-top: 5px;
  word-break: break-word;
`;
// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  render() {
    const { message, auth, admin, deleteMessage } = this.props;
    const { author, text, uidAuthor, id } = message;
    const own = auth.uid === uidAuthor ? true : false;
    const colorText = auth.uid === uidAuthor ? 'white' : 'black';
    const name = author && author.split(' ').map((item) => item[0]);
    const color = auth.uid === uidAuthor ? 'blue' : '#a8a8a8';

    return (
      <StyledItem own={own}>
        <Avatar color={color}>{name}</Avatar>
        <StyledContent own={own}>
          <header>
            <Paragraph small color="gray">
              {author}
              {admin ? <ButtonIcon icon={iconDelete} onClick={() => deleteMessage(id)} /> : null}
            </Paragraph>
          </header>
          <StyledBody color={color}>
            <Paragraph color={colorText}>{text}</Paragraph>
          </StyledBody>
        </StyledContent>
      </StyledItem>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    deleteMessage: (id) => dispatch(deleteMessage(id)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(MessageList);
