import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import { Icon } from 'react-native-elements'
import normalize from 'react-native-normalize'

interface Props {
    text: string,
    icon: string,
    iconType: string,
    size: number,
    style: any,
    iconRight: boolean,
    iconColor: string,
    textStyle: any
}

const IconText = (props: Props) => {
    const direction = props.iconRight ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : { flexDirection: 'row' }
    const margin = props.iconRight ? { marginLeft: normalize(10) } : { marginRight: normalize(10) }

    return (
        <View style={[props.style, direction]}>
            <Icon
                underlayColor='#EAAB73'
                name={props.icon}
                type={props.iconType}
                color={props.iconColor}
                size={props.size}
                style={margin}
            />
            <Text style={props.textStyle}>{props.text}</Text>
        </View>
    )
}

IconText.defaultProps = {
    text: 'text',
    icon: null,
    iconType: 'material',
    size: normalize(20),
    style: null,
    iconRight: false,
    iconColor: "#000",
    textStyle: null
}

export default IconText