import React from 'react';

import MyDataGrid from './MyDataGrid';

function Telefone (props){
    const {
        onNewButtonClick,
        onUpdateButtonClick,
    } = props;

    const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
        onUpdateButtonClick({
            id: rowId,
            numero: rowData.numeroTelefone,
            cpf: rowData.cpfTelefone,
            cnpj: rowData.cnpjTelefone,
        });
    };

    return (
        <MyDataGrid
            title='Telefone'
            baseURL="api/Telefone"
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
                    field: 'numero',
                    headerName: 'Número',
                    flex: 1,
                },
            ]}
        />
    );
}

export default Telefone;