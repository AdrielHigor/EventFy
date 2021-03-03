import React, { Component } from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet
} from 'react-native'
import GradientView from '../../components/GradientView'
import normalize from 'react-native-normalize'



export default class LoadingScreen extends Component {
    render() {
        return (
            <GradientView>
                <View>
                    <Text style={styles.title}>EventFy</Text>
                    <ActivityIndicator size={normalize(40)} color="#ffffff" />
                </View>
            </GradientView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#ffff',
        fontSize: normalize(34),
        marginBottom: normalize(20)
    }
})