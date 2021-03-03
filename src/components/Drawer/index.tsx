import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'



export default function Drawer() {

    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.dataContainer}
                onPress={() => {
                    // handleLogOut();
                }}>
                <Text style={styles.signoutText}>
                    Desconectar
          </Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column'
    },
    dataContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: normalize(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    signoutText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: normalize(16)
    }
})