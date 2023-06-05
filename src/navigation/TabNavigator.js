import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../utils/Images';
import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';
import Rewards from '../container/Rewards/Rewards';
import Favorites from '../container/Favorites/Favorites';
import Home from '../container/Home/Home';
import Chat from '../container/Chat/Chat';
import MyProfile from '../container/MyProfile/MyProfile';
import MyFavorites from '../container/MyFavorites/MyFavorites';
import SavedSearches from '../container/SavedSearches/SavedSearches';
import Conversations from '../container/Conversations/Conversations';
import ContactMyAgent from '../container/ContactMyAgent/ContactMyAgent';
import MakeAnOffer from '../container/MakeAnOffer/MakeAnOffer';
import MyRewards from '../container/MyRewards/MyRewards';
import RecycleBin from '../container/RecycleBin/RecycleBin';
import Settings from '../container/Settings/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRatio = screenHeight / 1000;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, keyboardHidesTabBar: true}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Rewards"
        component={MyRewards}
        options={{
          tabBarLabel: (
            <Text style={{fontSize: 10}} allowFontScaling={false}>
              Rewards
            </Text>
          ),
          tabBarIcon: Images.reward,
          keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={MyFavorites}
        options={{
          tabBarLabel: (
            <Text style={{fontSize: 10}} allowFontScaling={false}>
              Favorites
            </Text>
          ),
          tabBarIcon: Images.fav,
          keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: (
            <Text style={{fontSize: 10}} allowFontScaling={false}>
              Home
            </Text>
          ),
          tabBarIcon: Images.lokal,
          keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileTab}
        options={{
          tabBarLabel: (
            <Text style={{fontSize: 10}} allowFontScaling={false}>
              MyProfile
            </Text>
          ),
          tabBarIcon: Images.profile,
          keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Conversations}
        options={{
          tabBarLabel: (
            <Text style={{fontSize: 10}} allowFontScaling={false}>
              Chat
            </Text>
          ),
          tabBarIcon: Images.chat,
          keyboardHidesTabBar: true,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};
const MyProfileTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="MyFavorites" component={MyFavorites} />
      <Stack.Screen name="SavedSearches" component={SavedSearches} />
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen name="ContactMyAgent" component={ContactMyAgent} />
      <Stack.Screen name="MakeAnOffer" component={MakeAnOffer} />
      <Stack.Screen name="MyRewards" component={MyRewards} />
      <Stack.Screen name="RecycleBin" component={RecycleBin} />
    </Stack.Navigator>
  );
};

function CustomTabBar({state, descriptors, navigation}) {
  return (
    <>
      <SafeAreaView
        style={{
          width: '100%',
          maxHeight: 100,
          backgroundColor: Colors.white,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const image =
              options.tabBarIcon !== undefined
                ? options.tabBarIcon
                : route.name;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({name: route.name, merge: true});
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={image}
                    resizeMode="contain"
                    style={{
                      height: '50%',
                      width: '50%',
                      // tintColor: isFocused ? Colors.primaryBlue : null,
                    }}></Image>
                </View>
                <Text
                  style={{
                    color: isFocused
                      ? Colors.primaryBlue
                      : Colors.textColorDark,

                    fontSize: 12,
                  }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
}
export default BottomTabNavigator;
