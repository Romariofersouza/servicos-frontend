import React, { createRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Endereco from './Endereco';
// import CadastroEndereco from './EnderecoForm';
// import MyInput from './MyInput';
import axios from "axios";
import MyInput from "./MyInput";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const {
    // enderecoId,
    enderecoRua,
    enderecoBairro,
    enderecoCidade,
    enderecoCep,
    enderecoComplemento,
    clienteId, 
    clienteName,
    clienteCPF,
    clienteEndereco,
    // onSave,
  } = props;

  const inputRuaRef = createRef();
  const inputBairroRef = createRef();
  const inputCidadeRef = createRef();
  const inputCepRef = createRef();
  const inputComplementoRef = createRef();
  const inputNameRef = createRef();
  const inputCPFRef = createRef();
  const inputEnderecoRef = createRef();

  const getinputRuaRef = () => {
    return inputRuaRef.current;
  };

  const getinputBairroRef = () => {
    return inputBairroRef.current;
  };

  const getinputCidadeRef = () => {
    return inputCidadeRef.current;
  };

  const getinputCepRef = () => {
    return inputCepRef.current;
  };

  const getenderecoComplementoRef = () => {
    return inputComplementoRef.current;
  };

  const getInputNameRef = () => {
    return inputNameRef.current;
  };

  const getInputCPFRef = () => {
    return inputCPFRef.current;
  };

  const getInputEnderecoRef = () => {
    return inputEnderecoRef.current;
  };

  const handleOnFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    await axios.post("/api/Endereco", {
      rua: getinputRuaRef().getValue(),
      bairro: getinputBairroRef().getValue(),
      cidade: getinputCidadeRef().getValue(),
      cep: getinputCepRef().getValue(),
      complemento: getenderecoComplementoRef().getValue(),
    });

    await axios.post("/api/Cliente", {
      rua: getinputRuaRef().getValue(),
      bairro: getinputBairroRef().getValue(),
      cidade: getinputCidadeRef().getValue(),
      cep: getinputCepRef().getValue(),
      complemento: getenderecoComplementoRef().getValue(),
    });

    alert("Cadastro efetuado com sucesso");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form className={classes.paper} onSubmit={handleOnFormSubmit}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MyInput
                autoComplete="Nme"
                name="nome"
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MyInput
                variant="outlined"
                required
                fullWidth
                id="cpf"
                label="CPF"
                name="cpf"
                autoComplete="CF"
              />
            </Grid>
            <Grid item xs={12}>
              <MyInput
                variant="outlined"
                required
                fullWidth
                id="cnpj"
                label="CNPJ"
                name="cnpj"
                autoComplete="cpj"
              />
            </Grid>
            <Grid item xs={12}>
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="emal"
              />
            </Grid>
            <Grid item xs={12}>
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="senha"
                label="Senha"
                type="senha"
                id="senha"
                autoComplete="current-snha"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <MyInput
                fullWidth
                ref={inputRuaRef}
                defaultValue={enderecoRua}
                label="Rua: "
                variant="outlined"
                size="small"
              /> */}
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="rua"
                label="Rua"
                type="rua"
                id="rua"
                autoComplete="ra"
                ref={inputRuaRef}
                defaultValue={enderecoRua}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <MyInput
                fullWidth
                ref={inputBairroRef}
                defaultValue={enderecoBairro}
                label="Bairro: "
                variant="outlined"
                size="small"
              /> */}
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="bairro"
                label="Bairro"
                type="bairro"
                id="bairro"
                autoComplete="baro"
                ref={inputBairroRef}
                defaultValue={enderecoBairro}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <MyInput
                    fullWidth
                    ref={inputCidadeRef}
                    defaultValue={enderecoCidade}
                    label="Cidade: "
                    variant="outlined"
                    size="small"
                  /> */}
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="cidade"
                label="Cidade"
                type="cidade"
                id="cidade"
                autoComplete="cide"
                ref={inputCidadeRef}
                defaultValue={enderecoCidade}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <MyInput
                  fullWidth
                  ref={inputCepRef}
                  defaultValue={enderecoCep}
                  label="Cep: "
                  variant="outlined"
                  size="small"
                /> */}
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="cep"
                label="Cep"
                type="cep"
                id="cep"
                autoComplete="cp"
                ref={inputCepRef}
                defaultValue={enderecoCep}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <MyInput
                  fullWidth
                  ref={inputComplementoRef}
                  defaultValue={enderecoComplemento}
                  label="Complemento: "
                  variant="outlined"
                  size="small"
                /> */}
              <MyInput
                variant="outlined"
                required
                fullWidth
                name="complemento"
                label="Complemento"
                type="complemento"
                id="complemento"
                autoComplete="comento"
                ref={inputComplementoRef}
                defaultValue={enderecoComplemento}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quero receber promoções de marketing e atualizações por e-mail."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Já tem uma conta? Entre aqui
              </Link>
            </Grid>
          </Grid>
        </div>
      </form>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
