import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet
} from 'react-native'
import normalize from 'react-native-normalize'
import ProfileView from '../ProfileView';
import ProfilePicture from '../ProfilePicture';
import DrawerItem from '../DrawerItem';

import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
    navigation: any
}

export default function Drawer(props: Props) {
    const [logged, setLogged] = useState(false)
    const [fullName, setFullName] = useState('nickname')

    const checkIfLogged = async () => {
        let user = await AsyncStorage.getItem('@userToken')
        let full_name = await AsyncStorage.getItem('@userName')
        setFullName(full_name ? full_name : 'nickname')
        setLogged(user ? true : false)
    }

    const logout = async () => {
        await AsyncStorage.removeItem('@userToken')
        await AsyncStorage.removeItem('@userName')
        props.navigation.replace("Main", { screen: 'Catalogo' })
    }

    useEffect(() => {
        checkIfLogged()
    })

    const handleRedirectLogin = (e: Event) => {
        props.navigation.push("Auth", { screen: 'Login' })
    }

    return (
        <View style={styles.root}>
            <ProfileView style={styles.customProfileView}>
                <ProfilePicture rounded={true} style={styles.customProfilePicture} nickname={fullName} picture_thumb={'picture_thumb'} size={normalize(150)} />
            </ProfileView>
            {logged ?
                <View style={styles.root}>
                    <View>
                        <DrawerItem buttonText={"Minhas Entradas"} icon={"ticket"} notificationCircle />
                        <DrawerItem buttonText={"Carrinho"} icon={"shopping-cart"} notificationCircle />
                    </View>
                    <View style={styles.bottomButtons}>
                        <DrawerItem buttonText={"Desconectar"} buttonStyle={{ color: "red" }} onPress={() => { logout() }} />
                    </View>
                </View>
                :
                <View>
                    <DrawerItem buttonText={"Fazer Login"} icon={"login"} iconType={'antdesign'} onPress={(e: Event) => { handleRedirectLogin(e) }} />
                </View>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column'
    },
    customProfileView: {
        height: normalize(180),
        alignItems: 'center',
        justifyContent: 'center',
    },
    customProfilePicture: {
        marginBottom: normalize(20)
    },
    bottomButtons: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})