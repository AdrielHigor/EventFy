import React from 'react'
import {
    StyleSheet,
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

interface Props {
    children: React.ReactNode
}

const GradientView = (props: Props) => {
    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1.7, y: 0.8 }}
            colors={['rgba(0, 102, 255, 1)', 'rgba(0, 32, 94, 1)']}
            style={styles.linearGradient}
        >
            {props.children}
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

GradientView.defaultProps = {
    children: null
}

export default GradientView