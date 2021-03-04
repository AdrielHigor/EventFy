import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
} from 'react-native'
import normalize from 'react-native-normalize'
import get_events from '../../api/requests/events/get_event'
import BasicButton from '../../components/BasicButton'
import HotSwiper from '../../components/HotSwiper'
import ItemListingView from '../../components/ItemListingView'

type Props = {
    navigation: any,
}

type State = {
    eventsData: any
}

export default class CatalogoScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            eventsData: []
        };
    }

    async handleGetEvents() {
        let events = await get_events();
        console.log(events.data)
        this.setState({ eventsData: events.data })
    }

    async componentDidMount() {
        await this.handleGetEvents()
    }

    render() {
        return (
            <ScrollView style={styles.root}>
                <View style={styles.swiperView}>
                    <HotSwiper />
                </View>
                <View style={styles.categoryView}>
                    <BasicButton buttonName={"Destaques"} color={"#0047FF"} />
                    <BasicButton buttonName={"Ofertas"} color={"#0047FF"} />
                    <BasicButton buttonName={"Novidades"} color={"#0047FF"} />
                </View>
                <ItemListingView listingTitle={'Eventos em Destaque'} navigation={this.props.navigation} data={this.state.eventsData} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    swiperView: {
        height: normalize(200),
        width: "100%",
        marginTop: normalize(10),
    },
    categoryView: {
        marginTop: normalize(10),
        height: normalize(40),
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: normalize(10)
    }
})  