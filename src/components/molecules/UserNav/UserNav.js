import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from 'routes';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Avatar from 'components/atoms/Avatar/Avatar';
import PropTypes from 'prop-types';
import { signOut } from 'actions';

const Nav = styled.nav`
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin-right: 20px;
    @media (max-width: 650px) {
      margin-right: 5px;
      margin-left: 5px;
    }
  }
`;

const UserNav = ({ color, signOut, auth }) => (
  <Nav>
    <StyledList>
      {!auth.uid ? (
        <>
          <li>
            <Button as={Link} to={routes.login} secondary="true" color={color}>
              Sign in
            </Button>
          </li>
          <li>
            <Button as={Link} to={routes.register} secondary="true" color={color}>
              Sign up
            </Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Button onClick={signOut} secondary color={color}>
              Logout
            </Button>
          </li>

          <li>
            <Avatar color={color}>
              {auth.displayName !== null && auth.displayName.split(' ').map((item) => item[0])}
            </Avatar>
          </li>
        </>
      )}
    </StyledList>
  </Nav>
);

UserNav.propTypes = {
  color: PropTypes.string,
};

UserNav.defaultProps = {
  color: null,
};

const mapDispatchProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps, mapDispatchProps)(UserNav);
