import {
    Form,
    FormContainer,
    Input,
    StyledLabel,
    SendButton,
    BackToLoginButton
  } from "./styled";
  
  function TelaCadastroEndereco(props) {
    const cadastrar = () => {
      // fluxo de cadastro (ainda veremos)
      props.mudarTela("TelaPrincipal");
    };
  
    const mostrarTelaLogin = () => {
      props.mudarTela("TelaLogin");
    };
  

    return (
      <FormContainer>
        <h1>Cadastro </h1>
  
        <Form>
          <StyledLabel htmlFor="endereco"> Endereço: </StyledLabel>
          <Input id="endereco" />
  
          <StyledLabel htmlFor="numero"> Número da residência </StyledLabel>
          <Input id="numero" />
  
          <StyledLabel htmlFor="complemento"> Complemento: </StyledLabel>
          <Input id="complemento" />

          <StyledLabel htmlFor="Telefone"> Telefone: </StyledLabel>
          <Input id="telefone" />
  
          <SendButton onClick={cadastrar}>Confirmar</SendButton>
  
          <BackToLoginButton onClick={mostrarTelaLogin}>
            Já possuo cadastro
          </BackToLoginButton>
        </Form>
      </FormContainer>
    );
  }
  
  export default TelaCadastroEndereco;
  