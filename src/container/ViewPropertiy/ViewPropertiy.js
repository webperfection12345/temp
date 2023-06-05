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
  SafeAreaView,
  Vibration,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';

import {useNavigation} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;
const filterData = [
  {id: 1, name: 'Details', image: Images.detail},
  {id: 2, name: 'Features', image: Images.features},
  {id: 3, name: 'Address', image: Images.address},
  {id: 4, name: 'What Nearby', image: Images.nearBy},
  {id: 5, name: 'Walk Score', image: Images.walkScrore},
];
const bedData = [
  {id: 1, name: '4 Beds', image: Images.bed},
  {id: 2, name: '4 Baths', image: Images.bath},
  {id: 3, name: '1492 sqft', image: Images.measuring},
  {id: 4, name: '5200 HOA', image: Images.hoa},
  {id: 5, name: 'Walk Score', image: Images.walkScrore},
];
const ViewPropertiy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Image
          source={item.image}
          style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
        <Text
          style={{
            fontSize: 10,
            color: Colors.black,
            textAlign: 'center',
            marginLeft: 5,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const renderBedItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 8,
        }}>
        <Image
          source={item.image}
          style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
        <Text
          style={{
            fontSize: 12,
            color: Colors.black,
            textAlign: 'center',
            marginLeft: 5,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle="light-content" hidden={false} translucent={true} /> */}

      <View style={styles.slideOuter}>
        <Image source={Images.test} style={styles.slide}></Image>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'visible',
            zIndex: 99,
            position: 'absolute',
            top: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: Colors.gray,
            }}>
            <Image
              source={Images.downArrow}
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                tintColor: Colors.black,
                transform: [{rotate: '90deg'}],
              }}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          //onPress={() => navigation.navigate('ViewPropertiyImage')}
          >
            <Image
              source={Images.address}
              style={{
                height: 30,
                width: 25,
                resizeMode: 'contain',
                tintColor: Colors.white,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            position: 'absolute',
            bottom: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Image
              source={Images.star}
              style={{height: 20, width: 20, resizeMode: 'contain'}}></Image> */}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ViewPropertiyImage')}>
            <Image
              source={Images.imageView}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.slideOuter}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.star}
                style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.black,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                4.2
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                color: Colors.primaryBlue,
                fontWeight: '500',
              }}>
              $ 1,399,000
            </Text>
            <TouchableOpacity>
              <Image
                source={Images.send}
                style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{fontSize: 16, color: Colors.black, textAlign: 'center'}}>
              7900 S Ocean Drive | Jensen Beach Steeplechase
            </Text>
          </View>
          {/* <Text style={{fontSize: 18, color: Colors.black}}>{item.details}</Text> */}

          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              marginTop: 10,
            }}>
            <FlatList
              data={bedData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderBedItem}
            />
          </View>
          <View style={{width: '90%'}}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                flexDirection: 'row',
                color: Colors.black,
                width: '100%',
              }}>
              Google's service, offered free of charge, instantly translates
              words, phrases, and web pages between English and over 100 other
              languages.
              <Text
                onPress={() => alert('hllo')}
                style={{
                  fontSize: 12,
                  color: Colors.PrimaryColor,
                }}>
                {' more->'}
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 20,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: Colors.gray,
            }}>
            <FlatList
              data={filterData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.black,

                  fontWeight: '700',
                }}>
                Property Details
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Price: $ 989,000
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Est. Taxes: $ 9379
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Bedrooms: 4
              </Text>
            </View>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.black,

                  fontWeight: '700',
                }}>
                Community Details
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Community Name: Marlwood Estates, PGA Res
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee: $ 189
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee Frequency: Monthly
              </Text>
            </View>
          </View>

          <View style={{width: '90%'}}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                flexDirection: 'row',
                color: Colors.black,
                width: '100%',
              }}>
              Google's service, offered free of charge, instantly translates
              words, phrases, and web pages between English and over 100 other
              languages. Google's service, offered free of charge, instantly
              translates words, phrases, and web pages between English and over
              100 other languages.
              <Text
                onPress={() => alert('comming soon')}
                style={{
                  fontSize: 12,
                  color: Colors.PrimaryColor,
                }}>
                {' more->'}
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 5,
              justifyContent: 'center',
            }}>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Year Built : 1985
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Toatl Stories: 1
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Days on Market 0
              </Text>
            </View>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Community : Estates, PGA Res
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee: $ 189
              </Text>
              {/* <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee Frequency: Monthly
              </Text> */}
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 70,
            marginTop: 10,
            justifyContent: 'center',
            borderTopWidth: 1,
            borderTopColor: Colors.gray,
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignContent: 'center',
              width: '50%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Image
                source={Images.reviews}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Rate Property
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.contactUs}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Call us
              </Text>
            </View>
          </View>
          <View
            style={{
              //justifyContent: 'center',
              //alignItems: 'center',
              width: '50%',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: Colors.primaryBlue,
                borderRadius: 14,
                height: 40,
                width: '80%',
              }}>
              <Image
                source={Images.bookTour}
                style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.white,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Book a tour
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    width: screenWidth,
    height: screenHeight / 4,
    borderRadius: 8,
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

export default ViewPropertiy;
