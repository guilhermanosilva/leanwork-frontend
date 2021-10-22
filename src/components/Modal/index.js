import { useContext } from "react";
import { userContext } from "../../context/userContext";

import { Container, Close } from "./styles";

export default function Modal({ children }) {
  const { setIsModalOpen } = useContext(userContext);

  return (
    <Container>
      <Close onClick={() => setIsModalOpen(false)}>X</Close>
      {children}
    </Container>
  );
}
