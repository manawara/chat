import React, { Component } from 'react';
import styled from 'styled-components';
import MessageList from 'components/molecules/MessageList/MessageList';
import Form from 'components/molecules/Form/Form';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import { addAdmin } from 'actions';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const StyledWrapper = styled.div`
  display: flex;
  padding: 71px 20px 0;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 750px) {
    width: 100%;
  }
`;
const StyledContent = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  height: 400px;
  overflow-y: scroll;
  margin-bottom: 20px;
  list-style: none;
  @media (min-width: 1600px) {
    height: 550px;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.tertiary};
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  height: 200px;
  width: 400px;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    margin-left: 0;
    width: 70%;
  }
  @media (max-width: 650px) {
    margin-top: 30px;
    width: 100%;
    margin-left: 0;
  }
`;

class Main extends Component {
  state = {
    email: '',
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addAdmin(this.state.email);
    e.target.reset();
  };
  render() {
    console.log(this.state);
    const { messages, admin } = this.props;

    return (
      <StyledWrapper>
        <StyledInnerWrapper>
          <StyledContent>
            {messages &&
              messages.map((item) => <MessageList key={item.id} message={item} admin={admin} />)}
          </StyledContent>
          <Form />
        </StyledInnerWrapper>
        {admin && (
          <StyledForm onSubmit={this.handleSubmit}>
            <Title>Add admin for user</Title>
            <Input onChange={this.handleChange} name="email" placeholder="User email" size="90" />
            <Button>Make admin</Button>
          </StyledForm>
        )}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const admin = state.firestore.ordered.users ? state.firestore.ordered.users[0].admin : null;

  return {
    admin,
    auth: state.firebase.auth,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    addAdmin: (email) => dispatch(addAdmin(email)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'users',
        doc: props.auth.uid,
      },
    ];
  }),
)(Main);
