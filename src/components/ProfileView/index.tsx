import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export interface Props {
    children: React.ReactNode,
    style: any
}

const ProfileView = (props: Props) => {
    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['rgba(0, 32, 94, 1)', 'rgba(0, 102, 255, 1)']}
            style={[styles.profile, props.style]}
        >
            {props.children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    profile: {
        backgroundColor: '#ffb86c',
    }
})

export default ProfileView;