import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedorPantallaJuego:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#263238',
        margin: 20,
        padding: 50,
        borderRadius: 10,
        elevation: 4,
    },
    subtitulo:{
        color: '#ffff',
        fontSize: 20,
        paddingBottom: 10,
    },
    contenedorButton:{
        width: "100%",
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        margin: 20,
    },
})