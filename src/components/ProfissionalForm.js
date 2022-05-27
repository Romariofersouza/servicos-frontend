import React, { createRef } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MyButton from "./MyButton";
import MyInput from "./MyInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  saveButtonGrid: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function ProfissionalForm(props) {
  const { 
      profissionalId, 
      profissionalName,
      profissionalCPF,
      profissionalCNPJ,
      profissionalEndereco,
      onSave,
     } = props;

  const inputNameRef = createRef();
  const inputCPFRef = createRef();
  const inputCNPJRef = createRef();
  const inputEnderecoRef = createRef();

  const getInputNameRef = () => {
    return inputNameRef.current;
  };

  const getInputCPFRef = () => {
    return inputCPFRef.current;
  };

  const getInputCNPJRef = () => {
    return inputCNPJRef.current;
  };

  const getInputEnderecoRef = () => {
    return inputEnderecoRef.current;
  };

  const handleOnButtonSaveClick = async () => {
    if (profissionalId) {
      await axios.put(`/api/Profissional/${profissionalId}`, {
        id: profissionalId,
        nome: getInputNameRef().getValue(),
        cpf: getInputCPFRef().getValue(),
        cnpj: getInputCNPJRef().getValue(),
        IdEndereco: getInputEnderecoRef().getValue(),
      });

      onSave("Profissional alterado com sucesso");
    } else {
      await axios.post("/api/Profissional", {
        nome: getInputNameRef().getValue(),
        cpf: getInputCPFRef().getValue(),
        cnpj: getInputCNPJRef().getValue(),
        IdEndereco: getInputEnderecoRef().getValue(),
      });

      onSave("Profissional cadastrado com sucesso");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputNameRef}
            defaultValue={profissionalName}
            label="Nome: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputCPFRef}
            defaultValue={profissionalCPF}
            label="CPF: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputCNPJRef}
            defaultValue={profissionalCNPJ}
            label="CNPJ: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputEnderecoRef}
            defaultValue={profissionalEndereco}
            label="Endereço: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} className={classes.saveButtonGrid}>
          <MyButton text="Salvar" onClick={handleOnButtonSaveClick} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfissionalForm;

