import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Icon } from 'react-native-elements'
import NotificationCircle from '../NotificationCircle'

export interface Props {
    buttonText: string,
    buttonStyle: any,
    icon: string,
    iconType: string,
    notificationCircle: boolean,
    onPress: any,
}

const DrawerItem = (props: Props) => {
    return (
        <TouchableOpacity
            style={styles.dataContainer}
            onPress={() => {
                props.onPress
            }}>
            {
                props.icon ?
                    <Icon
                        underlayColor='#EAAB73'
                        name={props.icon}
                        type={props.iconType}
                        color='#000'
                        size={normalize(25)}
                    /> :
                    null
            }
            <Text style={[styles.buttonText, props.buttonStyle]}>
                {props.buttonText}
            </Text>
            {
                props.notificationCircle ?
                    <NotificationCircle /> :
                    <View style={{ width: normalize(20, 'width') }} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: normalize(50),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#CBCBCB',
        flexDirection: 'row'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: normalize(16),
        textAlign: 'center',
        width: normalize(150)
    },
})

DrawerItem.defaultProps = {
    buttonStyle: null,
    icon: null,
    notificationCircle: false,
    iconType: 'font-awesome',
    onPress: null
}

export default DrawerItem;