import React from 'react'
import { Input } from 'react-native-elements'
import normalize from 'react-native-normalize'

interface Props {
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
            inputStyle={{ marginBottom: 0 }}
            inputContainerStyle={{ height: normalize(30), paddingBottom: -50 }}
            placeholderTextColor="#6B6B6B"
            textAlign="center"
            secureTextEntry={props.password}
            onChangeText={(event) => {
                props.handleChange(event)
            }}
        // style={{ marginBottom: 0 }}
        />
    )
}

BasicInput.defaultProps = {
    placeholder: 'text',
    handleChange: (e: Event) => { console.log(e) },
    value: null,
    password: false
}

export default BasicInput;