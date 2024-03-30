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
import CustomWelcomeNav from './src/components/CustomWelcomeNav';

const App = () => {
  const [name, SetName] = useState('');
  return (
    <View style={styles.mainContainer}>
      {/* <CustomTextInput
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
            icon:require("./assets/images/home.png"),
            activeTab:require("./assets/images/home1.png"),
            title:'Home',
            size:30,
            fontSize:14
          },
          {
            icon:require("./assets/images/search.png"),
            activeTab:require("./assets/images/search1.png"),
            title:'Search',
            size:30,
            fontSize:14
          },
          {
            icon:require("./assets/images/settings.png"),
            activeTab:require("./assets/images/settings1.png"),
            title:'Settings',
            size:30,
            fontSize:14
          }
        ]}
      /> */}
      <CustomWelcomeNav 
        screens={[
          {
            image:require("./assets/images/welcomescreen1.jpg"),
            title:"Find someone who loves Cycling.",
            desc:"Let build a community to find the people of similar interest like Cycling .",
            size:450
          },
          {
            image:require("./assets/images/welcomescreen2.jpg"),
            title:"Find someone who loves photography.",
            desc:"Let build a community to find the people of similar interest like potographer .",
            size:450
          },
          {
            image:require("./assets/images/welcomescreen3.jpg"),
            title:"Find someone who loves painting.",
            desc:"Let build a community to find the people of similar interest like painting .",
            size:450
          }
        ]}
        titleStyle={{ fontSize:23, color:'red', marginTop:20, paddingHorizontal:10}}
        descStyle={{ fontSize:16, color:'#000', marginTop:20,paddingHorizontal:10}}
        activeDotColor={'red'}
        nonActiveDotColor={'purple'}
        onContinue={()=>{
          Alert.alert("Reached Ended")
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor:'red'
  }
})

export default App;