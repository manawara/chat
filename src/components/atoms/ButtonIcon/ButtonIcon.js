import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 15px;
  width: 15px;
  background-image: url(${({ icon }) => icon});
  background-position-y: 50%;
  background-size: 90%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export default ButtonIcon;
