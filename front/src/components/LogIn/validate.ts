import { LoginErrorProps, LoginProps } from "@/types/types";

export default function validate(values: LoginProps): LoginErrorProps {
  const errors: LoginErrorProps = {};
  if (!values.email) {
    errors.email = "Please enter your email";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email =
      "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
  }
  if (!values.password) {
    errors.password = "Please enter your password";
  }

  return errors;
}