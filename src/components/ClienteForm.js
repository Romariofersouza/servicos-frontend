import React, { createRef } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TransferWithinAStationRoundedIcon from '@material-ui/icons/TransferWithinAStationRounded';



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

function ClienteForm(props) {
  const { 
    clienteId, 
    clienteName,
    clienteCPF,
    clienteEndereco,
    onSave,
    } = props;

  const inputNameRef = createRef();
  const inputCPFRef = createRef();
  const inputEnderecoRef = createRef();

  const getInputNameRef = () => {
    return inputNameRef.current;
  };

  const getInputCPFRef = () => {
    return inputCPFRef.current;
  };

  const getInputEnderecoRef = () => {
    return inputEnderecoRef.current;
  };

  const handleOnButtonSaveClick = async () => {
    if (clienteId) {
      await axios.put(`/api/Cliente/${clienteId}`, {
        id: clienteId,
        nome: getInputNameRef().getValue(),
        cpf: getInputCPFRef().getValue(),
        IdEndereco: getInputEnderecoRef().getValue(),
      });

      onSave("Cliente alterado com sucesso");
    } else {
      await axios.post("/api/Cliente", {
        nome: getInputNameRef().getValue(),
        cpf: getInputCPFRef().getValue(),
        IdEndereco: getInputEnderecoRef().getValue(),
      });

      onSave("Cliente cadastrado com sucesso");
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
            defaultValue={clienteName}
            label="Nome: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputCPFRef}
            defaultValue={clienteCPF}
            label="CPF: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputEnderecoRef}
            defaultValue={clienteEndereco}
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

export default ClienteForm;
