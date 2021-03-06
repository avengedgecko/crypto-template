import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Text, View, StatusBar } from "react-native";
import { Colors, Sizes } from "../../constants/styles";
import TabBarScreen from "../../component/tabBarScreen";
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


class StatisticScreen extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#212121'}}>
                <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: Sizes.fixPadding * 2.0,
                    paddingVertical: Sizes.fixPadding,
                    alignItems: 'center',
                    backgroundColor: '#212121'
                }}>
                    <Text style={{ fontSize: 16.0, color: '#00b900', fontFamily: 'Montserrat_Bold' }}>
                        Market is up 14.68% today
                    </Text>
                    <Ionicons name="search-sharp" size={24} color={Colors.whiteColor} />
                </View>

                <TabBarScreen navigation={this.props.navigation} />
            </SafeAreaView>
        )
    }
}

export default withNavigation(StatisticScreen);
