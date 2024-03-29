import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import React, { useRef, useState } from 'react'

const CustomWelcomeNav = ({
    screens,
    activeDotColor,
    nonActiveDotColor,
    bgColor,
    btnBgColor,
    Color,
    titleStyle,
    descStyle,
    onContinue,
}) => {
    const [activeDot, SetActiveDot] = useState(0);
    const flatlistRef = useRef();
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View >
                <FlatList
                    horizontal
                    ref={flatlistRef}
                    data={screens}
                    pagingEnabled
                    onScroll={(e) => {
                        SetActiveDot((e.nativeEvent.contentOffset.x / Dimensions.get('window').width).toFixed(0));
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                height: '80%',
                                width: Dimensions.get("window").width,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 10
                            }}>
                                <Image
                                    source={item.image}
                                    style={{
                                        height: '80%',
                                        width: '90%',
                                        resizeMode: 'contain',
                                        marginTop: 10
                                    }}

                                />
                                <Text style={titleStyle ? titleStyle : {
                                    color: '#000'
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={
                                    descStyle ? descStyle : {
                                        fontSize: 16
                                    }
                                }>{item.desc}</Text>
                            </View>

                        )
                    }}
                />
            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                {
                    screens.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 10,
                                    backgroundColor: activeDot == index ? activeDotColor ? activeDotColor : '#000' : nonActiveDotColor ? nonActiveDotColor : '#9e9e9e',
                                    marginLeft: 10
                                }}
                            >
                            </View>
                        )
                    })
                }
            </View>
            <View style={{
                bottom: 20,
                width: '100%',
                position: 'absolute',
                //backgroundColor:'#9e9e9e',
                flexDirection: 'row'
            }}>
                <View style={{
                    width: '50%',
                    paddingLeft: 30
                }}>
                    {
                        activeDot != 0 && (
                            <TouchableOpacity
                                style={[styles.prvNxtBtn, { backgroundColor: bgColor ? bgColor : 'black' }]
                                }
                                onPress={() => {
                                    flatlistRef.current.scrollToIndex({
                                        animation:true,
                                        index:parseInt(activeDot)-1
                                    })
                                }}
                            >
                                <Text style={{
                                    color: Color ? Color : '#fff'
                                }}>
                                    Previous
                                </Text>
                            </TouchableOpacity>
                        )
                    }

                </View>
                <View style={{
                    width: '50%',
                    paddingRight: 30,
                    alignItems: 'flex-end'
                }}>
                    {
                        activeDot < screens.length - 1 ? (
                            <TouchableOpacity
                                style={[styles.prvNxtBtn, { backgroundColor: bgColor ? bgColor : 'black' }]
                                }
                                onPress={() => {
                                    flatlistRef.current.scrollToIndex({
                                        animation:true,
                                        index:parseInt(activeDot)+1
                                    })
                                }}
                            >
                                <Text style={{
                                    color: Color ? Color : '#fff'
                                }}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        )
                            :
                            (
                                <TouchableOpacity
                                    style={[styles.prvNxtBtn, { backgroundColor: bgColor ? bgColor : 'black' }]
                                    }
                                    onPress={() => {
                                        onContinue();
                                    }}
                                >
                                    <Text style={{
                                        color: Color ? Color : '#fff'
                                    }}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>
                            )

                    }

                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        //backgroundColor:'blue'
    },

    prvNxtBtn: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 8,
        padding: 10
    }
})

export default CustomWelcomeNav