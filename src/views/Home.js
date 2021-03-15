import React from 'react';
import styled from 'styled-components';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const StyledInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

const Home = ({ messages, auth }) => (
  <>
    <Header />
    {auth.uid ? <Main messages={messages} /> : <StyledInfo>Log in to view the content!</StyledInfo>}
  </>
);

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    messages: state.firestore.ordered.messages,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'messages',
        orderBy: ['createdAt', 'desc'], // No results if I use this
        limit: 25,
      },
    ];
  }),
)(Home);
