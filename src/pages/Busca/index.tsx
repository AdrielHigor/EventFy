import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import ItemListingView from '../../components/ItemListingView'


export default class BuscaScreen extends Component {
    render() {
        return (
            <View>
                <ItemListingView listingTitle={"Resultados da Pesquisa"} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
})