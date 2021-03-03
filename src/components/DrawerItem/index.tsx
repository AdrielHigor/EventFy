import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
import normalize from 'react-native-normalize'
import { Icon } from 'react-native-elements'
import NotificationCircle from '../NotificationCircle'

export interface Props {
    buttonText: string,
    buttonStyle: any,
    icon: string,
    iconType: string,
    notificationCircle: boolean
}

const DrawerItem = (props: Props) => {
    return (
        <TouchableOpacity
            style={styles.dataContainer}
            onPress={() => {
                // handleLogOut();
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
                    null
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
    iconType: 'font-awesome'
}

export default DrawerItem;