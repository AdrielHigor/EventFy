import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import normalize from 'react-native-normalize'

interface Props {
    text: string,
    onPress: any,
    style: any,
}


const TextButton = (props: Props) => {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: normalize(10),
        marginBottom: normalize(10)
    },
    text: {
        fontSize: normalize(16),
        color: "#FF0000"
    }
})

TextButton.defaultProps = {
    text: null,
    onPress: (e: Event) => { console.log(e) },
    style: null
}

export default TextButton;