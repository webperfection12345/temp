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
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getFavoriteProperties} from '../../modules/getFavoriteProperties';
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
    hoa: '$184',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const [data, setHomeData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    getFavoritePropertiesApiCall();
  }, []);
  const getFavoritePropertiesApiCall = () => {
    dispatch(getFavoriteProperties()).then(response => {
      console.log('res-ppp', response.payload);
      setHomeData(response.payload.data);
    });
  };
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);

  const renderItemImage = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ViewPropertiy')}
      style={styles.slideOuter}>
      <Image source={{uri: item?.featured_image}} style={styles.slide}></Image>
      <View
        style={{
          height: 30,
          width: 170,
          backgroundColor: Colors.white,
          position: 'absolute',
          top: 30,
          right: 16,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: Colors.black,
          }}>
          {item.details}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <View style={styles.slideOuter}>
      {/* <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItemImage}
        keyExtractor={item => item.id}
      /> */}
      <Image source={{uri: item?.featured_image_src}} style={styles.slide} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '15%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={Images.call}
              style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={Images.chatProp}
              style={{height: 20, width: 20}}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPropertiy')}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.primaryBlue,
              fontWeight: '500',
            }}>
            {'$'}
            {item.originallistprice}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            width: '20%',
            alignSelf: 'flex-end',
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
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ViewPropertiy')}
        style={{
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}>
        <Text style={{fontSize: 16, color: Colors.black, textAlign: 'center'}}>
          {item.Title}
        </Text>
      </TouchableOpacity>

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
            style={{fontSize: 14, color: Colors.black, textAlign: 'center'}}>
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
            style={{fontSize: 14, color: Colors.black, textAlign: 'center'}}>
            {item.bathroomsfull}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.area}
            style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
          <Text
            style={{fontSize: 14, color: Colors.black, textAlign: 'center'}}>
            {item.property_size}
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
            style={{fontSize: 14, color: Colors.black, textAlign: 'center'}}>
            {item.associationfee}
          </Text>
        </View>
      </View>
    </View>
  );

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
        <Text style={{fontSize: 20, color: Colors.black}}>Favorties</Text>
      </View>
      <View style={{height: '100%', width: '100%'}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListFooterComponent={<View style={{height: 50}}></View>}
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
    borderRadius: 18,
  },
  slide: {
    width: screenWidth - 40,
    height: screenHeight / 4,
    borderRadius: 18,
    margin: 20,
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
