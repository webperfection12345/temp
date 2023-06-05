import {createStackNavigator} from '@react-navigation/stack';
import Login from '../container/Login/Login';
import Colors from '../utils/Colors';
import TabNavigator from './TabNavigator';
import AppIntro from '../container/AppIntro/AppIntro';
import OtpScreen from '../container/OtpScreen/OtpScreen';
import ViewPropertiy from '../container/ViewPropertiy/ViewPropertiy';
import ViewPropertiyImage from '../container/ViewPropertiyImage/ViewPropertiyImage';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: Colors.white},
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppIntro" component={AppIntro} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="ViewPropertiy" component={ViewPropertiy} />
      <Stack.Screen name="ViewPropertiyImage" component={ViewPropertiyImage} />
    </Stack.Navigator>
  );
}
export default StackNavigator;
