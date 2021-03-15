import styled from 'styled-components';

const Logo = styled.div`
  position: relative;
  height: 45px;
  width: 45px;
  border: 3px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 50%;
  @media (max-width: 650px) {
    height: 35px;
    width: 35px;
    border: 2px solid ${({ theme }) => theme.color.primary};
  }

  &&::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: 'C';
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.fontSize.xll};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    @media (max-width: 650px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`;

export default Logo;
