import React, {
    useRef,
    useState,
} from 'react';
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@material-ui/core';
import {
    Home as HomeIcon,
    Face as FaceIcon,
    Work as WorkIcon,
    Menu as MenuIcon,
    TransferWithinAStationRounded as TransferWithinAStationRoundedIcon,
    Business as BusinessIcon,
    SettingsPhone as SettingsPhoneIcon,
} from '@material-ui/icons';
import {
    makeStyles,
    useTheme,
} from '@material-ui/core/styles';


import Profissional from './Profissional';
import ProfissionalForm from './ProfissionalForm';
import Cliente from './Cliente';
import ClienteForm from './ClienteForm';
import Endereco from './Endereco';
import EnderecoForm from './EnderecoForm';
import Telefone from './Telefone';
import TelefoneForm from './TelefoneForm';
import Atendimento from './Atendimento'
import AtendimentoForm from './AtendimentoForm'


const drawerWidth = 240;

const CONTENT_TYPE_HOME = 'H';
const CONTENT_TYPE_CLIENTE = 'C';
const CONTENT_TYPE_CLIENTE_FORM = 'CF';
const CONTENT_TYPE_PROFISSIONAL = 'P';
const CONTENT_TYPE_PROFISSIONAL_FORM = 'PF';
const CONTENT_TYPE_ENDERECO = 'E';
const CONTENT_TYPE_ENDERECO_FORM = 'EF';
const CONTENT_TYPE_TELEFONE = 'T';
const CONTENT_TYPE_TELEFONE_FORM = 'TF';
const CONTENT_TYPE_ATENDIMENTO = 'A';
const CONTENT_TYPE_ATENDIMENTO_FORM = 'AF';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            zIndex: 1,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100%)',
            zIndex: 2,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function AppContent(props) {
    const {
        window,
    } = props;

    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [contentType, setContentType] = useState(CONTENT_TYPE_HOME);

    const profissionalData = useRef({});
    const clienteData = useRef({});
    const enderecoData = useRef({});
    const telefoneData = useRef({});
    const atendimentoData = useRef({});

    const setProfissionalData = currentProfissionalData => {
        profissionalData.current = currentProfissionalData;
    };

    const getProfissionalData = () => {
        return profissionalData.current;
    };

    ///////////////////////////////////////////////////////// Cliente

    const setClienteData = currentClienteData => {
        clienteData.current = currentClienteData;
    };

    const getClienteData = () => {
        return clienteData.current;
    };

    //////////////////////////////////////////////////////// Endereço

    const setEnderecoData = currentEnderecoData => {
        enderecoData.current = currentEnderecoData;
    };

    const getEnderecoData = () => {
        return enderecoData.current;
    };

    /////////////////////////////////////////////////////// Telefone

    const setTelefoneData = currentTelefoneData => {
        telefoneData.current = currentTelefoneData;
    };

    const getTelefoneData = () => {
        return telefoneData.current;
    };

    //////////////////////////////////////////////////////// Atendimento

    const setAtendimentoData = currentTelefoneData => {
        atendimentoData.current = currentTelefoneData;
    };

    const getAtendimentoData = () => {
        return atendimentoData.current;
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleOnProfissionaisNewButtonClick = () => {
        setProfissionalData({});
        setContentType(CONTENT_TYPE_PROFISSIONAL_FORM);
    };

    const handleOnProfissionaisUpdateButtonClick = currentProfissionalData => {
        setProfissionalData(currentProfissionalData);
        setContentType(CONTENT_TYPE_PROFISSIONAL_FORM);
    };

    const handleOnProfissionalFormSave = message => {
        alert(message);
    };
///////////////////////////////////////////////////// Formulário do Cliente

    const handleOnClientesNewButtonClick = () => {
        setClienteData({});
        setContentType(CONTENT_TYPE_CLIENTE_FORM);
    };

    const handleOnClientesUpdateButtonClick = currentClienteData => {
        setClienteData(currentClienteData);
        setContentType(CONTENT_TYPE_CLIENTE_FORM);
    };

    const handleOnClienteFormSave = message => {
        alert(message);
    };

    ///////////////////////////////////////////////////// Formulário do Endereço

    const handleOnEnderecoNewButtonClick = () => {
        setEnderecoData({});
        setContentType(CONTENT_TYPE_ENDERECO_FORM);
    };

    const handleOnEnderecoUpdateButtonClick = currentEnderecoData => {
        setEnderecoData(currentEnderecoData);
        setContentType(CONTENT_TYPE_ENDERECO_FORM);
    };

    const handleOnEnderecoFormSave = message => {
        alert(message);
    };
    
    ///////////////////////////////////////////////////// Formulário do Telefone

    const handleOnTelefoneNewButtonClick = () => {
        setTelefoneData({});
        setContentType(CONTENT_TYPE_TELEFONE_FORM);
    };

    const handleOnTelefoneUpdateButtonClick = currentTelefoneData => {
        setTelefoneData(currentTelefoneData);
        setContentType(CONTENT_TYPE_TELEFONE_FORM);
    };

    const handleOnTelefoneFormSave = message => {
        alert(message);
    };

    //////////////////////////////////////////////////// Atendimento

    const handleOnAtendimentoNewButtonClick = () => {
        setAtendimentoData({});
        setContentType(CONTENT_TYPE_ATENDIMENTO_FORM);
    };

    const handleOnAtendimentoUpdateButtonClick = currentAtendimentoData => {
        setAtendimentoData(currentAtendimentoData);
        setContentType(CONTENT_TYPE_ATENDIMENTO_FORM);
    };

    const handleOnAtendimentoFormSave = message => {
        alert(message);
    };


    const getContent = () => {
        switch (contentType) {
            case CONTENT_TYPE_PROFISSIONAL:
                return (
                    <Profissional
                        onNewButtonClick={handleOnProfissionaisNewButtonClick}
                        onUpdateButtonClick={handleOnProfissionaisUpdateButtonClick}
                    />
                );
            case CONTENT_TYPE_PROFISSIONAL_FORM:
                const {
                    idProfissional ,
                    nomeProfissional,
                    cpfProfissional,
                    cnpjProfissional,
                    idEnderecoProfissional,  
                } = getProfissionalData();

                return (
                    <ProfissionalForm
                    profissionalId={idProfissional}
                    profissionalName={nomeProfissional}
                    profissionalCPF={cpfProfissional}
                    profissionalCNPJ={cnpjProfissional}
                    profissionalEndereco={idEnderecoProfissional}
                        onSave={handleOnProfissionalFormSave}
                    />
                );

                ///////////////////////////////////////////////////////////////////////

            case CONTENT_TYPE_CLIENTE:
                return (
                    <Cliente
                        onNewButtonClick={handleOnClientesNewButtonClick}
                        onUpdateButtonClick={handleOnClientesUpdateButtonClick}
                    />
                );
            case CONTENT_TYPE_CLIENTE_FORM:
                const {
                    idCliente ,
                    nomeCliente,
                    cpfCliente,
                    cnpjCliente,
                    idEnderecoCliente,  
                } = getClienteData();

                return (
                    <ClienteForm 
                    clienteId={idCliente}
                    clienteName={nomeCliente}
                    clienteCPF={cpfCliente}
                    clienteCNPJ={cnpjCliente}
                    clienteEndereco={idEnderecoCliente}
                        onSave={handleOnClienteFormSave}
                    />
                ); 
                /////////////////////////////////////////////////////

            case CONTENT_TYPE_ENDERECO:
                return (
                    <Endereco
                        onNewButtonClick={handleOnEnderecoNewButtonClick}
                        onUpdateButtonClick={handleOnEnderecoUpdateButtonClick}
                    />
                );
            case CONTENT_TYPE_ENDERECO_FORM:
                const {
                    idEndereco ,
                    ruaEndereco,
                    cidadeEndereco,
                    bairroEndereco,
                    complementoEndereco,
                    cepEndereco,  
                } = getEnderecoData();

                return (
                    <EnderecoForm
                    enderecoId={idEndereco}
                    enderecoRua={ruaEndereco}
                    enderecoCidade={cidadeEndereco}
                    enderecoBairro={bairroEndereco}
                    enderecoComplemento={complementoEndereco}
                    enderecoCep={cepEndereco}
                        onSave={handleOnEnderecoFormSave}
                    />
                ); 
                ///////////////////////////////////////////////////////

            case CONTENT_TYPE_TELEFONE:
                return (
                    <Telefone
                        onNewButtonClick={handleOnTelefoneNewButtonClick}
                        onUpdateButtonClick={handleOnTelefoneUpdateButtonClick}
                    />
                );
            case CONTENT_TYPE_TELEFONE_FORM:
                const {
                    idTelefone ,
                    numeroTelefone,
                    cpfTelefone,
                    cnpjTelefone,  
                } = getTelefoneData();

                return (
                    <TelefoneForm
                    telefoneId={idTelefone}
                    telefoneNumero={numeroTelefone}
                    telefoneCpf={cpfTelefone}
                    telefoneCnpj={cnpjTelefone}
                        onSave={handleOnTelefoneFormSave}
                    />
                );
            case CONTENT_TYPE_ATENDIMENTO:
                return (
                    <Atendimento
                        onNewButtonClick={handleOnAtendimentoNewButtonClick}
                        onUpdateButtonClick={handleOnAtendimentoUpdateButtonClick}
                    />
                );    
            case CONTENT_TYPE_ATENDIMENTO_FORM:
                const {
                    idAtendimento ,
                    descricaoAtendimento,
                    dataHoraAtendimento,
                    idClienteAtendimento,
                    idProfissionalAtendimento   
                } = getAtendimentoData();

                return (
                    <AtendimentoForm
                    atendimentoId={idAtendimento}
                    atendimentoDescricao={descricaoAtendimento}
                    atendimentoDataHora={dataHoraAtendimento}
                    atendimentoIdCliente={idClienteAtendimento}
                    atendimentoIdProfissional={idProfissionalAtendimento}

                        onSave={handleOnAtendimentoFormSave}
                    />
                );
            default:

                return 'Bem-vindo';
        }
    }

    ////////////////////////////////////////////////////////////////////////

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem
                    button
                    onClick={() => {
                        setContentType(CONTENT_TYPE_HOME);
                    }}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Início' />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setContentType(CONTENT_TYPE_PROFISSIONAL);
                    }}
                >
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary='Profissionais' />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setContentType(CONTENT_TYPE_CLIENTE);
                    }}
                >
                    <ListItemIcon>
                        <TransferWithinAStationRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Clientes' />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setContentType(CONTENT_TYPE_ENDERECO);
                    }}
                >
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary='Endereço' />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setContentType(CONTENT_TYPE_TELEFONE);
                    }}
                >
                    <ListItemIcon>
                        <SettingsPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary='Telefone' />
                </ListItem>
                <ListItem
                    button
                    onClick={() => {
                        setContentType(CONTENT_TYPE_ATENDIMENTO);
                    }}
                >
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary='Atendimento' />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                     noWrap
                    variant="h4" 
                    
                    >
                        I Service
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {getContent()}
            </main>
        </div>
    );
}

export default AppContent;