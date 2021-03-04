import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'

const HotSwiper = () => {
    return (
        <Swiper style={styles.wrapper} horizontal={true} autoplay>
            <View style={styles.slide}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../assets/simpif2.jpg')}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../assets/simpif2.jpg')}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../assets/simpif2.jpg')}
                />
            </View>
            <View style={styles.slide}>
                <Image
                    resizeMode="stretch"
                    style={styles.image}
                    source={require('../../assets/simpif2.jpg')}
                />
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
    image: {
        width: "100%",
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HotSwiper;