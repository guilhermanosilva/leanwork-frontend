import styled from "styled-components";

import bgImage from "../../assets/images/bg.jpg";

const Container = styled.section`
  display: flex;

  width: 100vw;
  height: 100vh;
`;

const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(33, 121, 181);
  background: linear-gradient(
    0deg,
    rgba(64, 200, 244, 0.6) 0%,
    rgba(33, 121, 181, 0.8) 100%
  );
`;

export { Container, ContainerImage, Image, Overlay };
