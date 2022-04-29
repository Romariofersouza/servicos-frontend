import { createRef, useRef } from "react";
import axios from "axios";

import MyButton from "./componentes/MyButton";
import MyInput from "./componentes/MyInput";
import MyDataGrid from "./componentes/MyDataGrid";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const inputNameRef = createRef();
  const inputCpfRef = createRef();
  const inputCnpjRef = createRef();
  const inputIdEnderecoRef = createRef();
  const ProfissionalMyDataGridRef = createRef();

  const selectedRowId = useRef(null);

  const getInputNameRef = () => {
    return inputNameRef.current;
  };

  const getInputCpfRef = () => {
    return inputCpfRef.current;
  };

  const getInputCnpjRef = () => {
    return inputCnpjRef.current;
  };

  const getInputIdEnderecoRef = () => {
    return inputIdEnderecoRef.current;
  };

  const getProfissionalMyDataGridRef = () => {
    return ProfissionalMyDataGridRef.current;
  };

  const setSelectedRowId = rowId => {
    selectedRowId.current = rowId;
  };

  const getSelectedRowId = () => {
    return selectedRowId.current;
  };

  const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
    setSelectedRowId(rowId);

    getInputNameRef().setValue(rowData.nome);
    getInputCpfRef().setValue(rowData.cpf);
    getInputCnpjRef().setValue(rowData.cnpj);
    getInputIdEnderecoRef().setValue(rowData.IdEndereco);
  };

  const handleOnButtonSaveClickProfissional = async () => {
    let rowId = getSelectedRowId();

    if (rowId) {
      await axios.put(`/api/Profissional/${rowId}`, {
        id: rowId,
        nome: getInputNameRef().getValue(),
        cpf: getInputCpfRef().getValue(),
        cnpj: getInputCnpjRef().getValue(),
        IdEndereco: getInputIdEnderecoRef().getValue(),
      });

      setSelectedRowId(null);
    } else {
      await axios.post("/api/Profissional", {
        nome: getInputNameRef().getValue(),
        cpf: getInputCpfRef().getValue(),
        cnpj: getInputCnpjRef().getValue(),
        IdEndereco: getInputIdEnderecoRef().getValue(),
      });
    }

    getProfissionalMyDataGridRef().getData();
    getInputNameRef().setValue("");
    getInputCpfRef().setValue("");
    getInputCnpjRef().setValue("");
    getInputIdEnderecoRef().setValue("");
  };

  return (
    <div
      style={{
        margin: "5% 15%",
      }}
    >
      <MyDataGrid
        ref={ProfissionalMyDataGridRef}
        baseURL="api/Profissional"
        idColumnName="id"
        updateRow={handleOnMyDataGridUpdateRow}
        columns={[
          {
            field: "id",
            headerName: "ID",
            width: 90,
          },

          {
            field: "nome",
            headerName: "Nome",
            flex: 1,
          },
        ]}
      />

      <br />
      <br />
      <MyInput ref={inputNameRef} label="Nome: " />
      <br />
      <MyInput ref={inputCpfRef} label="CPF: " />
      <br />
      <MyInput ref={inputCnpjRef} label="CNPJ: " />
      <br />
      <MyInput ref={inputIdEnderecoRef} label="IdEndereço: " />
      <br />
      <MyButton text="Salvar" onClick={handleOnButtonSaveClickProfissional} />
    </div>
  );
}

export default App;
