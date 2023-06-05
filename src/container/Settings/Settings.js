import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  FlatList,
  TextInput,
  ScrollView,
  Switch,
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Orientation from 'react-native-orientation-locker';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

const images = [
  {
    image: Images.favroites,
    title: '',
    navigation: 'Settings',
  },
  {
    image: Images.savedSearch,
    title: 'Saved Searches',
    navigation: 'SavedSearches',
  },
  {
    image: Images.inbox,
    title: 'Conversations',
    navigation: 'Conversations',
  },
  {
    image: Images.contactAgent,
    title: 'Contact My Agent',
    navigation: 'Settings',
  },
  {
    image: Images.makeOffer,
    title: 'Make An Offer',
    navigation: 'Settings',
  },
  {
    image: Images.reward,
    title: 'My Rewards',
    navigation: 'MyRewards',
  },
  {
    image: Images.recycleBin,
    title: 'Recycle Bin',
    navigation: 'RecycleBin',
  },
];

const Settings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(true);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '80%',
          height: 60,
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: Colors.black}}>Settings</Text>
      </View>

      <KeyboardAwareScrollView style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.textColorLight,
            }}>
            Allow Notfication
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.textColorLight,
            }}>
            User Details
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 30,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Jhon Doe'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'jhondoe@surfloakl.com'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Address'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Phone Number'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.textColorLight,
            }}>
            Change Password
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Password'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Confirm Password'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 40,
            borderRadius: 8,
            width: 150,
            marginTop: 50,
            backgroundColor: Colors.primaryBlue,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 16, fontWeight: '400', color: Colors.white}}>
            Submit
          </Text>
        </TouchableOpacity>

        <View style={{height: 100}}></View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slideOuter: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors,
    borderRadius: 18,
  },
  slide: {
    width: screenWidth - 40,
    height: screenHeight / 3,
    borderRadius: 18,
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    resizeMode: 'contain',
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: 'blue',
  },
  //fliter
  filter: {
    height: 60,
  },
});

export default Settings;
