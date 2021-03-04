import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import { Icon } from 'react-native-elements'
import normalize from 'react-native-normalize'
import BasicButton from '../../components/BasicButton'

export default class CompraFinalizadaScreen extends Component {
    handleRedirectCatalog() {
        this.props.navigation.replace('Main', {screen: 'Catalogo'})
    }

    render() {
        return (
            <View style={styles.root}>
                <Icon
                    underlayColor='#EAAB73'
                    name={'checkcircle'}
                    type={'antdesign'}
                    color={'#00AC30'}
                    size={normalize(150)}
                />
                <Text style={styles.text}>Compra Finalizada Com Sucesso!</Text>
                <BasicButton buttonName={'Entendido'} style={styles.button} onPress={() => { this.handleRedirectCatalog() }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: normalize(20),
        marginBottom: normalize(50),
        fontSize: normalize(25),
        fontWeight: 'bold',
        maxWidth: normalize(200),
        textAlign: 'center'
    },
    button: {
        width: normalize(200),
        height: normalize(50),
        borderRadius: 5
    }
})