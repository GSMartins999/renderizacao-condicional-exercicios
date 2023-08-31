import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton
} from "./styled";
import { useState } from "react";

function TelaLogin(props){
    const [email, setEmail] = useState("");
    const [senha , setSenha] = useState("");
    const login = () => {
      props.mudarTela("TelaPrincipal")
    
      const teste = {
        email:email,
        senha:senha
      }
      console.log(teste);
    }
  


    const imprimirEmail = (e) => {
      setEmail(e.target.value)
    }

    const imprimirSenha = (e) => {
      setSenha(e.target.value)
    }

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input htmlFor="email" value={email} onChange={imprimirEmail}/>

        <StyledLabel htmlFor="password">Senha: </StyledLabel>
        <Input id="password" type={"password"} value={senha} onChange={imprimirSenha}/>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={props.mostrarTelaCadastro} onChange={props.imprimirInformacao}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
