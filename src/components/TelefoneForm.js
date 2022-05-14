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

function TelefoneForm(props) {
  const { 
    telefoneId,
    telefoneNumero, 
    telefoneIdCliente,
    telefoneIdProfissional,
    onSave,
    } = props;

  const inputNumeroRef = createRef();
  const inputIdClienteRef = createRef();
  const inputIdProfissionalRef = createRef();

  const getinputNumeroRef = () => {
    return inputNumeroRef.current;
  };

  const getinputIdClienteRef = () => {
    return inputIdClienteRef.current;
  };

  const getinputIdProfissionalRef = () => {
    return inputIdProfissionalRef.current;
  };

  const handleOnButtonSaveClick = async () => {
    if (telefoneId) {
      await axios.put(`/api/Telefone/${telefoneId}`, {
        id: telefoneId,
        numero: getinputNumeroRef().getValue(),
        idCliente: getinputIdClienteRef().getValue(),
        idProfissional: getinputIdProfissionalRef().getValue(),
      });

      onSave("Telefone alterado com sucesso");
    } else {
      let requestData = {
        numero: getinputNumeroRef().getValue(),
        idCliente: getinputIdClienteRef().getValue(),
        idProfissional: getinputIdProfissionalRef().getValue(),
      };
      if (!requestData.idProfissional){
        delete requestData.idProfissional;
      }

      if (!requestData.idCliente){
        delete requestData.idCliente;
      }
      await axios.post("/api/Telefone", requestData );

      onSave("Telefone cadastrado com sucesso");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputNumeroRef}
            defaultValue={telefoneNumero}
            label="Número: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputIdProfissionalRef}
            defaultValue={telefoneIdProfissional}
            label="Id Profissional: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputIdClienteRef}
            defaultValue={telefoneIdCliente}
            label="Id Cliente: "
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

export default TelefoneForm;
