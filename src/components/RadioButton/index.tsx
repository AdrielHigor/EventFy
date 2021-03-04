import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'
import IconText from '../IconText'

interface Props {
    selected: boolean,
    style: any,
    icon: string,
    iconColor: string,
    iconType: string,
    label: string,
    onPress: any
}

const RadioButton = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.radioContainer}>
            <View style={[styles.mainCircle, props.style]}>
                {props.selected ?
                    <View style={styles.innerCircle} /> :
                    null
                }
            </View>
            <IconText icon={props.icon} iconColor={props.iconColor} iconType={props.iconType} text={props.label} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainCircle: {
        width: normalize(18),
        height: normalize(18),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: "#C6C6C6",
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        width: normalize(10),
        height: normalize(10),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#000'
    },
    radioContainer: {
        flexDirection: 'row'
    },
})

RadioButton.defaultProps = {
    selected: false,
    style: null,
    icon: null,
    iconColor: "#000",
    iconType: "antdesign",
    label: null,
    onPress: (e: Event) => { console.log(e) }
}

export default RadioButton;

