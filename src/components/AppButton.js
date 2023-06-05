import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../utils/Colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

export default function AppButton(props) {
  return (
    <TouchableOpacity
      style={[
        {
          width: '85%',
          height: 55,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.buttonColor,
          borderRadius: 3,
          alignSelf: 'center',
        },
        props.btnStyle,
      ]}
      onPress={props.onPress}>
      <Text
        allowFontScaling={false}
        style={[
          {
            color: Colors.white,
            fontSize: 14,
          },
          props.textStyle,
        ]}>
        {props.btnText}
      </Text>
    </TouchableOpacity>
  );
}
