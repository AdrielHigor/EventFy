import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import normalize from 'react-native-normalize'

export interface Props {
    children: React.ReactNode,
    style: any
}

const PaperContainer = (props: Props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#fff',
        minWidth: normalize(50),
        minHeight: normalize(50),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        elevation: 5,
        padding: normalize(10)
    },
})

PaperContainer.defaultProps = {
    children: null,
    style: null
}

export default PaperContainer;