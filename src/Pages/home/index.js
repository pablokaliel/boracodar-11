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
  BackgroundMobile,
} from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import logo from "../../Assets/logo.svg";
import logo2 from "../../Assets/logo2.svg";
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
      <DivImg>
        <BackgroundMobile src={logo2} alt="logo mobile" />
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
            <label>E-mail</label>
          </div>
          <Input
            placeholder="Digite seu e-mail"
            name="email"
            {...register("email", { required: true })}
          />
          <p style={{ color: "#f00" }}>{errors.email?.message}</p>
        </DivEmail>
        <DivPassWord>
          <div>
            <label>Senha</label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="swapper">
            <div className="icon">
              <button className="btn" onClick={() => toggleHide()}>
                <img src={passeye} alt="security" />
              </button>
            </div>
            <Input
              type={ocult}
              placeholder="Digite sua senha"
              name="password"
              {...register("password", { required: true })}
            />
          </div>
          <p style={{ color: "#f00" }}>{errors.password?.message}</p>
        </DivPassWord>
        <input className="enter" type="submit" placeholder="ENVIAR" />
      </DivInput>
      <span>
        Ainda não tem conta? <a href="#">inscreva-se</a>
      </span>
    </Container>
  );
}

export default Home;
