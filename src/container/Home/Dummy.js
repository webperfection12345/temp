import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
  Platform,
  FlatList,
  ImageBackground,
  Animated,
  Vibration,
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Orientation from 'react-native-orientation-locker';
import Styles from './Styles';
import {Swipeable} from 'react-native-gesture-handler';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getPoperties} from '../../modules/getPoperties';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

const images = [
  {
    uri: Images.test,
    title: 'Image 1',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 2',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 3',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 4',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 5',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 6',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 1',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 2',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 3',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 4',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 5',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 6',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 1',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 2',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 3',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 4',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 5',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 6',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
];

const filterData = [
  {id: 1, name: 'Filter', image: Images.address},
  {id: 2, name: 'Filter', image: Images.appLogo},
  {id: 3, name: 'Filter', image: Images.apple},
  {id: 4, name: 'Filter', image: Images.bath},
  {id: 5, name: 'New Construction', image: Images.bed},
  {id: 6, name: 'Filter', image: Images.chat},
  {id: 7, name: 'Filter', image: Images.email},
  {id: 8, name: 'Filter', image: Images.facebook},
  {id: 9, name: 'Filter', image: Images.fav},
  {id: 10, name: 'Filter', image: Images.google},
  {id: 11, name: 'Filter', image: Images.gps},
  {id: 12, name: 'Filter', image: Images.hoa},
  {id: 13, name: 'Filter', image: Images.inbox},
  {id: 14, name: 'Filter', image: Images.lokal},
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const flatListRef = useRef(null);
  const [homeData, setHomeData] = useState([]);
  const [GalertData, setGalertData] = useState([]);
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);
  useEffect(() => {
    getPopertiesApiCall();
  }, []);
  const getPopertiesApiCall = () => {
    dispatch(getPoperties()).then(response => {
      console.log('res', response.payload);
      // console.log('res------>>>>', response.payload.data);
      setHomeData(response.payload.data);
    });
  };
  const handleSlideChange = event => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offset / slideWidth);
    setCurrentSlide(index);
  };

  const scrollToIndex = index => {
    setIndex(index);
    flatListRef.current.scrollToIndex({index});
  };
  const [data, setData] = useState(images);

  const handleSwipeFromLeft = id => {
    //Vibration.vibrate(100);
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleSwipeFromRight = id => {
    //Vibration.vibrate(100);
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return {...item, liked: true};
        }
        return item;
      }),
    );
  };

  const onDone = () => {
    navigation.navigate('Tabs', {screen: 'Home'});
  };
  const renderNextButton = () => {
    return (
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: -screenHeight / 2.25,
          right: 5,
          zIndex: 99,
          // backgroundColor: 'pink',
        }}>
        <Image
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: Colors.white,
            transform: [{rotate: '-90deg'}],
          }}
          source={Images.downArrow}></Image>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          position: 'absolute',
          alignSelf: 'center',
          top: -screenHeight / 2.25,
          left: 5,
          zIndex: 99,
          // backgroundColor: 'pink',
        }}>
        <Image
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: Colors.white,
            transform: [{rotate: '90deg'}],
          }}
          source={Images.downArrow}></Image>
      </View>
    );
  };

  const renderFillterItem = ({item}) => {
    // console.log('00000000', item);
    return (
      <View style={{height: 80, justifyContent: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Image
            source={item.image}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
          <Text
            style={{fontSize: 12, color: Colors.textColorLight, marginTop: 5}}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 70,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 40,
            width: '75%',
            borderRadius: 18,
            borderWidth: 1,
            borderColor: Colors.BorderColor,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.search}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginLeft: 10,
              }}></Image>
          </TouchableOpacity>
          <View style={Styles.phoneInputView}>
            <TextInput
              allowFontScaling={false}
              style={Styles.inputStyle}
              placeholderTextColor={Colors.textColorLight}
              placeholder={'Surf by address community....'}
              returnKeyType="done"
              onChangeText={text => setAddres(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftWidth: 1,
              borderLeftColor: Colors.BorderColor,
            }}>
            <Image
              source={Images.address}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.gps}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
      </View>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <FlatList
          data={filterData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleSlideChange}
          onMomentumScrollEnd={handleSlideChange}
          renderItem={renderFillterItem}
        />
      </View>

      <AppIntroSlider
        renderItem={({item}) => <Item item={item} />}
        showNextButton={true}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton={true}
        data={homeData}
        dotStyle={Colors.white}
        activeDotStyle={Colors.white}
        onDone={onDone}
        //scrollEnabled={false}
      />
    </SafeAreaView>
  );
};
const renderItemData = ({item, index}) => {
  return (
    <View style={styles.slideOuter}>
      <Image source={{uri: item.guid}} style={styles.slide} />
    </View>
  );
};
const Item = ({item, onSwipeFromLeft, onSwipeFromRight}) => {
  const navigation = useNavigation();

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'red'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ViewPropertiy')}
        style={styles.slideOuter}
        // renderRightActions={renderRightActions}
        // renderLeftActions={renderLeftActions}
      >
        <FlatList
          horizontal={true}
          renderItem={renderItemData}
          data={item.property_gallery.Gallery}
          keyExtractor={(item, index) => index}
        />

        {/* <Image
            source={{uri: item.featured_image_src}}
            style={styles.slide}></Image> */}
      </TouchableOpacity>
      <View style={styles.slideOuter}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            width: '20%',
            marginRight: 20,
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={Images.star}
              style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
          </TouchableOpacity>
          <Text
            style={{fontSize: 14, color: Colors.black, textAlign: 'center'}}>
            4.2
          </Text>
          <TouchableOpacity>
            <Image
              source={Images.send}
              style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPropertiy')}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.primaryBlue,
              fontWeight: '500',
            }}>
            {'$'} {item.originallistprice}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPropertiy')}
          style={{width: '98%', alignSelf: 'center', justifyContent: 'center'}}>
          <Text
            style={{fontSize: 16, color: Colors.black, textAlign: 'center'}}>
            {item.title}
          </Text>
        </TouchableOpacity>
        {/* <Text style={{fontSize: 18, color: Colors.black}}>{item.details}</Text> */}
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.bed}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{fontSize: 12, color: Colors.black, textAlign: 'center'}}>
              {item.property_bedrooms}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.bath}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{fontSize: 12, color: Colors.black, textAlign: 'center'}}>
              {item.property_bathrooms}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.measuring}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{fontSize: 12, color: Colors.black, textAlign: 'center'}}>
              {item.property_size} {'ft'}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
            }}>
            <Image
              source={Images.hoa}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{fontSize: 12, color: Colors.black, textAlign: 'center'}}>
              {'$'} {item.associationfee == null ? 0 : item.associationfee}
            </Text>
          </View>
        </View>
        {/* <Text
          style={{
            fontSize: 12,
            color: Colors.black,
            width: '95%',
          }}>
          Google's service, offered free of charge, instantly translates words,
          phrases, and web pages between English and over 100 other languages.
        </Text>
        <View style={{position: 'absolute', bottom: 0, right: 20, zIndex: 99}}>
          <TouchableOpacity onPress={() => Alert.alert('View More')}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.PrimaryColor,
              }}>
              {'more->'}
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <View
        style={{
          width: '90%',
          position: 'absolute',
          bottom: 0,
          justifyContent: 'space-between',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Image source={Images.like} style={{height: 40, width: 40}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.dislike}
            style={{height: 40, width: 40}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideOuter: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: screenWidth - 20,
    height: screenHeight / 4,
    borderRadius: 18,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default Home;
