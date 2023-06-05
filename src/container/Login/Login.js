import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
  SafeAreaView,
  Platform,
  Modal,
  FlatList,
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {useSelector, useDispatch} from 'react-redux';
import AppButton from '../../components/AppButton';
import Styles from './Styles';
import AsyncStorage from '@react-native-community/async-storage';
// For Add Google SignIn
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
// Import FBSDK
import {LoginManager, AccessToken} from 'react-native-fbsdk';
// Apple
// import AppleAuth, {
//   AppleAuthRequestScope,
//   AppleAuthRequestOperation,
// } from 'react-native-apple-authentication';
import {getCountry} from '../../modules/getCountry';
import {loginUser} from '../../modules/loginUser';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState('john123');
  const [password, setPassword] = useState('12345');
  const [phone, setPhone] = useState('1');
  const [countryName, setCountryName] = useState('United States');
  const [countryCode, setCountryCode] = useState('1');
  const [profilePic, setProfilePic] = useState('');
  const [withEmail, setWithEmail] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId:
        '763888395949-v4eoev5avbjs5a9o3s6aboutjbmm1bkl.apps.googleusercontent.com',
    });
    getCountryApiCall();
    //getData();
  }, []);

  const getData = async () => {
    const id = await AsyncStorage.getItem('userId');
    if (id !== null) {
      navigation.navigate('Tabs', {screen: 'Home'});
    }
  };
  const getCountryApiCall = () => {
    dispatch(getCountry()).then(response => {
      console.log('res', response.payload.data);
      setCountries(response.payload.data);
    });
  };
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.warn('Signin Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const handleEmailLogin = () => {
    // email(
    //   'example@gmail.com',
    //   'null',
    //   'null',
    //   'Email Login',
    //   'This is an email login without a password.',
    // )
    //   .then(() => {
    //     console.log('Email sent successfully!');
    //   })
    //   .catch(error => {
    //     console.log('Error:', error);
    //   });
    setWithEmail(true);
  };
  const handleAppleLogin = async () => {
    console.log('apple login');
    // try {
    //   const appleAuthRequestResponse = await AppleAuth.performRequest({
    //     requestedOperation: AppleAuthRequestOperation.LOGIN,
    //     requestedScopes: [
    //       AppleAuthRequestScope.EMAIL,
    //       AppleAuthRequestScope.FULL_NAME,
    //     ],
    //   });

    //   // handle success
    //   console.log(appleAuthRequestResponse);
    // } catch (error) {
    //   // handle error
    //   console.log(error);
    // }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw new Error('Something went wrong obtaining the access token');
      }
      const {accessToken} = data;
      // Use the access token to make requests to the Facebook API
      console.log(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  // const accessRequestAction = () => {
  //   navigation.navigate('Tabs', {screen: 'Home'});
  // };
  const accessRequestAction = () => {
    if (emailId && password != '') {
      if (withEmail) {
        let data = {
          username: emailId,
          password: password,
        };
        dispatch(loginUser(data)).then(response => {
          console.log('res', response);
          console.log('res', response.payload);

          if (response.payload.status) {
            navigation.navigate('AppIntro');
          } else {
            Alert.alert('Alert', response.payload.message);
          }
        });
      } else {
        navigation.navigate('OtpScreen');
      }
    } else Alert.alert('Alert', 'Enter email and password');
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const addDataFromPickr = (name, code) => {
    setCountryName(name);
    setCountryCode(code);
    setModalVisible(false);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => addDataFromPickr(item.name, item.dialCode)}
      style={{
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderBottomColor: Colors.primaryBlue,
        borderBottomWidth: 1,
        height: 40,
      }}>
      <Text style={{fontSize: 16, color: Colors.black}}>
        <Text style={{fontSize: 14, color: Colors.black}}>
          ({item.dialCode})
        </Text>{' '}
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView style={Styles.container}>
        <View style={Styles.loginView}>
          <Text style={Styles.loginText}>
            Login or sign up to start surfing
          </Text>
        </View>
        <View style={Styles.loginLine}></View>
        {!withEmail ? (
          <View style={Styles.regionUpperView}>
            <View style={Styles.loginContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={Styles.regionView}>
                <View style={{width: '85%'}}>
                  <Text allowFontScaling={false} style={Styles.regionText}>
                    Country/Region
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={Styles.selectRegionText}>
                    {countryName}
                    <Text
                      allowFontScaling={false}
                      style={Styles.selectRegionText}>
                      {' '}
                      ({countryCode})
                    </Text>
                  </Text>
                </View>
                <View>
                  <Image source={Images.downArrow} style={Styles.arrow}></Image>
                </View>
              </TouchableOpacity>
              <View style={Styles.phoneInputView}>
                <TextInput
                  allowFontScaling={false}
                  style={Styles.inputStyle}
                  placeholderTextColor={Colors.textColorLight}
                  placeholder={'Phone Number'}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  maxLength={12}
                  onChangeText={text => console.log(text)}
                />
              </View>
            </View>
            <View style={{width: '85%', marginTop: 20 * viewSizeRatio}}>
              <Text allowFontScaling={false} style={Styles.alertText}>
                We''ll call or text to confirm your number. Standard {'\n'}
                message and data rates apply.
              </Text>
            </View>
            <Modal
              transparent={true}
              animationType="slide"
              visible={modalVisible}
              onRequestClose={toggleModal}>
              <View
                style={{
                  height: '65%',
                  width: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  backgroundColor: Colors.white,
                  position: 'absolute',
                  bottom: 0,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: Colors.gray,
                }}>
                <View
                  style={{
                    height: 60,
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={{
                        height: 5,
                        width: 50,
                        borderRadius: 8,
                        backgroundColor: Colors.gray,
                      }}></TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: Colors.black,
                        marginTop: 10,
                      }}>
                      Select Country
                    </Text>
                  </View>
                </View>

                <FlatList
                  data={countries}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={renderItem}
                />
              </View>
            </Modal>
          </View>
        ) : (
          <View style={Styles.regionUpperView}>
            <View style={Styles.loginContainer}>
              <TextInput
                allowFontScaling={false}
                style={Styles.inputStyle}
                placeholderTextColor={Colors.textColorLight}
                placeholder={'Email'}
                keyboardType="default"
                returnKeyType="done"
                value={emailId}
                onChangeText={emailId => setEmailId(emailId)}
              />
              <View style={Styles.phoneInputView}>
                <TextInput
                  allowFontScaling={false}
                  style={Styles.inputStyle}
                  placeholderTextColor={Colors.textColorLight}
                  placeholder={'Password'}
                  keyboardType="default"
                  returnKeyType="done"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={password => setPassword(password)}
                />
              </View>
            </View>
            <View style={{width: '85%', marginTop: 20 * viewSizeRatio}}>
              <Text allowFontScaling={false} style={Styles.alertText}>
                Please enter your email & password registerd with us {'\n'}and
                start surfing
              </Text>
            </View>
          </View>
        )}
        <AppButton
          onPress={() => accessRequestAction()}
          // onPress={() => go()}
          btnText={'Continue'}
          textStyle={{
            fontSize: 20 * fontSizeRatio,
            fontWeight: '500',
            color: Colors.white,
          }}
          btnStyle={{
            borderRadius: 6,
            backgroundColor: Colors.primaryBlue,
          }}
        />
        <View style={Styles.orView}>
          <View style={Styles.line}></View>
          <Text allowFontScaling={false} style={Styles.orText}>
            Or
          </Text>
          <View style={Styles.line}></View>
        </View>

        {!withEmail ? (
          <TouchableOpacity
            onPress={() => handleEmailLogin()}
            style={Styles.socialMediaButtons}>
            <Image
              source={Images.email}
              style={Styles.socialMediaButtonsImage}></Image>
            <Text
              allowFontScaling={false}
              style={Styles.socialMediaButtonsText}>
              Continue with email
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setWithEmail(false)}
            style={Styles.socialMediaButtons}>
            <Image
              source={Images.contactAgent}
              style={Styles.socialMediaButtonsImage}></Image>
            <Text
              allowFontScaling={false}
              style={Styles.socialMediaButtonsText}>
              Continue with phone
            </Text>
          </TouchableOpacity>
        )}

        {Platform.OS != 'android' ? (
          <TouchableOpacity
            onPress={() => handleAppleLogin()}
            style={Styles.socialMediaButtons}>
            <Image
              source={Images.apple}
              style={Styles.socialMediaButtonsImage}></Image>
            <Text
              allowFontScaling={false}
              style={Styles.socialMediaButtonsText}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          onPress={() => googleLogin()}
          style={Styles.socialMediaButtons}>
          <Image
            source={Images.google}
            style={Styles.socialMediaButtonsImage}></Image>
          <Text allowFontScaling={false} style={Styles.socialMediaButtonsText}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFacebookLogin()}
          style={Styles.socialMediaButtons}>
          <Image
            source={Images.facebook}
            style={Styles.socialMediaButtonsImage}></Image>
          <Text allowFontScaling={false} style={Styles.socialMediaButtonsText}>
            Continue with facebook
          </Text>
        </TouchableOpacity>

        <Image source={Images.appLogo} style={Styles.appLogo}></Image>
      </ScrollView>
    </SafeAreaView>
  );
}
