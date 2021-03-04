import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import normalize from 'react-native-normalize'
import BasicInput from '../BasicInput'
import SearchBar from '../SearchBar'

interface Props {
    scene: any
}

const Header = (props: Props) => {

    return (
        <View style={styles.headerView}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>EventFy</Text>
            </View>
            {
                props.scene.route.name == "Busca" ?
                    <SearchBar /> :
                    null
            }
            {
                props.scene.route.name == "Login" || props.scene.route.name == "Register" ?
                    null :
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.menuButton}>
                            <Icon
                                underlayColor='#EAAB73'
                                name='search'
                                color='#fff'
                                size={normalize(25)}
                                onPress={() => { props.scene.descriptor.navigation.push('Main', { screen: 'Busca' }) }}
                            />
                        </View>
                        <View style={styles.menuButton}>
                            <Icon
                                underlayColor='#EAAB73'
                                name='menu'
                                color='#fff'
                                size={normalize(25)}
                                onPress={() => { props.scene.descriptor.navigation.toggleDrawer() }}
                            />
                        </View>
                    </View>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    headerView: {
        height: normalize(55),
        backgroundColor: '#0029FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        marginLeft: normalize(15),
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoText: {
        color: '#fff',
        fontSize: normalize(18),
        fontWeight: 'bold',
    },
    menuButton: {
        marginRight: normalize(15),
    },
    searchContainer: {
        width: normalize(200),
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Header;