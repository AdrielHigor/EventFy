import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import normalize from 'react-native-normalize'

interface Props {
    style: any,
    size: number,
    rounded: boolean,
    picture_thumb: string,
    nickname: string,
}

const ProfilePicture = (props: Props) => {
    return (
        <View style={[styles.profilePicture, props.style]}>

            <Avatar
                size={props.size}
                icon={{ name: 'user-circle-o', type: 'font-awesome' }}
                // source={{
                //     uri:
                //         `${web_protocol}://${base_domain}` + props.picture_thumb,
                // }}
                rounded={props.rounded}
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

ProfilePicture.defaultProps = {
    style: null,
    size: normalize(150),
    rounded: true,
    picture_thumb: null,
    nickname: 'Nickname',
}

export default ProfilePicture;