// import React, { createRef } from "react";
// import axios from "axios";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// import MyButton from "./MyButton";
// import MyInput from "./MyInput";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   saveButtonGrid: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
// }));

// function CadastroEndereco(props) {
  

//   const inputRuaRef = createRef();
//   const inputBairroRef = createRef();
//   const inputCidadeRef = createRef();
//   const inputCepRef = createRef();
//   const inputComplementoRef = createRef();

//   const getinputRuaRef = () => {
//     return inputRuaRef.current;
//   };

//   const getinputBairroRef = () => {
//     return inputBairroRef.current;
//   };

//   const getinputCidadeRef = () => {
//     return inputCidadeRef.current;
//   };

//   const getinputCepRef = () => {
//     return inputCepRef.current;
//   };

//   const getenderecoComplementoRef = () => {
//     return inputComplementoRef.current;
//   };

//   const handleOnButtonSaveClick = async () => {
//     alert("sdfsdfsdfsdfsdfsdf");
//     await axios.post("/api/Endereco", {
//       rua: getinputRuaRef().getValue(),
//       bairro: getinputBairroRef().getValue(),
//       cidade: getinputCidadeRef().getValue(),
//       cep: getinputCepRef().getValue(),
//       complemento: getenderecoComplementoRef().getValue(),
//     });

//   }

// }



// function EnderecoForm(props) {
  // const { 
  //   enderecoId, 
  //   enderecoRua,
  //   enderecoBairro,
  //   enderecoCidade,
  //   enderecoCep,
  //   enderecoComplemento,
  //   onSave,
  //   } = props;

//   const inputRuaRef = createRef();
//   const inputBairroRef = createRef();
//   const inputCidadeRef = createRef();
//   const inputCepRef = createRef();
//   const inputComplementoRef = createRef();

//   const getinputRuaRef = () => {
//     return inputRuaRef.current;
//   };

//   const getinputBairroRef = () => {
//     return inputBairroRef.current;
//   };

//   const getinputCidadeRef = () => {
//     return inputCidadeRef.current;
//   };

//   const getinputCepRef = () => {
//     return inputCepRef.current;
//   };

//   const getenderecoComplementoRef = () => {
//     return inputComplementoRef.current;
//   };

//   const handleOnButtonSaveClick = async () => {
//     alert("sdfsdfsdfsdfsdfsdf");
//     if (enderecoId) {
//       await axios.post("/api/Endereco", {
//         rua: getinputRuaRef().getValue(),
//         bairro: getinputBairroRef().getValue(),
//         cidade: getinputCidadeRef().getValue(),
//         cep: getinputCepRef().getValue(),
//         complemento: getenderecoComplementoRef().getValue(),
//       });

//         id: enderecoId,
//         rua: getinputRuaRef().getValue(),
//         bairro: getinputBairroRef().getValue(),
//         cidade: getinputCidadeRef().getValue(),
//         cep: getinputCepRef().getValue(),
//         complemento: getenderecoComplementoRef().getValue(),

//       onSave("Endereço alterado com sucesso");
//     } else {
//       await axios.post("/api/Endereco", {
//         rua: getinputRuaRef().getValue(),
//         bairro: getinputBairroRef().getValue(),
//         cidade: getinputCidadeRef().getValue(),
//         cep: getinputCepRef().getValue(),
//         complemento: getenderecoComplementoRef().getValue(),
//       });

//       onSave("Endereço cadastrado com sucesso");
//     }
//   };

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <MyInput
//             fullWidth
//             ref={inputRuaRef}
//             defaultValue={enderecoRua}
//             label="Rua: "
//             variant="outlined"
//             size="small"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <MyInput
//             fullWidth
//             ref={inputBairroRef}
//             defaultValue={enderecoBairro}
//             label="Bairro: "
//             variant="outlined"
//             size="small"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <MyInput
//             fullWidth
//             ref={inputCidadeRef}
//             defaultValue={enderecoCidade}
//             label="Cidade: "
//             variant="outlined"
//             size="small"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <MyInput
//             fullWidth
//             ref={inputCepRef}
//             defaultValue={enderecoCep}
//             label="Cep: "
//             variant="outlined"
//             size="small"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <MyInput
//             fullWidth
//             ref={inputComplementoRef}
//             defaultValue={enderecoComplemento}
//             label="Complemento: "
//             variant="outlined"
//             size="small"
//           />
//         </Grid>
//         <Grid item xs={12} className={classes.saveButtonGrid}>
//           <MyButton text="Salvar" onClick={handleOnButtonSaveClick} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

//export default CadastroEndereco;
