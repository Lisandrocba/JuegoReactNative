import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    titulo:{
      color:'black',
      fontSize:30,
      margin: 5,
      textAlign: 'center',
    },
    contenedorEncabezado:{
      backgroundColor:'#E4E4E4',
      width: '100%',
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    textImput:{
      width: 200,
    },
    conteinerText:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    contenedorList:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contenedorTask:{
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 'auto',
      borderRadius: 5,
      backgroundColor: '#E4E4E4',
      margin: 10,
    },
    contenedorTaskGreen:{
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 'auto',
      borderRadius: 5,
      backgroundColor: 'green',
      margin: 10,
    },
    text:{
      color: 'black',
      fontSize: 20,
      padding: 10,
      textAlign: 'center',
    },
    contenedorListaBoton:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });