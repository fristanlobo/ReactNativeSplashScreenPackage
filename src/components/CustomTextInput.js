import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({
  placeholder,
  length,
  color,
  placeholdercolor,
  size,
  onChangeText,
  value,
  isBad,
  keyboardType,
  bg,
  border,
  width,
  height,
  borderRadius,
  mt
}) => {
  const [isFocused, SetIsFocused] = useState(false);
  return (
    <View style={{
      width: width ? width : '90%',
      alignSelf: 'center',
      marginTop: mt ? mt : 10
    }}>
      <View style={{
        width: '100%',
        height: height ? height : 50,
        borderWidth: border ? border : 0,
        borderRadius: borderRadius ? borderRadius : 7,
        paddingLeft: 20,
        borderColor: border ? isBad ? 'red' : isFocused ? 'black' : '#9e9e9e' : '#9e9e9e'
      }}>
        <TextInput
          onFocus={() => {
            SetIsFocused(true);
          }}
          onBlur={() => {
            SetIsFocused(false);
          }}
          placeholder={placeholder ? placeholder : 'Enter Text here'}
          value={value ? value : ''}
          onChange={txt => onChangeText(txt)}
          keyboardType={keyboardType ? keyboardType : 'default'}
          style={{
            color: color ? color : 'black',
            backgroundColor: bg ? bg : 'white',
            fontSize: size ? size : 14,
          }}
          maxLength={length ? length : 300}
          placeholderTextColor={placeholdercolor ? placeholdercolor : '#9e9e9e'}
        />
      </View>
      {
        isBad ? <Text
          style={{
            fontSize: 16,
            color: 'red',
            paddingTop: 5
          }}
        >
          {isBad}
        </Text>
          :
          null
      }
    </View>

  )
}

const styles = StyleSheet.create({
  // containerMain: {
  //   width: width ? width : '90%'
  // }
})

export default CustomTextInput