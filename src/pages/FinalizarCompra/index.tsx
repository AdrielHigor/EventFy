import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
} from 'react-native'
import normalize from 'react-native-normalize'
import BasicButton from '../../components/BasicButton'
import PaperContainer from '../../components/PaperContainer'
import RadioButton from '../../components/RadioButton'
import TextButton from '../../components/TextButton'

export default class FinalizarCompraScreen extends Component {

    handleRedirectFinish() {
        this.props.navigation.navigate('Main', { screen: 'CompraFinalizada' })
    }

    render() {
        return (
            <ScrollView style={styles.root}>
                <PaperContainer style={styles.selectContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Endereço de Entrega</Text>
                    </View>
                    <RadioButton icon={'map-marker'} iconColor={"#FF5C00"} iconType={"material-community"} label={"Entregar Em Rua Dom Pedro II - Bairro - 230"} style={{ marginRight: normalize(10) }} />
                    <TextButton text={'Mudar Endereço'} />

                    <RadioButton icon={'email'} iconColor={"#FF5C00"} iconType={"material-community"} label={"Entrega por email em Email@Email.com"} style={{ marginRight: normalize(10) }} />
                    <TextButton text={'Mudar Email'} />
                </PaperContainer>




                <PaperContainer>

                </PaperContainer>


                <PaperContainer style={styles.selectContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Forma de Pagamento</Text>
                    </View>
                    <RadioButton icon={'barcode'} iconType={"antdesign"} label={"Boleto Bancário"} style={{ marginRight: normalize(10) }} />
                    <RadioButton icon={'cc-visa'} iconType={"font-awesome-5"} label={"Cartão de Crédito"} style={{ marginRight: normalize(10) }} />
                </PaperContainer>
                <PaperContainer style={styles.priceContainer}>
                    <Text style={styles.title}>TOTAL + FRETE</Text>
                    <Text style={styles.title}>R$ 16,00</Text>
                </PaperContainer>
                <View style={styles.buttonView}>
                    <BasicButton buttonName={'FINALIZAR COMPRA'} style={styles.finishButton} onPress={() => { this.handleRedirectFinish() }} />
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: normalize(10)
    },
    finishButton: {
        height: normalize(50),
        width: normalize(300, 'width'),
        borderRadius: 5
    },
    buttonView: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(20)
    },
    selectContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleContainer: {
        marginBottom: normalize(20)
    },
    title: {
        fontSize: normalize(18),
        fontWeight: 'bold'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})