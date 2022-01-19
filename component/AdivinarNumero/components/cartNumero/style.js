import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedorCart:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#263238',
        margin: 20,
        padding: 50,
        borderRadius: 10,
        elevation: 4,
    },
    tituloCart:{
        color:'#B0BEC5',
        fontSize: 18,
    },
    contenedorButton:{
        width: "100%",
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        margin: 40,
    },
    imputCart:{
        backgroundColor: '#B0BEC545',
        width: '80%',
        margin: 20,
        borderRadius: 10,
        color: '#ffff',
        textAlign: 'center',
    }
})