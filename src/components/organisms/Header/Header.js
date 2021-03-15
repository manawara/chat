import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import UserNav from 'components/molecules/UserNav/UserNav';

const StyledWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
`;
const Header = () => (
  <StyledWrapper>
    <Title color="white">My Chat</Title>
    <UserNav color="white" />
  </StyledWrapper>
);

export default Header;
