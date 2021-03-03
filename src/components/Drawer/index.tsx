import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native'
import normalize from 'react-native-normalize'
import ProfileView from '../ProfileView';
import ProfilePicture from '../ProfilePicture';
import DrawerItem from '../DrawerItem';

export default function Drawer() {

    return (
        <View style={styles.root}>
            <ProfileView style={styles.customProfileView}>
                <ProfilePicture rounded={true} style={styles.customProfilePicture} nickname={'nickname'} picture_thumb={'picture_thumb'} size={normalize(150)} />
            </ProfileView>
            <View>
                <DrawerItem buttonText={"Minhas Entradas"} icon={"ticket"} notificationCircle />
                <DrawerItem buttonText={"Carrinho"} icon={"shopping-cart"} notificationCircle />
            </View>
            <View style={styles.bottomButtons}>
                <DrawerItem buttonText={"Desconectar"} buttonStyle={{ color: "red" }} />
            </View>
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