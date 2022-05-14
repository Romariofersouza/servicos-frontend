import React from 'react';

import MyDataGrid from './MyDataGrid';

function Atendimento (props){
    const {
        onNewButtonClick,
        onUpdateButtonClick,
    } = props;

    const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
        onUpdateButtonClick({
            id: rowId,
            descricao: rowData.descricao,
            dataHora: rowData.dataHora,
            idCliente: rowData.idCliente,
            idProfissional: rowData.idProfissional,  
        });
    };

    return (
        <MyDataGrid
            title='Atendimento'
            baseURL="api/Atendimento"
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
                    field: 'descricao',
                    headerName: 'Descrição',
                    flex: 1,
                },
                {
                    field: 'dataHora',
                    headerName: 'Data e Hora',
                    width: 90,
                },
            ]}
        />
    );
}

export default Atendimento;