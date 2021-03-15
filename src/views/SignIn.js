import React, { Component } from 'react';
import styled from 'styled-components';
import { signIn } from 'actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Header from 'components/organisms/Header/Header';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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
    height: 50px;
  }
  @media (max-width: 400px) {
    height: 45px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 20px;
  text-align: center;
`;

class SignIn extends Component {
  state = {
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
    this.props.signIn(this.state.email, this.state.password);
  };
  render() {
    const { authError, auth } = this.props;

    return auth.uid ? (
      <Redirect to="/" />
    ) : (
      <StyledWrapper>
        <Header />
        <StyledContent>
          <StyledTitle>Sign In App</StyledTitle>
          <form onSubmit={this.handleSubmit}>
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
            <Button>Sign In</Button>
          </form>
          <StyledParagraph color="red">{authError}</StyledParagraph>
        </StyledContent>
      </StyledWrapper>
    );
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password)),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.project.authError,
  };
};
export default connect(mapStateToProps, mapDispatchProps)(SignIn);
