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
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Orientation from 'react-native-orientation-locker';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

const images = [
  {
    image: Images.favroites,
    title: 'My Favorites',
    navigation: 'MyFavorites',
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
    navigation: 'ContactMyAgent',
  },
  {
    image: Images.makeOffer,
    title: 'Make An Offer',
    navigation: 'MakeAnOffer',
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
  {
    image: Images.signOut,
    title: 'Sign Out',
    navigation: 'Login',
  },
];

const MyFavorites = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(true);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);
  const _pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      freeStyleCropEnabled: true,
    }).then(response => {
      let source = {uri: response.path};
      setAvatarSource(source);
      seturiResponse(response.path);
      console.log('mkm', avatarSource);
      console.log('uri', uriResponse);
    });
  };
  const renderItem = ({item}) => (
    <View style={styles.slideOuter}>
      <TouchableOpacity
        onPress={() => navigation.navigate(item.navigation)}
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            height: 60,
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>

          <Text
            style={{
              fontSize: 18,
              color: Colors.textColorLight,
              marginLeft: 20,
            }}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: Colors.BorderColor,
          }}></View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 70,
          width: '80%',
          justifyContent: 'space-between',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => _pickImage()}
            activeOpacity={0.5}
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {!index ? (
              <Image
                source={Images.search}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                }}></Image>
            ) : (
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: Colors.primaryBlue,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 22, color: Colors.white}}>JD</Text>
              </View>
            )}
            <Image
              source={Images.plus}
              style={{
                height: 15,
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 15,
                zIndex: 99,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}></Image>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 24, color: Colors.black}}>Jhon Doe</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.setting}
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20, height: '100%'}}>
        <FlatList
          data={images}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
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

export default MyFavorites;
