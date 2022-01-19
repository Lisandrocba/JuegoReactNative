import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import {styles} from './style';

const CartNumero = ({guardarNumero, numero, confirmarNumero}) =>{
    

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
        </View>
        )
}

export default CartNumero;