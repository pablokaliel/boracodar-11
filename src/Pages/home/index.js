import {Container,DivImg,DivAccess,DivInput,DivEmail,DivPassWord,Input} from './styles'

import logo from '../../Assets/logo.svg'
import eye from '../../Assets/eye-off.png'


function Home() {
  return ( 
  <Container>
    <DivImg>
      <img src={logo} alt="logo vertigo"/>
    </DivImg>

    <DivAccess>
      <h1>Acesse a plataforma</h1>
      <span>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</span>
    </DivAccess>

    <DivInput>
     <DivEmail>
      <div>
      <label>E-mail</label>
      </div>
      <Input placeholder='Digite seu e-mail'/>
      </DivEmail>
      <DivPassWord>
        <div>
          <label>Senha</label>
          <a href='#'>Esqueceu a senha?</a>
        </div>
       <div className='swapper'>
        <div className='icon'><button className='btn'><img src={eye}/></button></div>
      <Input  type="password" placeholder='Digite sua senha'/>
        </div>
      </DivPassWord>
      <button className='enter'>Entrar</button>
    </DivInput>
    <span>Ainda não tem conta? <a href='#'>inscreva-se</a></span>
  </Container> );
}

export default Home;