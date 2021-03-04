import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import normalize from 'react-native-normalize'

export interface Props {
    buttonName: string,
    color: string,
    style: any,
    onPress: any
}

const BasicButton = (props: Props) => {
    return (
        <TouchableOpacity onPress={(e: Event) => { props.onPress(e) }} style={[styles.container, { backgroundColor: props.color }, props.style]}>
            <Text style={styles.buttonText}>{props.buttonName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 2,
        minWidth: normalize(100),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
    buttonText: {
        color: "white",
        fontSize: normalize(18)
    }
})

BasicButton.defaultProps = {
    buttonName: 'Button',
    color: '#00AC45',
    style: null,
    onPress: (e: Event) => { console.log(e) }
}

export default BasicButton;