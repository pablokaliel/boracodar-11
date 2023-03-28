import { useState } from "react";

import {
  Container,
  DivImg,
  DivAccess,
  DivInput,
  DivEmail,
  DivPassWord,
  Input,
  BackgroundDesktop,
  DivBg,DivItens
} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../Assets/logo.svg";
import img from "../../Assets/img.png";
import eyeon from "../../Assets/eye.png";
import eyeoff from "../../Assets/eye-off.png";

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
      <DivItens>
      <DivImg>
        <BackgroundDesktop src={logo} alt="logo desktop" />
      </DivImg>

      <DivAccess>
        <h1>Acesse a plataforma</h1>
        <span>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </span>
      </DivAccess>

      <DivInput onSubmit={handleSubmit(onSubmit)}>
        <DivEmail>
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
        <DivPassWord>
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
        <input className="enter" type="submit" placeholder="ENVIAR" />
      </DivInput>
      <span>
        Ainda não tem conta? <a href="#">inscreva-se</a>
      </span>
      </DivItens>
      <DivBg>
        <img src={img}/>
      </DivBg>
    </Container>
  );
}

export default Home;
