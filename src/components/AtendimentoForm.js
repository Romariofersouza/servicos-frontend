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

function EnderecoForm(props) {
  const { 
    atendimentoId,
    atendimentoDescricao, 
    atendimentoDataHora,
    atendimentoIdCliente,
    atendimentoIdProfissional,
    onSave,
    } = props;

  const inputDescricaoRef = createRef();
  const inputDataHoraRef = createRef();
  const inputIdClienteRef = createRef();
  const inputIdProfissionalRef = createRef();

  const getinputDescricaoRef = () => {
    return inputDescricaoRef.current;
  };

  const getinputDataHoraRef = () => {
    return inputDataHoraRef.current;
  };

  const getinputIdClienteRef = () => {
    return inputIdClienteRef.current;
  };

  const getinputIdProfissionalRef = () => {
    return inputIdProfissionalRef.current;
  };

  const handleOnButtonSaveClick = async () => {
    if (atendimentoId) {
      await axios.put(`/api/Atendimento/${atendimentoId}`, {
        id: atendimentoId,
        descricao: getinputDescricaoRef().getValue(),
        dataHora: getinputDataHoraRef().getValue(),
        idCliente: getinputIdClienteRef().getValue(),
        idProfissional: getinputIdProfissionalRef().getValue(),
      });

      onSave("Atendimento alterado com sucesso");
    } else {
      await axios.post("/api/Endereco", {
        descricao: getinputDescricaoRef().getValue(),
        dataHora: getinputDataHoraRef().getValue(),
        idCliente: getinputIdClienteRef().getValue(),
        idProfissional: getinputIdProfissionalRef().getValue(),
      });

      onSave("Atendimento cadastrado com sucesso");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputDescricaoRef}
            defaultValue={atendimentoDescricao}
            label="Descricao: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputDataHoraRef}
            defaultValue={atendimentoDataHora}
            label="Data e Hora: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputIdClienteRef}
            defaultValue={atendimentoIdCliente}
            label="ID Cliente: "
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <MyInput
            fullWidth
            ref={inputIdProfissionalRef}
            defaultValue={atendimentoIdProfissional}
            label="ID Profissional: "
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

export default EnderecoForm;
