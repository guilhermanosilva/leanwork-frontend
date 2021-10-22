import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;

const Close = styled.div`
  color: #ffffff;
  font-size: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  padding: 0 0.25rem;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #555555;
  }
`;

export { Container, Close };
