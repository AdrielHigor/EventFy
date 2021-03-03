import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Input } from 'react-native-elements'
import normalize from 'react-native-normalize'

export interface Props {
    placeholder: string,
    handleChange: any,
    value: string,
    password: boolean
}

const BasicInput = (props: Props) => {
    return (
        <Input
            value={props.value}
            placeholder={props.placeholder}
            inputContainerStyle={{ borderBottomColor: '#6B6B6B', height: normalize(30) }}
            placeholderTextColor="#6B6B6B"
            textAlign="center"
            secureTextEntry={props.password}
            onChangeText={(event) => {
                props.handleChange(event)
            }}
        />
    )
}

const styles = StyleSheet.create({

})

BasicInput.defaultProps = {
    placeholder: 'text',
    handleChange: (e: Event) => { console.log(e) },
    value: null,
    password: false
}

export default BasicInput;