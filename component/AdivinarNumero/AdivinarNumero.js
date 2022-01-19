import React, {useState} from 'react';
import { styles } from './style';
import {
    View, 
    Text,
} from 'react-native';
import Header from './components/Header/Header';
import CartNumero from './components/cartNumero/CartNumero'

const AdivinarNumero = () =>{
    const [numero, setNumero] = useState('');
    const [valorSeleccionado, setValorSeleccionado] = useState('');
    const [confirmar, setConfirmar] = useState(false);

    const guardarNumero =(num)=>{
        setNumero(num)
    }
    
    const confirmarNumero =()=>{
        const valor = parseInt(numero);
        if( isNaN(valor) || valor<=0 || valor>100 ) return;

        setConfirmar(true);
        setNumero('');
        setValorSeleccionado(valor);

    }

    return (
        <View style={styles.contenedorAdivinaNumero}>
            <Header />
            <Text style={styles.tituloAdivinarNumero}>Comienza el juego</Text>
            <CartNumero numero={numero} guardarNumero={guardarNumero}  confirmarNumero={confirmarNumero}/>
        </View>
    )

}


export default AdivinarNumero;