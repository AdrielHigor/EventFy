import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import normalize from 'react-native-normalize'

export interface Props {
    style: any,
    size: any,
    rounded: boolean,
    picture_thumb: string,
    nickname: string,
}

const ProfilePicture = (props: Props) => {
    return (
        <View style={[styles.profilePicture, props.style]}>

            <Avatar
                size={props.size || normalize(150)}
                icon={{ name: 'user-circle-o', type: 'font-awesome' }}
                // source={{
                //     uri:
                //         `${web_protocol}://${base_domain}` + props.picture_thumb,
                // }}
                rounded={props.rounded || true}
                activeOpacity={0.7}
            />
            <Text style={[styles.username, { color: '#ffff' }]}>{props.nickname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profilePicture: {
        alignItems: 'center'
    },
    username: {
        textAlign: 'center',
        maxWidth: normalize(200),
        fontSize: normalize(20)
    },
})

export default ProfilePicture;