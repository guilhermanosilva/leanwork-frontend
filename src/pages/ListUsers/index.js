import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import EditForm from "../../components/EditForm";
import Modal from "../../components/Modal";

import { userContext } from "../../context/userContext";

import { Container, ContainerList, InfoNotFound } from "./styles";

export default function ListUsers() {
  const [currentUser, setCurrentUser] = useState(null);
  const { users, setUsers, isModalOpen, setIsModalOpen } =
    useContext(userContext);

  function handleFormEdit(user) {
    setIsModalOpen(true);
    setCurrentUser(user);
  }

  function handleFormDelete(cpf) {
    const result = users.filter((user) => user.cpf !== cpf);
    setUsers(result);
  }

  return (
    <Container>
      <h1>List Users</h1>
      {users?.length <= 0 ? (
        <InfoNotFound className="nothing-registered">
          <h2>Nenhum usuário cadastrado</h2>
          <Link to="/">
            <i className="far fa-user"></i>
            Criar novo usuário
          </Link>
        </InfoNotFound>
      ) : (
        <ContainerList>
          {users.map((user) => (
            <li key={`${user.cpf}_${Math.random()}`}>
              <header>
                <h3>{user.fullName}</h3>
              </header>
              <div className="data-user">
                <span>
                  <i className="fas fa-phone"></i>
                  {user.phone}
                </span>
                <span>
                  <i className="far fa-envelope"></i>
                  {user.email}
                </span>
                <span>
                  <i className="far fa-id-badge"></i>
                  {user.cpf}
                </span>
              </div>

              <div className="manager-icons">
                <span onClick={() => handleFormEdit(user)}>
                  <i className="far fa-edit"></i>
                  Editar
                </span>
                <span onClick={() => handleFormDelete(user.cpf)}>
                  <i className="far fa-trash-alt"></i>
                  Excluir
                </span>
              </div>
            </li>
          ))}
        </ContainerList>
      )}

      {isModalOpen && (
        <Modal>
          <EditForm user={currentUser} />
        </Modal>
      )}
    </Container>
  );
}
