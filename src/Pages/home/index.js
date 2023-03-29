import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../Assets/logo.svg";
import img from "../../Assets/img.png";
import eyeon from "../../Assets/eye.png";
import eyeoff from "../../Assets/eye-off.png";

import {
  Container,
  DivImg,
  DivAccess,
  DivInput,
  DivEmail,
  DivPassWord,
  Input,
  BackgroundDesktop,
  DivBg,
  DivItens,
} from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("digite um email valido")
      .required("email é obrigatorio"),
    password: yup
      .string()
      .min(6, "a senha deve ter pelo menos 6 digitos")
      .max(12, "recomendamos não ultrapassar 12 digitos")
      .required("senha é obrigatoria"),
  })
  .required();

function Home() {
  const [ocult, setOcult] = useState("password");
  const [passeye, setPassEye] = useState(eyeoff);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(userData) {
    console.log(userData);
  }

  function toggleHide() {
    ocult === "password" ? setOcult("text") : setOcult("password");
    passeye === eyeoff ? setPassEye(eyeon) : setPassEye(eyeoff);
  }

  console.log(errors);

  return (
    <Container>
      <DivItens
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: -0, opacity: 1 }}
        exit={{ x: 90, opacity: 0 }}
        transition={{ duration: 1.1 }}
      >
        <DivImg
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.4 }}
        >
          <BackgroundDesktop src={logo} alt="logo desktop" />
        </DivImg>

        <DivAccess
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.6 }}
        >
          <h1>Acesse a plataforma</h1>
          <span>
            Faça login ou registre-se para começar a construir seus projetos
            ainda hoje.
          </span>
        </DivAccess>

        <DivInput
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.8 }}
        >

          <DivEmail
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: -0, opacity: 1 }}
            exit={{ x: 90, opacity: 0 }}
            transition={{ duration: 1.1, delay: 1.9 }}
          >
            <div>
              <label for="email">E-mail</label>
            </div>
            <Input
              placeholder="Digite seu e-mail"
              name="email"
              id="email"
              {...register("email", { required: true })}
            />
            <p>{errors.email?.message}</p>
          </DivEmail>

          <DivPassWord
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: -0, opacity: 1 }}
            exit={{ x: 90, opacity: 0 }}
            transition={{ duration: 1.1, delay: 2.1 }}
          >
            <div>
              <label for="password">Senha</label>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <div className="swapper">
              <div className="icon">
                <button className="btn" onClick={() => toggleHide()}>
                  <img src={passeye} alt="security" />
                </button>
              </div>
              <Input
                id="password"
                type={ocult}
                placeholder="Digite sua senha"
                name="password"
                {...register("password", { required: true })}
              />
            </div>
            <p>{errors.password?.message}</p>
          </DivPassWord>

          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="enter"
            type="submit"
            placeholder="ENVIAR"
          />
        </DivInput>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 2.2 }}
        >
          Ainda não tem conta? <a href="#">inscreva-se</a>
        </motion.span>
      </DivItens>

      <DivBg
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <img src={img} />
      </DivBg>
    </Container>
  );
}

export default Home;
