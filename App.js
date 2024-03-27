import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from './src/components/CustomTextInput';
import CustomButton from './src/components/CustomButton';
import CustomBottomNav from './src/components/CustomBottomNav';

const App = () => {
  const [name, SetName] = useState('');
  return (
    <View style={styles.mainContainer}>
      <CustomTextInput
        placeholder={'Enter first name'}
        width={'90%'}
        height={50}
        border={1}
        color='black'
        borderRadius={5}
        length={50}
        size={16}
        value={name}
        onChangeText={txt => SetName(txt)}
        keyboardType={'default'}
      //isBad={'Please enter the name'}
      />

      <CustomButton
        title={'Save'}
        borderWidth={1}
        padding={10}
        borderRadius={5}
        marginTop={10}
        onPress={()=>Alert.alert('Hello')}
      />

      <CustomBottomNav 
        backgroundColor={'#f2f2f2'}
        height={60}
        tabs={[
          {
            icon:null,
            title:'Home',
            size:30,
            fontSize:14
          },
          {
            icon:null,
            title:'Search',
            size:30,
            fontSize:14
          },
          {
            icon:null,
            title:'Settings',
            size:30,
            fontSize:14
          }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;