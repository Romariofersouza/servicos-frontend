import React from 'react';

import MyDataGrid from './MyDataGrid';

function Profissional (props){
    const {
        onNewButtonClick,
        onUpdateButtonClick,
    } = props;

    const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
        onUpdateButtonClick({
            id: rowId,
            nome: rowData.nome,
            cpf: rowData.cpf,
            cnpj: rowData.cnpj,
            idEndereco: rowData.idEndereco,  
        });
    };

    return (
        <MyDataGrid
            title='Profissionais'
            baseURL="api/Profissional"
            idColumnName='id'
            onNewButtonClick={onNewButtonClick}
            updateRow={handleOnMyDataGridUpdateRow}
            columns={[
                {
                    field: 'id',
                    headerName: 'ID',
                    width: 90,
                },
                {
                    field: 'nome',
                    headerName: 'Nome',
                    flex: 1,
                },
            ]}
        />
    );
}

export default Profissional;