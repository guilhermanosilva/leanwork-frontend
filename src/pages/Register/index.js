import RegisterForm from "../../components/RegisterForm";
import { Container, ContainerImage, Image, Overlay } from "./styles";

export default function Register() {
  return (
    <Container>
      <ContainerImage>
        <Image />
        <Overlay />
      </ContainerImage>
      <RegisterForm />
    </Container>
  );
}
