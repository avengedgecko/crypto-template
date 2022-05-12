import React, { Component } from "react";
import { Text, TouchableOpacity, View, SafeAreaView, StatusBar, Image, StyleSheet, FlatList } from "react-native";
import { withNavigation } from 'react-navigation';
import { Fonts, Colors, Sizes } from "../../constants/styles";
import { AntDesign } from '@expo/vector-icons';

class NftMarketScreen extends Component {

    renderItem = ({ item }) => (

        <TouchableOpacity
            activeOpacity={0.9}
            style={{
                paddingHorizontal: Sizes.fixPadding * 2.0,
                marginVertical: Sizes.fixPadding,
                backgroundColor: '#212121'
            }}
            onPress={() => this.props.navigation.push('Currency')}
        >
            <View style={styles.popularCurrenciesContainerStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                        source={item.logo}
                        style={{ height: 55.0, width: 55.0, borderRadius: 27.5 }}
                        resizeMode="contain"
                    />
                    <View style={{ marginLeft: Sizes.fixPadding }}>
                        <Text style={{ ...Fonts.white16Medium }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', marginTop: Sizes.fixPadding - 5.0 }}>
                            <Text style={{ ...Fonts.white16SemiBold, marginRight: Sizes.fixPadding + 5.0 }}>
                                {item.sortName}
                            </Text>
                            <AntDesign
                                name={item.isPositive == true ? "caretup" : "caretdown"} size={12}
                                color={item.isPositive == true ? Colors.greenColor : Colors.redColor}
                                style={{ marginTop: 3.0, marginRight: Sizes.fixPadding - 2.0 }}
                            />
                            <Text style={{ ...Fonts.white16Medium }}>
                                {item.percentage}%
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ ...Fonts.white16SemiBold }}>
                        ${item.amount}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#212121'}}>
                <StatusBar translucent={false} backgroundColor={Colors.backColor} />
                <FlatList
                    ListHeaderComponent={
                        <>
                            {myPortfolioTitle()}
                            {portfolioInfo()}
                            {this.popularCurrenciesTitle()}

                        </>
                    }
                    data={popularCurrenciesList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 7.0, backgroundColor: '#212121' }}
                />
            </SafeAreaView>
        )
    }

    popularCurrenciesTitle() {
        return (
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 25,
                paddingBottom: 10,
                backgroundColor: '#212121'
            }}>
                <Text style={{ ...Fonts.white20SemiBold }}>NFT's Coming Soon</Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this.props.navigation.push('BottomTabScreen', { index: 2 })}
                >
                    <Text style={{ ...Fonts.primaryColor17Medium }}>See More</Text>
                </TouchableOpacity>

            </View>
        )
    }

    userWelcome() {
        return (
            <View style={{ paddingHorizontal: Sizes.fixPadding * 2.0, backgroundColor: '#212121' }}>
                <View style={styles.userWelcomeContainerStyle}>
                    <View>
                        <Text style={{ ...Fonts.white17SemiBold, }}>Welcome</Text>
                        <Text style={{ ...Fonts.white25Bold, marginTop: Sizes.fixPadding - 5.0, }}>
                            Peter Jones
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => this.props.navigation.push('BottomTabScreen', { index: 4 })}
                    >
                        <Image source={require('../../../assets/images/user/user_14.jpg')}
                               style={{ height: 60.0, width: 60.0, borderRadius: 15.0 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const popularCurrenciesList = [
    {
        id: '1',
        logo: require('../../../assets/images/crypto_icon/metapetsLogo.png'),
        name: 'MetaPets',
        sortName: 'METAPETS',
        isPositive: false,
        percentage: -0.42,
        amount: "0.00001",
    },
    {
        id: '2',
        logo: require('../../../assets/images/crypto_icon/spsLogo.png'),
        name: 'Splinterlands',
        sortName: 'SPS',
        isPositive: false,
        percentage: -0.23,
        amount: "0.07980",
    },
    {
        id: '3',
        logo: require('../../../assets/images/crypto_icon/emonLogo.png'),
        name: 'Ethermon',
        sortName: 'EMON',
        isPositive: false,
        percentage: -1.49,
        amount: "0.02574",
    },
    {
        id: '4',
        logo: require('../../../assets/images/crypto_icon/ilvLogo.png'),
        name: 'Illuvium',
        sortName: 'ILV',
        isPositive: false,
        percentage: -1.73,
        amount: "371.990",
    },
    {
        id: '5',
        logo: require('../../../assets/images/crypto_icon/jewelLogo.png'),
        name: 'DeFi Kingdoms',
        sortName: 'JEWEL',
        isPositive: false,
        percentage: -3.64,
        amount: "1.17000",
    }
];

function myPortfolioTitle() {
    return (
        <Text style={{
            ...Fonts.white20SemiBold,
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: '#212121',
            textAlign: 'center'

        }}>
            Latest Gaming NFT's
        </Text>
    )
}

function balanceAndProfitInfo() {
    return (
        <View style={{
            paddingHorizontal: Sizes.fixPadding * 2.0,
            paddingTop: 20.0,
            backgroundColor: '#212121'
        }}>
            <View style={styles.balanceAndProfitInfoContainerStyle}>
                <Text style={{ ...Fonts.white17SemiBold }}>NFT Balance</Text>
                <Text style={{ ...Fonts.white30Bold, marginVertical: Sizes.fixPadding }}>$4,506,933</Text>
                <Text style={{ ...Fonts.white17SemiBold, marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding + 5.0 }}>
                    Monthly Profit
                </Text>
                <Text style={{ ...Fonts.white25Bold }}>$87,582</Text>
            </View>
            <View style={{ position: 'absolute', right: 40.0, bottom: 20.0, }}>
                <View style={styles.balanceAndProfitPercentageInfoStyle}>
                    <AntDesign name="caretup" size={12} color={Colors.whiteColor} />
                    <Text style={{ ...Fonts.white20SemiBold, marginLeft: 7.0 }}>+9.99%</Text>
                </View>
            </View>
        </View>
    )
}

const portfolioList = [
    {
        id: '1',
        image: require('../../../assets/images/crypto_icon/pgxNFT.png'),
        name: 'Guardian 015 of Pegaxy',
        amount: '0.05($90.86)',
        ethLogo: require('../../../assets/images/crypto_icon/eth.png')
    },
    {
        id: '2',
        image: require('../../../assets/images/crypto_icon/racecarNFT.png'),
        name: 'RR Car #11422 Raiden',
        amount: '0.26($368.6)',
        ethLogo: require('../../../assets/images/crypto_icon/eth.png')

    },
    {
        id: '3',
        image: require('../../../assets/images/crypto_icon/robotNFT.gif'),
        name: 'Robot Helmeto',
        amount: '0.33($681.8)',
        ethLogo: require('../../../assets/images/crypto_icon/eth.png')

    },
    {
        id: '4',
        image: require('../../../assets/images/crypto_icon/monkeyNFT.png'),
        name: 'Battle Apes GokuApe',
        amount: '0.02($51.49)',
        ethLogo: require('../../../assets/images/crypto_icon/eth.png')

    },
    {
        id: '5',
        image: require('../../../assets/images/crypto_icon/kittyNFT.png'),
        name: 'CryptoKitty Statue',
        amount: '0.02($53.33)',
        ethLogo: require('../../../assets/images/crypto_icon/eth.png')

    }
];

function portfolioInfo() {

    const renderItem = ({ item }) => (
        <View style={styles.portfolioContainerStyle}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image source={item.image}
                       style={{ height: 300, width: 300, borderRadius: 0, }}
                       resizeMode="contain"
                />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.white20SemiBold }}>{item.name}</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10 }}>
                    <Image source={item.ethLogo}
                           style={{ height: 30, width: 30, borderRadius: 50, marginRight: 10, }}
                           resizeMode="contain"
                    />
                    <Text style={{ ...Fonts.white25Bold }}>
                        {`${item.amount}`}
                    </Text>
                    <Text style={{ ...Fonts.white20SemiBold, alignSelf: 'flex-end', backgroundColor: Colors.primaryColor, marginLeft: 20, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2 }}>
                        Buy Now
                    </Text>
                </View>

            </View>
        </View>
    );

    return (
        <FlatList
            vertical
            showsHorizontalScrollIndicator={false}
            data={portfolioList}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
        />
    )
}

const styles = StyleSheet.create({

    userWelcomeContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 0,
    },
    popularCurrenciesContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#313131', elevation: 2.0,
        borderRadius: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,

    },
    balanceAndProfitInfoContainerStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding * 2.0
    },
    balanceAndProfitPercentageInfoStyle: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.25)',
        alignItems: 'center',
        paddingHorizontal: 12.0,
        paddingVertical: 12.0,
        borderRadius: 22.0
    },
    portfolioContainerStyle: {
        height: 410,
        width: 370,
        justifyContent: 'space-between',
        backgroundColor: '#313131',
        marginHorizontal: 10.0,
        marginVertical: 15.0,
        paddingHorizontal: 20.0,
        paddingVertical: 20.0,
        borderRadius: 30,
        elevation: 0,
    }
})

export default withNavigation(NftMarketScreen);
