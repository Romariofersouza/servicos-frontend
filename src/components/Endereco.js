import React from 'react';

import MyDataGrid from './MyDataGrid';

function Endereco (props){
    const {
        onNewButtonClick,
        onUpdateButtonClick,
    } = props;

    const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
        onUpdateButtonClick({
            id: rowId,
            rua: rowData.rua,
            bairro: rowData.bairro,
            cidade: rowData.cidade,
            cep: rowData.cep, 
            complemento: rowData.complemento 
        });
    };

    return (
        <MyDataGrid
            title='Endereco'
            baseURL="api/Endereco"
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
                    field: 'rua',
                    headerName: 'Rua',
                    flex: 1,
                },
                {
                    field: 'complemento',
                    headerName: 'Complemento',
                    flex: 1,
                },
            ]}
        />
    );
}

export default Endereco;