import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {styles} from './style';

const Header = () =>{
    return (
        <View>
            <Text style={styles.tituloHeader}>Adivina el Numero</Text>
        </View>
    )
}

export default Header;