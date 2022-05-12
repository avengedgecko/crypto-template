import React, { Component } from "react";
import { Text, View, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions, ScrollView, BackHandler } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from "../../constants/styles";
import { AntDesign } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit";
import { TouchableOpacity } from "react-native";
import { BottomSheet, Input } from 'react-native-elements';
import { Snackbar } from 'react-native-paper';
import { OutlinedTextField } from 'rn-material-ui-textfield';
import { TransitionPresets } from 'react-navigation-stack';


export default class CurrencyScreen extends Component {

    state = {
        showBottomSheet: false,
        value: '',
        amount: '',
        iswatchList: false,
        showSnackBar: false,
        snackBarMsg: '',
        isBuy: false,
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.pop();
        return true;
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <ScrollView>
                    {this.currencyNameAndAddRemoveInfo()}
                    {this.currencyInfo({ buyOrSell: 'Buy' })}
                    {chartInfo()}
                    {this.aboutCurrenyTitle()}
                    {aboutCurrencyDetail({
                        icon: require('../../../assets/images/icon/rank.png'),
                        title: 'Market Rank',
                        value: "#585",
                    })}
                    {aboutCurrencyDetail({
                        icon: require('../../../assets/images/icon/market-cap.png'),
                        title: 'Market Cap',
                        value: '$27,347,803',
                    })}
                    {aboutCurrencyDetail({
                        icon: require('../../../assets/images/icon/supply.png'),
                        title: 'Circulating Supply',
                        value: `85 Million`
                    })}
                    {this.whatIsCurrencyInfo()}
                    {buyAndSellPriceDifferentInfo()}

                </ScrollView>
                {this.buyAndSellButton()}
                {this.showBottomSheet()}
                <Snackbar
                    style={{ position: 'absolute', bottom: 42.0, left: -10.0, right: -10.0, backgroundColor: '#333333' }}
                    visible={this.state.showSnackBar}
                    onDismiss={() => this.setState({ showSnackBar: false })}
                >
                    {this.state.iswatchList == false ?
                        <Text style={{ ...Fonts.whiteRegular }}>Remove from watchlist</Text> :
                        <Text style={{ ...Fonts.whiteRegular }}> Added to watchlist</Text>
                    }
                </Snackbar>
            </SafeAreaView>
        )
    }

    currencyNameAndAddRemoveInfo() {
        return (
            <View style={styles.headerStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={Colors.whiteColor}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.white17Bold }}>
                        WILD
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.addRemoveCurrencyContainerStyle}
                    onPress={() => {
                        this.setState({ iswatchList: !this.state.iswatchList })
                        this.setState({ showSnackBar: true })
                    }}
                >
                    {this.state.iswatchList == true ?
                        <Ionicons name="star" size={20} color={Colors.primaryColor} /> :
                        <Ionicons name="star-outline" size={20} color={Colors.primaryColor} />
                    }
                </TouchableOpacity>
            </View>
        )
    }

    currencyInfo({ buyOrSell }) {
        return (
            <View style={styles.currencyInfoContainerStyle}>
                <View style={styles.currencyLogoContainerStyle}>
                    <Image source={require('../../../assets/images/crypto_icon/wildLogo.png')}
                        style={{ height: 40.0, width: 40.0 }}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginHorizontal: Sizes.fixPadding, }}>
                    <Text style={{ ...Fonts.white15Medium }}>Current WILD {buyOrSell} Price</Text>
                    <View style={{ flexDirection: 'row', marginTop: Sizes.fixPadding - 5.0 }}>
                        <Text style={{ ...Fonts.white17Bold, marginRight: Sizes.fixPadding + 10.0 }}>
                            $0.3081
                        </Text>
                        <AntDesign
                            name="caretdown" size={12}
                            color={Colors.redColor}
                            style={{ marginTop: 3.0, marginRight: Sizes.fixPadding - 2.0 }}
                        />
                        <Text style={{ ...Fonts.red17Medium }}>33.3%</Text>
                    </View>
                </View>
            </View>
        )
    }

    aboutCurrenyTitle() {
        return (
            <View style={styles.aboutCurrencyTitleContainerStyle}>
                <Text style={{ ...Fonts.white17Bold }}>
                    About Wilder Worlds
                </Text>
            </View>
        )
    }

    whatIsCurrencyInfo() {
        return (
            <View style={styles.whatIsCurrencyTitleContainerStyle}>
                <Text style={{ ...Fonts.white16SemiBold }}>
                    What is WILD?
                </Text>
                <Text style={{ ...Fonts.white15Medium, paddingTop: Sizes.fixPadding }}>
                    Wilder World is the first truly liquid, fully decentralized, community led NFT marketplace with no artist fees and its own dynamic token system.</Text>
            </View>
        )
    }

    buyAndSellButton() {
        return (
            <View>
                <View style={styles.buyAndSellButtomContainerStyle}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            this.setState({ showBottomSheet: true })
                            this.setState({ isBuy: true })
                        }}
                    >
                        <Text style={{ ...Fonts.white17Bold }}>
                            BUY
                        </Text>
                    </TouchableOpacity>
                    <View style={{ height: 30.0, width: 2.0, backgroundColor: "rgba(255,255,255,0.22)" }}>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            this.setState({ showBottomSheet: true })
                            this.setState({ isBuy: false })
                        }}
                    >
                        <Text style={{ ...Fonts.white17Bold }}>
                            SELL
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    amountTextField() {
        return (
            <View style={{ paddingHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding }}>
                <OutlinedTextField
                    label='Amount'
                    keyboardType='phone-pad'
                    suffix='BTC'
                    labelTextStyle={{ ...Fonts.black15Medium }}
                    style={{ ...Fonts.black16Medium, }}
                    baseColor="gray"
                    value={this.state.amount}
                    onChangeText={(value) => this.setState({ amount: value })}
                />
            </View>
        )
    }

    valueTextField() {
        return (
            <View style={{ paddingHorizontal: Sizes.fixPadding * 2.0 }}>
                <OutlinedTextField
                    label='Amount'
                    keyboardType='phone-pad'
                    suffix='USD'
                    labelTextStyle={{ ...Fonts.white15Medium }}
                    style={{ ...Fonts.white16Medium, }}
                    baseColor="white"
                    value={this.state.value}
                    onChangeText={(text) => this.setState({ value: text })}
                />
            </View>
        )
    }

    showBottomSheet() {
        return (
            <BottomSheet
                isVisible={this.state.showBottomSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)' }}
            >
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => { this.setState({ showBottomSheet: false }) }}
                    style={{
                        backgroundColor: '#212121',
                        borderTopLeftRadius: Sizes.fixPadding,
                        borderTopRightRadius: Sizes.fixPadding,
                    }}
                >
                    <View style={{
                        paddingVertical: Sizes.fixPadding, backgroundColor: 'black',
                        borderTopLeftRadius: Sizes.fixPadding,
                        borderTopRightRadius: Sizes.fixPadding,
                    }}>
                        <Text style={{
                            alignSelf: 'center', ...Fonts.black16SemiBold,
                            paddingVertical: Sizes.fixPadding + 5.0,
                            paddingHorizontal: Sizes.fixPadding * 2.0,
                        }}>
                            {this.state.isBuy ? `Buy` : 'Sell'} Wilder Worlds (WILD)
                        </Text>
                        <View style={{
                            backgroundColor: 'gray', height: 0.5,
                            marginBottom: Sizes.fixPadding + 10.0,
                            marginHorizontal: Sizes.fixPadding * 2.0,
                        }}>

                        </View>
                        {this.currencyInfo({ buyOrSell: this.state.isBuy ? `Buy` : 'Sell' })}
                        {this.valueTextField()}
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.buyOrSellButtonStyle}
                            onPress={() => this.props.navigation.navigate('Success')}
                        >
                            <Text style={{ ...Fonts.white16Medium }}> {this.state.isBuy ? `BUY` : 'SELL'} </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </BottomSheet>
        )
    }
}

const { width } = Dimensions.get('screen');

const data = {
    labels: ['5/5', '5/6', '5/7', '5/8', '5/9', '5/10', '5/11', '5/12'],
    datasets: [
        {
            data: [1.25, 1.19, 1.22, 1.12, 0.95, 0.76, 0.50, 0.33],
            color: (opacity = 0.5) => `rgb(167, 84, 226, ${opacity})`, // optional
        }
    ],
};

const chartConfig = {
    backgroundGradientFrom: '#212121',
    backgroundGradientTo: "#212121",
    fillShadowGradient: Colors.primaryColor,
    fillShadowGradientOpacity: 90,
    color: (opacity = 1) => `white`,
    strokeWidth: 1,
    barRadius: 2,
    decimalPlaces: 2,
};

function chartInfo() {
    return (
        <View style={{ backgroundColor: 'black' }}>
            <Image source={require('../../../assets/images/graphImage.jpg')}
                   style={{width: 400, height: 420, marginBottom: 10 }}
            />
        </View>
    )
}

function buyAndSellPriceDifferentInfo() {
    return (
        <View style={{
            backgroundColor: 'black', paddingHorizontal: Sizes.fixPadding * 2.0,
            paddingTop: Sizes.fixPadding,
            paddingBottom: Sizes.fixPadding * 6.0
        }}>
            <Text style={{ ...Fonts.white17Bold }}>
                Exciting New Wilder Worlds Content
            </Text>

            <Image source={require('../../../assets/images/cryptoVid1.jpg')}
                   style={{width: 355, height: 290, marginBottom: 10 }}
            />
            <Image source={require('../../../assets/images/cryptoVid2.jpg')}
                   style={{width: 355, height: 290, marginBottom: 10 }}
            />
            <Image source={require('../../../assets/images/cryptoVid3.jpg')}
                   style={{width: 355, height: 290, marginBottom: 10 }}
            />
        </View>
    )
}

function aboutCurrencyDetail({ icon, title, value }) {
    return (
        <View style={{ backgroundColor: 'black', paddingHorizontal: Sizes.fixPadding * 2.0 }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingVertical: Sizes.fixPadding * 2.0
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icon}
                        style={{ height: 20.0, width: 20.0 }}
                        resizeMode="contain"
                    />
                    <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.white16SemiBold }}>{title}</Text>
                </View>
                <Text style={{ ...Fonts.white16SemiBold }}>{value}</Text>
            </View>
            <View style={{ height: 0.40, backgroundColor: 'gray', marginBottom: Sizes.fixPadding }}></View>
        </View>
    )
}

function portfolioInfo() {
    return (
        <View style={{ paddingHorizontal: Sizes.fixPadding * 2.0, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: Sizes.fixPadding }}>
                <View style={styles.portfolioInfoContainerStyle}>
                    <Text style={{ ...Fonts.gray16Medium }}>
                        BTC Balance
                    </Text>
                    <Text style={{ ...Fonts.black17Bold }}>
                        5.0107731
                    </Text>
                </View>
                <View style={styles.portfolioInfoContainerStyle}>
                    <Text style={{ ...Fonts.gray16Medium }}>
                        Current Value
                    </Text>
                    <Text style={{ ...Fonts.black17Bold }}>
                        $200,005
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.portfolioInfoContainerStyle}>
                    <Text style={{ ...Fonts.gray16Medium }} numberOfLines={2}>
                        Average Buy Price
                    </Text>
                    <Text style={{ ...Fonts.black17Bold }}>
                        $37,598
                    </Text>
                </View>
                <View style={styles.portfolioInfoContainerStyle}>
                    <Text style={{ ...Fonts.gray16Medium }}>
                        Gain/Loss
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign
                            name="caretup"
                            size={12}
                            color={Colors.primaryColor}
                            style={{ marginTop: 5.0 }}
                        />
                        <Text style={{ ...Fonts.primaryColor17SemiBold, marginLeft: Sizes.fixPadding - 3.0 }}>
                            5.65%
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

function portfolioTitle() {
    return (
        <Text style={{
            ...Fonts.black17SemiBold,
            marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding
        }}>
            Your Portfolio
        </Text>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding * 2.0,
        backgroundColor: 'black'
    },
    addRemoveCurrencyContainerStyle: {
        backgroundColor: 'black',
        borderColor: Colors.primaryColor,
        height: 40.0,
        width: 40.0,
        borderRadius: 20.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.0,
    },
    portfolioInfoContainerStyle: {
        height: 90.0,
        width: width / 2.35,
        backgroundColor: 'white', elevation: 2.0,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
        justifyContent: 'space-between',
        paddingVertical: Sizes.fixPadding + 5.0
    },
    buyOrSellButtonStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding + 5.0,
        alignItems: 'center',
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding + 10.0,
        marginBottom: Sizes.fixPadding
    },
    currencyLogoContainerStyle: {
        height: 60.0, width: 60.0,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        borderColor: '#D8D8D8',
        borderWidth: 1.0,
        justifyContent: 'center'
    },
    currencyInfoContainerStyle: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    aboutCurrencyTitleContainerStyle: {
        backgroundColor: 'black',
        marginBottom: 10,
        paddingHorizontal: Sizes.fixPadding * 2.0
    },
    whatIsCurrencyTitleContainerStyle: {
        backgroundColor: 'black',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding
    },
    buyAndSellButtomContainerStyle: {
        backgroundColor: Colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0.0,
        left: 0,
        right: 0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
    }
})

CurrencyScreen.navigationOptions = () => {
    return {
        header: () => null,
        ...TransitionPresets.RevealFromBottomAndroid,
    }
}
