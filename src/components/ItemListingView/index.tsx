import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import normalize from 'react-native-normalize'
import CatalogItem from '../CatalogItem'

export interface Props {
    listingTitle: string,
    navigation: any
}

const ItemListingView = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.listingTitle}</Text>
            </View>
            <CatalogItem navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: normalize(10, 'width')
    },
    titleContainer: {
        justifyContent: 'flex-start',
        width: "100%",
        marginBottom: normalize(15)
    },
    title: {
        color: "#000",
        fontSize: normalize(16),
        fontWeight: 'bold'
    }
})

ItemListingView.defaultProps = {
    listingTitle: '',
    navigation: null
}

export default ItemListingView;