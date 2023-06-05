import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';

const App = () => {
  const [meterValue, setMeterValue] = useState(1200);

  const getImageCall = () => {
    if (meterValue <= 500) {
      return Images.grommet;
    } else if (meterValue <= 1500) {
      return Images.longBoarder;
    } else if (meterValue <= 3000) {
      return Images.fastGun;
    } else if (meterValue >= 3001) {
      return Images.bigCahouna;
    }
  };
  const getLevelCall = () => {
    if (meterValue <= 500) {
      return 'Grommet';
    } else if (meterValue <= 1500) {
      return 'Long Boarder';
    } else if (meterValue <= 3000) {
      return 'Fast Gun';
    } else if (meterValue >= 3001) {
      return 'The Big Cahouna';
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <View
        style={{
          width: '80%',
          height: 60,
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: Colors.black}}>My Rewards</Text>
      </View>
      <ScrollView style={styles.container}>
        <View
          style={{marginTop: 10, backgroundColor: Colors.white, width: '100%'}}>
          <RNSpeedometer
            value={meterValue}
            size={180}
            minValue={0}
            maxValue={3000}
            allowedDecimals={0}
            labels={[
              {
                name: '',
                labelColor: '#ed2024',
                activeBarColor: '#ec1a1e',
              },
              {
                name: '',
                labelColor: '#ee3323',
                activeBarColor: '#ee3323',
              },
              {
                name: '',
                labelColor: '#f05622',
                activeBarColor: '#f05622',
              },
              {
                name: '',
                labelColor: '#f36f21',
                activeBarColor: '#f36f21',
              },
              {
                name: '',
                labelColor: '#f68620',
                activeBarColor: '#f68620',
              },
              {
                name: '',
                labelColor: '#f99d1c',
                activeBarColor: '#f99d1c',
              },
              {
                name: '',
                labelColor: '#fcb218',
                activeBarColor: '#fcb218',
              },
              {
                name: '',
                labelColor: '#ffc907',
                activeBarColor: '#ffc907',
              },
              {
                name: '',
                labelColor: '#fedf00',
                activeBarColor: '#fedf00',
              },
              {
                name: '',
                labelColor: '#f7de00',
                activeBarColor: '#f7de00',
              },
              {
                name: '',
                labelColor: '#e7dd1c',
                activeBarColor: '#e7dd1c',
              },
              {
                name: '',
                labelColor: '#dadf26',
                activeBarColor: '#dadf26',
              },

              {
                name: '',
                labelColor: '#c2d82f',
                activeBarColor: '#c2d82f',
              },
              {
                name: '',
                labelColor: '#afd136',
                activeBarColor: '#afd136',
              },
              {
                name: '',
                labelColor: '#9ccb3b',
                activeBarColor: '#9ccb3b',
              },
              {
                name: '',
                labelColor: '#8bc63f',
                activeBarColor: '#8bc63f',
              },
              {
                name: '',
                labelColor: '#7ac143',
                activeBarColor: '#7ac143',
              },
              {
                name: '',
                labelColor: '#ffffff',
                activeBarColor: '#5dba46',
              },
            ]}
            //needleImage={Images.meter}
            // wrapperStyle={}
            //outerCircleStyle={{height: 80}}
            // halfCircleStyle={}
            //imageWrapperStyle={{resizeMode: 'contain', height: 100, width: 100}}
            //innerCircleStyle={{width: 130, borderRadius: 65}}
            // labelWrapperStyle={}
            // labelStyle={}
            // labelNoteStyle={}
          />
        </View>
        <View style={{backgroundColor: Colors.white, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 26,
              color: Colors.textColorLight,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Your 150 points away {'\n'}from your next reward tier
          </Text>
        </View>
        {meterValue <= 3000 ? (
          <View
            style={{
              width: '80%',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold', color: Colors.black}}>
              Your current level
            </Text>
          </View>
        ) : null}
        <Image
          source={getImageCall()}
          resizeMode="contain"
          style={{
            height: 280,
            width: '80%',
            marginTop: 20,
            alignSelf: 'center',
          }}></Image>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 35,
              color: Colors.black,
              textAlign: 'center',
            }}>
            {getLevelCall()}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  textInput: {
    height: 25,
    fontSize: 16,
    marginTop: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
  },
});
