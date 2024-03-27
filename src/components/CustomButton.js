import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const CustomButton = ({
    title,
    color,
    bg,
    borderColor,
    borderRadius,
    width,
    height,
    marginTop,
    onPress,
    borderWidth,
    padding,
    onFocus
}) => {

    return (
        <TouchableOpacity
            style={{
                borderColor: borderColor ? borderColor : 'black',
                borderWidth: borderWidth ? borderWidth : 1,
                padding: padding ? padding : 10,
                borderRadius: borderRadius ? borderRadius : 10,
                marginTop: marginTop ? marginTop : 10,
                alignItems: 'center',
                justifyContent: 'center',
                width: width ? width : '80%',
                height: height ? height : 'auto',
                borderColor: borderColor ? borderColor : 'black' ? borderColor : '#9e9e9e',
                backgroundColor: bg ? bg : 'black',
            }}
            onPress={(Txt) => onPress(Txt)}
        >
            <Text style={{
                color: color ? color : '#fff',
            }}>
                {title ? title : ''}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton