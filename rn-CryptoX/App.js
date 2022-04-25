import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabBarScreen from "./src/component/bottomTabBarScreen";
import LoadingScreen from "./src/component/loadingScreen";
import TotalBalanceScreen from "./src/screens/balance/totalBalanceScreen";
import CurrencyScreen from "./src/screens/currency/currencyScreen";
import DepositScreen from "./src/screens/deposit/depositScreen";
import SuccessScreen from "./src/screens/success/successScreen";
import WithdrawScreen from "./src/screens/withdraw/withdrawScreen";
import WrongScreen from "./src/screens/wrong/wrongScreen";
import EditProfileScreen from "./src/screens/editProfile/editProfileScreen";
import BankDetailScreen from "./src/screens/bankDetail/bankDetailScreen";
import SupportScreen from "./src/screens/support/supportScreen";
import PrivacyPolicyScreen from "./src/screens/privacyPolicy/privacyPolicyScreen";
import SigninScreen from "./src/screens/auth/signinScreen";
import RegisterScreen from "./src/screens/auth/registerScreen";
import OTPScreen from "./src/screens/auth/otpScreen";
import SecurePinScreen from "./src/screens/auth/securePinScreen";
import SplashScreen from "./src/screens/splashScreen";

const switchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  mainFlow: createStackNavigator({
    Splash: SplashScreen,
    SignIn: SigninScreen,
    Register: RegisterScreen,
    OTP: OTPScreen,
    SecurePin: SecurePinScreen,
    BottomTabScreen: BottomTabBarScreen,
    Currency: CurrencyScreen,
    Success: SuccessScreen,
    Wrong: WrongScreen,
    Balance: TotalBalanceScreen,
    Deposit: DepositScreen,
    Withdraw: WithdrawScreen,
    EditProfile: EditProfileScreen,
    BankDetail: BankDetailScreen,
    Support: SupportScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
  }),
},
  {
    initialRouteName: 'Loading',
  });

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
};
