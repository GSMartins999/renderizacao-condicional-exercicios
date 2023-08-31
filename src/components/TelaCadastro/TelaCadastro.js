import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton
} from "./styled";

function TelaCadastro(props) {

  function TelaCadastroEndereco(){
    props.mudarTela("TelaCadastroEndereco")
  }

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin");
  };

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="name"> Nome: </StyledLabel>
        <Input id="name" />

        <StyledLabel htmlFor="email"> E-mail </StyledLabel>
        <Input id="email" />

        <StyledLabel htmlFor="password"> Senha: </StyledLabel>
        <Input id="password" />

        <StyledLabel htmlFor="password-confirm">
          {" "}
          Confirmação da senha:{" "}
        </StyledLabel>
        <Input id="password-confirm" />

        <SendButton onClick={TelaCadastroEndereco}>Cadastrar endereço</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
