import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import {styles} from './style';

const CartNumero = ({guardarNumero, numero, confirmarNumero, confirmar, comenzarJuego, valorSeleccionado}) =>{
    

    const confirmarContenedor = confirmar ? 
    ( <View style={styles.contenedorRespuesta}>
        <Text style={styles.tituloRespuesta}>El numero seleccionado es:</Text>
        <Text style={styles.numero}>{valorSeleccionado}</Text>
        <Button title='Empezar Juego' color='#016A0C' onPress={()=>comenzarJuego()}/>
    </View> ) : null

    return (
        <View style={styles.contenedorCart}>
            <Text style={styles.tituloCart}>Elija un numero</Text>
            <TextInput 
                style={styles.imputCart} 
                onChangeText={(num)=>guardarNumero(num)} 
                autoFocus={true} 
                autoComplete='off' 
                keyboardType='numeric' 
                value={numero}
            />
            <View style={styles.contenedorButton}>
                <Button color={'#B0BEC545'} title='Limpiar'/>
                <Button onPress={()=>confirmarNumero()} color={'#B0BEC545'} title='Confirmar'/>
            </View>
            {confirmarContenedor}
        </View>
        )
}

export default CartNumero;