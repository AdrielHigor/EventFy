import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'
import PaperContainer from '../PaperContainer'
import { Icon } from 'react-native-elements'

export interface Props {
    listingTitle: string,
    navigation: any
}

const CatalogItem = (props: Props) => {
    return (
        <TouchableOpacity onPress={(e: Event) => { props.navigation.push('Main', { screen: "Detalhes" }) }}>
            <PaperContainer style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode='center'
                        style={styles.image}
                        source={require('../../assets/event.png')}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Cybersecurity Business Development Mission to South America</Text>
                    <Text style={styles.title}>Data e Hora: 24/03/21 às 16:30</Text>
                    <Text style={styles.title}>Entrada: R$ 16.00</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <Icon
                        underlayColor='#EAAB73'
                        name={'hearto'}
                        type={'antdesign'}
                        color='#000'
                        size={normalize(25)}
                        onPress={() => { console.log('teste') }}
                    />
                    <Icon
                        underlayColor='#EAAB73'
                        name={'shopping-cart'}
                        color='#000'
                        onPress={() => { console.log('teste') }}
                        size={normalize(25)}
                    />
                </View>
            </PaperContainer >
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    imageContainer: {
        width: normalize(70),
        height: normalize(70),
        alignItems: 'flex-start',
        marginRight: normalize(5, 'width')
    },
    titleContainer: {
        justifyContent: 'flex-start',
        width: "100%"
    },
    title: {
        color: "#000",
        fontSize: normalize(14),
        fontWeight: 'bold',
        maxWidth: normalize(250)
    },
    image: {
        height: normalize(70),
        width: "100%",
    },
    infoContainer: {
        height: normalize(80),
        width: normalize(225),
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    actionsContainer: {
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    }
})

CatalogItem.defaultProps = {
    listingTitle: '',
    navigation: null
}

export default CatalogItem;