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
  LinkCreate,
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
    confirmpassword: yup
      .string()
      .required("confirmação é obrigatorio")
      .oneOf([yup.ref("password")], "as senhas devem ser iguais"),
  })
  .required();

function CreateAccount() {
  const [ocult, setOcult] = useState("password");
  const [passeye, setPassEye] = useState(eyeoff);

  const [ocultConfirm, setOcultConfirm] = useState("password");
  const [passeyeConfirm, setPassEyeConfirm] = useState(eyeoff);

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
    ocult === "password"
      ? setOcult("text")
      : setOcult("password");
    passeye === eyeoff
      ? setPassEye(eyeon)
      : setPassEye(eyeoff);
  }

  function toggleHideConfirm() {
    ocultConfirm === "password"
      ? setOcultConfirm("text")
      : setOcultConfirm("password");
    passeyeConfirm === eyeoff
      ? setPassEyeConfirm(eyeon)
      : setPassEyeConfirm(eyeoff);
  }

  console.log(errors);

  return (
    <Container>
      <DivBg
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <img src={img} />
      </DivBg>

      <DivItens
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 90, opacity: 0 }}
        transition={{ duration: 1.1 }}
      >
        <DivImg
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.4 }}
        >
          <BackgroundDesktop src={logo} alt="logo desktop" />
        </DivImg>

        <DivAccess
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.6 }}
        >
          <h1>Crie sua conta para acessar a plataforma</h1>
          <span>
            Faça a criação da sua conta de maneira fácil e rápida para para
            começar a construir seus projetos ainda hoje.
          </span>
        </DivAccess>

        <DivInput
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 90, opacity: 0 }}
          transition={{ duration: 1.1, delay: 1.8 }}
        >
          <DivEmail
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
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
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 90, opacity: 0 }}
            transition={{ duration: 1.1, delay: 2.1 }}
          >
            <div>
              <label for="password">Senha</label>
            </div>
            <Input
              id="password"
              type={ocult}
              placeholder="Digite sua senha"
              name="password"
              {...register("password", { required: true })}
            />
            <div className="swapper">
              <div className="icon">
                <button className="btn" onClick={() => toggleHide()}>
                  <img src={passeye} alt="security" />
                </button>
              </div>
            </div>
            <p>{errors.password?.message}</p>
          </DivPassWord>

          <DivPassWord
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 90, opacity: 0 }}
            transition={{ duration: 1.1, delay: 2.2 }}
          >
            <div>
              <label for="confirmpassword">Confirme sua Senha</label>
            </div>
            <Input
              id="confirmpassword"
              type={ocultConfirm}
              placeholder="Confirme sua senha"
              name="confirmpassword"
              {...register("confirmpassword", { required: true })}
            />
            <div className="swapper">
              <div className="icon">
                <button className="btn" onClick={() => toggleHideConfirm()}>
                  <img src={passeyeConfirm} alt="security" />
                </button>
              </div>
            </div>
            <p>{errors.confirmpassword?.message}</p>
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
          Já possui conta? <LinkCreate to="/">entrar</LinkCreate>
        </motion.span>
      </DivItens>
    </Container>
  );
}

export default CreateAccount;
