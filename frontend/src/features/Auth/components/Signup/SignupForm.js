import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
//import {db} from './firebase'
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import Button from "../../../../components/ui/Button";

function SignupForm() {
  const validate = Yup.object({
    nome: Yup.string()
      .min(3, "Deve ter ao menos 15 caracteres")
      .max(15, "Deve ter 15 caracteres ou menos")
      .required("Obrigatório"),
    sobrenome: Yup.string()
      .max(20, "Deve ter 20 caracteres ou menos")
      .required("Obrigatório"),
    email: Yup.string()
      .required("Campo obrigatório")
      //.email('Email é inválido')
      /*.matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Numéro de telefone não é valido"
      ) */
      .test("test-name", "Insira Telefone ou Email válido", function (value) {
        const emailRegex =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const phoneRegex = /^(\+244-|\+244|0)?\d{9}$/; // Change this regex based on requirement
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        if (!isValidEmail && !isValidPhone) {
          return false;
        }
        return true;
      }),
    senha: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "Senha deve conter ao menos 8 caracteres")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password deve conter ao menos 8 caracteres, um letra maíúscula, um número e caracter especial"
      ),
    csenha: Yup.string()
      .oneOf([Yup.ref("senha"), null], "AS senhas não correspondem")
      .required("Confirmação da senha é obrigatória"),
  });

  return (
    <Formik
      initialValues={{
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        csenha: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        try {
          values.created = Timestamp.now();
          //addDoc(collection(db, 'user'), values);
        } catch (err) {
          alert(err);
        }
        console.log(values);
      }}
    >
      {() => (
        <div className="card card-sign">
          <h1 className="font-weight-bold .display-4 title text-center">
            Sign Up
          </h1>
          <Form>
            <TextField
              label="Nome do usuário"
              name="nome"
              type="text"
              hint="Caractares alfa numericos e sem espaço"
            />
            <TextField
              label="Email ou número de telemóvel"
              name="email"
              type="email"
              hint="Será enviado uma mensagem de confirmação"
            />
            <TextField
              label="Senha"
              name="senha"
              type="password"
              hint="No mínimo 8 caracteres incluindo letras maiúscula e minisculas e um caracter especial"
            />
            <TextField
              label="Confirmar senha"
              name="csenha"
              type="password"
              hint="Confirme a sua senha"
            />

            <Button title="Registar" />

            <div className="text-center mt-3">
              You already have an account? <Link to="/signin">Sign in</Link>{" "}
              now.
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignupForm;
