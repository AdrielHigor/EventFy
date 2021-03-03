import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import normalize from 'react-native-normalize'

interface Props {
    notificationCount: number
}

const NotificationCircle = (props: Props) => {
    return (
        <View style={styles.notification}>
            <Text style={styles.notificationText}>{props.notificationCount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notification: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        width: normalize(20, 'width'),
        height: normalize(20, 'width'),
        borderRadius: 10,
    },
    notificationText: {
        color: "white",
        fontWeight: 'bold'
    }
})

NotificationCircle.defaultProps = {
    notificationCount: 0
}

export default NotificationCircle;