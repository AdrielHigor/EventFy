import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import normalize from 'react-native-normalize'
import BasicButton from '../../components/BasicButton'
import HotSwiper from '../../components/HotSwiper'
import ItemListingView from '../../components/ItemListingView'

export default class CatalogoScreen extends Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.swiperView}>
                    <HotSwiper />
                </View>
                <View style={styles.categoryView}>
                    <BasicButton buttonName={"Destaques"} color={"#0047FF"} />
                    <BasicButton buttonName={"Ofertas"} color={"#0047FF"} />
                    <BasicButton buttonName={"Novidades"} color={"#0047FF"} />
                </View>
                <ItemListingView listingTitle={'Eventos em Destaque'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    swiperView: {
        height: normalize(200),
        width: "100%",
        marginTop: normalize(10),
    },
    categoryView: {
        marginTop: normalize(10),
        height: normalize(40),
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: normalize(10)
    }
})  