import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native'
import { Icon } from 'react-native-elements'
import normalize from 'react-native-normalize'

import signin from '../../api/requests/auth/signin'

import BasicButton from '../../components/BasicButton'
import BasicInput from '../../components/BasicInput'
import PaperContainer from '../../components/PaperContainer'

type Props = {
    navigation: any,
}

type State = {
    username: string,
    password: string
}

export default class LoginScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    handleRedirectRegister() {
        this.props.navigation.push('Auth', { screen: "Register" })
    }

    async handleLogin() {
        try {
            await signin(this.state.username, this.state.password)
            this.props.navigation.push('Main', { screen: "Catalogo" })
        } catch (error) {
            Alert.alert(
                "Falha na Autenticação!",
                "Email ou Senha inválidos.",
                [
                    { text: "Ok", onPress: () => {return} }
                ],
                { cancelable: true }
            );
        }
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
                        <BasicInput placeholder={"email@email.com"} handleChange={(e: Event) => { this.setState({ username: e }) }} />
                        <BasicInput placeholder={"senha"} password={true} handleChange={(e: Event) => { this.setState({ password: e }) }} />
                    </View>
                    <BasicButton buttonName={'Entrar'} style={styles.loginButton} onPress={() => { this.handleLogin() }} />
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
        height: normalize(40),
        marginBottom: normalize(10)
    }
})