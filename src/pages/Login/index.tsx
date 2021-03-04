import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'
import normalize from 'react-native-normalize'
import BasicButton from '../../components/BasicButton'
import BasicInput from '../../components/BasicInput'
import PaperContainer from '../../components/PaperContainer'


export default class LoginScreen extends Component {

    handleRedirectRegister() {
        this.props.navigation.push('Auth', { screen: "Register" })
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.root}>
                <PaperContainer style={styles.paperContainer}>
                    <Icon
                        underlayColor='#EAAB73'
                        name={'loading1'}
                        type={'antdesign'}
                        color='#0038FF'
                        size={normalize(90)}
                        style={{ marginBottom: normalize(40) }}
                    />
                    <View style={styles.inputContainer}>
                        <BasicInput placeholder={"email@email.com"} />
                        <BasicInput placeholder={"senha"} password={true} />
                    </View>
                    <BasicButton buttonName={'Entrar'} style={styles.loginButton} />
                    <Text>Esqueceu a senha?</Text>
                    <TouchableOpacity style={styles.registerButton} onPress={() => { this.handleRedirectRegister() }}>
                        <Text style={styles.registerText}>Registrar-se</Text>
                    </TouchableOpacity>
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