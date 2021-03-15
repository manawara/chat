import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import routes from 'routes';
import { Redirect } from 'react-router-dom';
import Header from 'components/organisms/Header/Header';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { signUp } from 'actions';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  @media (max-width: 1400px) {
    width: 40%;
  }
  @media (max-width: 950px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;
const StyledTitle = styled(Title)`
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
  height: 60px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  @media (max-width: 650px) {
    height: 40px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 20px;
  text-align: center;
`;

class SignIn extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    console.log(this.state);
    return (
      <StyledWrapper>
        <Header />
        {!auth.uid ? (
          <StyledContent>
            <StyledTitle>Sign Up App</StyledTitle>
            <form onSubmit={this.handleSubmit}>
              <StyledInput
                placeholder="First name"
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
              <StyledInput
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={this.handleChange}
              />
              <StyledInput
                placeholder="Email"
                type="text"
                name="email"
                onChange={this.handleChange}
              />
              <StyledInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <Button>Sign Up</Button>
            </form>
            <StyledParagraph color="red">{authError}</StyledParagraph>
          </StyledContent>
        ) : (
          <Redirect to={routes.home} />
        )}
      </StyledWrapper>
    );
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(signUp(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.project.authError,
  };
};
export default connect(mapStateToProps, mapDispatchProps)(SignIn);
