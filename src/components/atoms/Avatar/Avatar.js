import styled from 'styled-components';

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: ${({ size }) => (size ? `${size}px` : '45px')};
  width: ${({ size }) => (size ? `${size}px` : '45px')};
  background-color: ${({ color, theme }) => color || theme.primary};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.secondary};
  @media (max-width: 650px) {
    height: ${({ size }) => (size ? `${size}px` : '35px')};
    width: ${({ size }) => (size ? `${size}px` : '35px')};
  }
`;

export default Avatar;
