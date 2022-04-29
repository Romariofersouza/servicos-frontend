import axios from 'axios';
import {
    forwardRef,
    Fragment,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

import {
    Button,
} from '@material-ui/core';

const DataGrid = forwardRef((props, ref) => {
    const {
        baseURL,
        columns,
        idColumnName,
        updateRow,
    } = props;


    const [state, setState] = useState({
        loadData: true,
        rows: [],
    });

    const handleOnUpdate = (rowId, rowData) => {
        updateRow(rowId, rowData);
    };

    const getData = async () => {
        const { data } = await axios.get(baseURL);

        setState({
            loadData: false,
            rows: data,
        });
    };

    useEffect(() => {
        if (state.loadData) {
            getData();
        }
    }, [state.loadData, getData]);

    const deleteRow = async rowId => {
        await axios.delete(`${baseURL}/${rowId}`);

        getData();
    };

    useImperativeHandle(ref, () => ({
        getData,
    }));

    const {
        rows,
    } = state;

    return (
        <Fragment>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                {columns.map(column => <div key={column.value}>{column.display}</div>)}
            </div>
                <div>
                    Ações
                </div>
            {rows.map((row, index) =>
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {columns.map(column => <div key={`${index}_${column.value}`}>{row[column.value]}</div>)}
                    <div>
                    <Button
                            variant='contained'
                            color='primary'
                            onClick={() => {
                                handleOnUpdate(row[idColumnName], row);
                            }}
                        >

                            Alterar
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => {
                                deleteRow(row[idColumnName]);
                            }}
                        >
                            Excluir
                            </Button>
                    </div>
                </div>
            )}
        </Fragment>
    );
});

export default DataGrid;