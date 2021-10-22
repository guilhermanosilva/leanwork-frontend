import { Formik, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { userContext } from "../../context/userContext";
import inputValidation from "../../utils/inputValidation";

import { ContainerButton, ContainerForm } from "./styles";

export default function RegisterForm() {
  const { setUsers } = useContext(userContext);

  return (
    <Formik
      initialValues={{
        fullName: "",
        phone: "",
        email: "",
        cpf: "",
      }}
      validate={inputValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setUsers((prev) => [...prev, values]);
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isValid, dirty, isSubmitting }) => (
        <ContainerForm>
          <h1>Lean Cadastrar</h1>
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
            <button
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Cadastrar
            </button>
            <Link to="/list">
              <i className="fas fa-arrow-right"></i>
              Listar Usuários
            </Link>
          </ContainerButton>
        </ContainerForm>
      )}
    </Formik>
  );
}
