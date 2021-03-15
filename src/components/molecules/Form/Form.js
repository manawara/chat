import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { addMessage } from 'actions';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 200px;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;

class Form extends Component {
  state = {
    text: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage({ ...this.state, author: this.props.author, uidAuthor: this.props.uid });
    e.target.reset();
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Input name="text" onChange={this.handleChange} placeholder="Write message" size="90" />
        <Button>Send</Button>
      </StyledForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    author: state.firebase.auth.displayName,
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    addMessage: (text) => dispatch(addMessage(text)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Form);
