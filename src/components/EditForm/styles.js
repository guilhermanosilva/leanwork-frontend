import styled from "styled-components";

import { Form } from "formik";

const ContainerForm = styled(Form)`
  background-color: #ffffff;
  min-width: 35%;
  padding: 2rem;

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  h1 {
    font-weight: normal;
    margin: 1.5rem 0 3rem;
  }

  .container-input {
    display: flex;
    flex-direction: column;

    label {
      color: #999999;
      font-size: 0.75rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input {
      appearance: none;
      border: none;
      border-bottom: 1px solid #dbdbdb;
      color: #efeecf;
      margin-bottom: 0.5rem;
      outline: none;
      padding: 0.25rem 0;

      &:focus {
        color: #555555;
      }
    }

    .error-message {
      color: #dd0055;
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }
  }

  button {
    background-color: #40c8f4;
    border: none;
    border-radius: 1rem;
    color: #ffffff;
    outline: none;
    padding: 0.5rem 3rem;
    transition: 0.3s ease-in;

    &:hover {
      opacity: 70%;
      cursor: pointer;
    }

    &:disabled {
      background-color: #f6f6f6;
      color: #dddcdc;
    }
  }
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  a {
    flex: 1;
    font-size: 0.875rem;
    text-align: center;
    margin: 0 1rem;

    i {
      color: #555555;
      font-size: 0.875rem;
      margin-right: 0.5rem;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

export { ContainerForm, ContainerButton };
