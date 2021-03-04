import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Alert
} from 'react-native'
import normalize from 'react-native-normalize'
import signup from '../../api/requests/auth/signup'
import BasicButton from '../../components/BasicButton'
import BasicInput from '../../components/BasicInput'
import PaperContainer from '../../components/PaperContainer'

type Props = {
    navigation: any,
}

type State = {
    full_name: string,
    email: string,
    cpf: string,
    password: string,
    confirm_password: string
}

export default class RegisterScreen extends Component<Props, State> {

    async handleRegister() {
        try {
            if (this.state.password != this.state.confirm_password) {
                console.log('teste')
                throw { code: '001', data: 'Senhas não são iguais' }
            }
            await signup(this.state.full_name, this.state.email, this.state.cpf, this.state.password)
            this.props.navigation.push('Auth', { screen: "Login" })
        } catch (error) {
            let message = error.code == '001' ? error.data : "Revise seus dados e tente novamente."

            Alert.alert(
                "Falha no Cadastro!",
                message,
                [
                    { text: "Ok", onPress: () => { return } }
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
                    <View style={styles.inputContainer}>
                        <BasicInput placeholder={"Nome Completo"} handleChange={(e: Event) => { this.setState({ full_name: e }) }} />
                        <BasicInput placeholder={"Email@email.com"} handleChange={(e: Event) => { this.setState({ email: e }) }} />
                        <BasicInput placeholder={"CPF"} handleChange={(e: Event) => { this.setState({ cpf: e }) }} />
                        <BasicInput placeholder={"Senha"} password={true} handleChange={(e: Event) => { this.setState({ password: e }) }} />
                        <BasicInput placeholder={"Confirmar Senha"} password={true} handleChange={(e: Event) => { this.setState({ confirm_password: e }) }} />
                    </View>
                    <BasicButton onPress={() => { this.handleRegister() }} buttonName={'Cadastrar'} style={styles.registerButton} />
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
    registerButton: {
        width: normalize(200),
        marginBottom: normalize(10),
        height: normalize(40)
    }
})