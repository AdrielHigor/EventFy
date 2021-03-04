import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import normalize from 'react-native-normalize'
import BasicButton from '../../components/BasicButton'
import HotSwiper from '../../components/HotSwiper'
import IconText from '../../components/IconText'
import PaperContainer from '../../components/PaperContainer'

export default class DetalhesScreen extends Component {

    handleRedirectBuyNow() {
        this.props.navigation.push('Main', { screen: 'FinalizarCompra' })
    }

    render() {
        return (
            <ScrollView style={styles.root}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Simpósio de Pesquisa Inovação e Pós-Graduação do IFPB - Instituto Federal da Paraíba</Text>
                </View>
                <View style={styles.swiperView}>
                    <HotSwiper />
                </View>
                <PaperContainer style={styles.basicInfoContainer}>
                    <View style={styles.root}>
                        <View style={styles.priceTextContainer}>
                            <Text style={styles.priceText}>R$ 20,00</Text>
                        </View>
                        <IconText icon={'barcode'} iconType={"antdesign"} text={"À vista no Boleto"} style={styles.iconText} />
                        <IconText icon={'cc-visa'} iconType={"font-awesome-5"} text={"À vista no Cartão"} style={styles.iconText} />
                    </View>
                    <View style={styles.root}>
                        <BasicButton buttonName={"Comprar Agora"} style={styles.basicButton} onPress={() => { this.handleRedirectBuyNow() }} />
                        <TouchableOpacity>
                            <IconText icon={'shopping-cart'} text={"Adicionar ao Carrinho"} style={styles.iconText} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconText icon={'hearto'} iconType={'antdesign'} text={"Adicionar aos Favoritos"} style={styles.iconText} />
                        </TouchableOpacity>
                    </View>
                </PaperContainer>
                <PaperContainer style={styles.basicInfoContainer}>
                    <View style={styles.root}>
                        <IconText icon={'checkcircle'} iconColor={'#00AC30'} iconType={'antdesign'} text={"Instituto Federal da Paraíba"} iconRight style={styles.iconText} textStyle={styles.title} />
                        <View style={{ flexDirection: 'row', marginTop: normalize(10) }}>
                            <View style={styles.root}>
                                <Text>detalhe da instituição: detalhe</Text>
                                <Text>detalhe da instituição: detalhe</Text>
                            </View>
                            <View style={styles.root}>
                                <Text>detalhe da instituição: detalhe</Text>
                                <Text>detalhe da instituição: detalhe</Text>
                            </View>
                        </View>
                    </View>
                </PaperContainer>
                <PaperContainer style={styles.basicInfoContainer}>
                    <View style={styles.root}>
                        <Text style={styles.priceText}>Detalhes</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget mattis quam, at venenatis massa. Fusce pellentesque nunc neque, vel mattis libero venenatis in. Donec lacinia porttitor mi et consectetur. Vivamus vestibulum malesuada libero id luctus. Fusce malesuada tristique erat, et tempus libero.</Text>
                    </View>
                </PaperContainer>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    swiperView: {
        height: normalize(220),
        width: "100%",
        marginTop: normalize(10),
    },
    title: {
        fontSize: normalize(18),
        fontWeight: 'bold'
    },
    titleContainer: {
        padding: normalize(10),
    },
    basicInfoContainer: {
        flexDirection: 'row',
        margin: normalize(8),
    },
    basicButton: {
        height: normalize(50),
        borderRadius: 5
    },
    priceText: {
        fontSize: normalize(25),
        fontWeight: 'bold'
    },
    priceTextContainer: {
        height: normalize(50),
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    iconText: {
        marginTop: normalize(10)
    }
})