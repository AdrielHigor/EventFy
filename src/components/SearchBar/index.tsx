import React from 'react'
import {
    StyleSheet,
    TextInput
} from 'react-native'
import normalize from 'react-native-normalize'

interface Props {
    placeholder: string,
    handleChange: any,
    value: string,
    password: boolean
}

const SearchBar = (props: Props) => {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder={props.placeholder}
            onChangeText={(e: Event) => props.handleChange(e)}
            value={props.value}
        />
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: normalize(200),
        padding: 0,
        borderColor: '#C6C6C6',
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center'
    }
})

SearchBar.defaultProps = {
    placeholder: 'Pesquisar Evento',
    handleChange: (e: Event) => { console.log(e) },
    value: null,
    password: false
}

export default SearchBar;