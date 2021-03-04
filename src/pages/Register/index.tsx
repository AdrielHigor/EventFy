import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import normalize from 'react-native-normalize'
import BasicButton from '../../components/BasicButton'
import BasicInput from '../../components/BasicInput'
import PaperContainer from '../../components/PaperContainer'

export default class RegisterScreen extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.root}>
                <PaperContainer style={styles.paperContainer}>
                    <View style={styles.inputContainer}>
                        <BasicInput placeholder={"Nome Completo"} />
                        <BasicInput placeholder={"Email@email.com"} />
                        <BasicInput placeholder={"CPF"} />
                        <BasicInput placeholder={"Senha"} password={true} />
                        <BasicInput placeholder={"Confirmar Senha"} password={true} />
                    </View>
                    <BasicButton buttonName={'Cadastrar'} style={styles.loginButton} />
                </PaperContainer>
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
    inputContainer: {
        width: normalize(250),
        marginTop: normalize(40),
        marginBottom: normalize(20)
    },
    paperContainer: {
        width: "80%",
    },
    registerButton: {
        marginTop: normalize(50)
    },
    registerText: {
        color: 'red'
    },
    loginButton: {
        width: normalize(200),
        marginBottom: normalize(10)
    }
})