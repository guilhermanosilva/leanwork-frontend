import formatCPF from "./formatCPF";
import formatPhone from "./formatPhone";
import isValidCPF from "./isValidCPF";
import isValidEmail from "./isValidEmail";
import isValidPhone from "./isValidPhone";

export default function inputValidation(values) {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length > 15) {
    errors.phone = "O telefone só pode ter até 15 caracteres";
  }

  if (values.phone && !isValidPhone(values.phone)) {
    errors.phone = "Formato de telefone incorreto";
  }

  if (values.phone) {
    values.phone = formatPhone(values.phone);
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Email incorreto";
  }

  if (!values.cpf) {
    errors.cpf = "Required";
  } else if (!isValidCPF(values.cpf)) {
    errors.cpf = "CPF incorreto";
  }

  if (values.cpf) {
    values.cpf = formatCPF(values.cpf);
  }

  return errors;
}
