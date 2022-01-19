import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {styles} from './style'

const NumeroOponente=({numeroRan})=>{
    return (
        <View>
            <Text style={styles.numero}>{numeroRan}</Text>
        </View>
    )
}

export default NumeroOponente;