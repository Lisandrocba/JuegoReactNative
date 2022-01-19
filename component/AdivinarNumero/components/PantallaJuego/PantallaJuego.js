import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {styles} from './style';
import NumeroOponente from '../cartNumero/NumeroOponente/NumeroOponente';
import { numeroRandom } from './numeroRandom/NumeroRandom';

const PantallaJuego =({opciones})=>{
    const [currentGuess, setCurrentGuess] = useState(numeroRandom(0, 100, opciones));

    return(
        <View style={styles.contenedorPantallaJuego }>
            <Text style={styles.subtitulo}>Suposicion del oponente:</Text>
            <NumeroOponente numeroRan={currentGuess}/>
            <View style={styles.contenedorButton}>
                <Button color={'#B0BEC545'} title='mayor' onPress={()=>{}}/>
                <Button color={'#B0BEC545'} title='menor' onPress={()=>{}}/>
            </View>
        </View>
    )
}

export default PantallaJuego;