import React, { Component } from "react";
import { Text, View, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity, ActivityIndicator, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";
import { Fonts, Colors, Sizes } from "../../constants/styles";
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

class SecurePinScreen extends Component {

    state = {
        pinCount: 0,
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        return true;
    };

    render() {
        if (this.state.pinCount == 4) {
            setTimeout(() => {
                this.props.navigation.navigate('BottomTabScreen', { index: 1 });
            }, 2000)
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backColor }}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <View style={{ flex: 1 }}>
                    {needHelpScreen()}
                    {logo()}
                    {enterPinInfo()}
                    {this.pinBoxes()}
                    {this.state.pinCount < 4 ?
                        forgotPINText() : < ActivityIndicator
                            color={Colors.whiteColor}
                            style={{ marginTop: Sizes.fixPadding * 3.0 }} />
                    }
                    {this.keyBoardDesign()}
                </View>
            </SafeAreaView>
        )
    }

    pinBoxes() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: Sizes.fixPadding * 7.0 }}>
                <View style={{
                    backgroundColor:
                        this.state.pinCount == 1 ||
                            this.state.pinCount == 2 ||
                            this.state.pinCount == 3 ||
                            this.state.pinCount == 4
                            && this.state.pinCount != 0 ? Colors.primaryColor : Colors.whiteColor,
                    borderColor:
                        this.state.pinCount == 1 ||
                            this.state.pinCount == 2 ||
                            this.state.pinCount == 3 ||
                            this.state.pinCount == 4 ? Colors.primaryColor : 'gray',
                    ...styles.pinBoxContainerStyle
                }}>
                </View>
                <View style={{
                    backgroundColor:
                        this.state.pinCount == 2 ||
                            this.state.pinCount == 3 ||
                            this.state.pinCount == 4
                            && this.state.pinCount != 0 ? Colors.primaryColor : Colors.whiteColor,
                    borderColor:
                        this.state.pinCount == 2 ||
                            this.state.pinCount == 3 ||
                            this.state.pinCount == 4 ? Colors.primaryColor : 'gray',
                    ...styles.pinBoxContainerStyle
                }}>
                </View>
                <View style={{
                    backgroundColor:
                        this.state.pinCount == 3 ||
                            this.state.pinCount == 4
                            && this.state.pinCount != 0 ? Colors.primaryColor : Colors.whiteColor,
                    borderColor:
                        this.state.pinCount == 3 ||
                            this.state.pinCount == 4 ? Colors.primaryColor : 'gray',
                    ...styles.pinBoxContainerStyle
                }}>
                </View>
                <View style={{
                    backgroundColor:
                        this.state.pinCount == 4
                            && this.state.pinCount != 0 ? Colors.primaryColor : Colors.whiteColor,
                    borderColor: this.state.pinCount == 4 ? Colors.primaryColor : 'gray',
                    ...styles.pinBoxContainerStyle,
                }}>
                </View>
            </View>
        )
    }

    keyBoardDesign() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    if (item.id != 10) {
                        item.id == 12 ?
                            this.setState({ pinCount: this.state.pinCount - 1 }) :
                            this.setState({ pinCount: this.state.pinCount + 1 })
                    }
                }}
                style={styles.keyboardItemContainerStyle}>
                {item.id == 12 ?
                    item.data : <Text style={{ ...Fonts.white17Bold }}>{item.data}</Text>
                }
            </TouchableOpacity>
        )
        return (

            <View style={{ position: 'absolute', bottom: 0.0 }}>
                <FlatList
                    data={keyboardItemsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                />
            </View>
        )
    }
}

const keyboardItemsList = [
    {
        id: '1',
        data: 1,
    },
    {
        id: '2',
        data: 2,
    },
    {
        id: '3',
        data: 3,
    },
    {
        id: '4',
        data: 4,
    },
    {
        id: '5',
        data: 5,
    },
    {
        id: '6',
        data: 6,
    },
    {
        id: '7',
        data: 7,
    },
    {
        id: '8',
        data: 8,
    },
    {
        id: '9',
        data: 9,
    },
    {
        id: '10',
        data: '',
    },
    {
        id: '11',
        data: 0,
    },
    {
        id: '12',
        data: <Ionicons name="backspace" size={24} color="white" />,
    },
];

function forgotPINText() {
    return (
        <Text style={{ ...Fonts.white15Medium, marginTop: Sizes.fixPadding * 2.0, alignSelf: 'center' }}>
            Forgot PIN?
        </Text>
    )
}

function enterPinInfo() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ ...Fonts.white17Bold }}>Enter your PIN</Text>
            <Text style={{ ...Fonts.primaryColor15Medium, marginTop: Sizes.fixPadding - 3.0 }}>
                4-Digit PIN to Easily Access Your Account
            </Text>
        </View>
    )
}

function logo() {
    return (
        <Image source={require('../../../assets/images/ggLogo.png')}
            style={styles.logoImageStyle}
            resizeMode="contain"
        />
    )
}

function needHelpScreen() {
    return (
        <Text style={{
            ...Fonts.white15Medium,
            alignSelf: 'flex-end',
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginTop: Sizes.fixPadding * 2.0,
        }}>
            NEED HELP?
        </Text>
    )
}

SecurePinScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

const styles = StyleSheet.create({
    keyboardItemContainerStyle: {
        width: width / 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding + 25,
    },
    pinBoxContainerStyle: {
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding - 5.0,
    },
    logoImageStyle: {
        alignSelf: 'center',
        width: 100.0,
        height: 100.0,
        marginVertical: Sizes.fixPadding * 2.0
    }
})

export default withNavigation(SecurePinScreen);