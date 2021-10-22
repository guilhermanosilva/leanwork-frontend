import { Formik, Field, ErrorMessage } from "formik";
import { useContext } from "react";

import { userContext } from "../../context/userContext";
import inputValidation from "../../utils/inputValidation";

import { ContainerButton, ContainerForm } from "./styles";

export default function EditForm({ user }) {
  const { users, setUsers, setIsModalOpen } = useContext(userContext);

  return (
    <Formik
      initialValues={{
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
        cpf: user.cpf,
      }}
      validate={inputValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const filteredUsers = users.filter((item) => item.cpf !== user.cpf);

        setUsers(filteredUsers);

        const updatedUser = {
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          cpf: values.cpf,
        };

        setTimeout(() => {
          setUsers((prev) => [...prev, updatedUser]);
          setSubmitting(false);
          setIsModalOpen(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isValid, isSubmitting }) => (
        <ContainerForm>
          <h1>Lean Atualizar</h1>
          <div className="container-input">
            <label htmlFor="fullName">Nome Completo</label>
            <Field name="fullName" type="text" />
            <p className="error-message">
              <ErrorMessage name="fullName" />
            </p>
          </div>

          <div className="container-input">
            <label htmlFor="phone">Telefone</label>
            <Field name="phone" type="text" />
            <p className="error-message">
              <ErrorMessage name="phone" />
            </p>
          </div>

          <div className="container-input">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <p className="error-message">
              <ErrorMessage name="email" />
            </p>
          </div>

          <div className="container-input">
            <label htmlFor="cpf">CPF</label>
            <Field name="cpf" type="text" />
            <p className="error-message">
              <ErrorMessage name="cpf" />
            </p>
          </div>

          <ContainerButton>
            <button type="submit" disabled={!isValid || isSubmitting}>
              Atualizar
            </button>
          </ContainerButton>
        </ContainerForm>
      )}
    </Formik>
  );
}
