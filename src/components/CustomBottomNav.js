import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import React from 'react'
//https://youtu.be/kQZ6W5ZX6H0?si=kp7XlW4RMP_ZsDOW
const CustomBottomNav = ({
    tabs,
    onSelected,
    height,
    backgroundColor
}) => {
    return (
        <View
            style={{
                width: '100%',
                position: 'absolute',
                height: height ? height : 70,
                bottom: 0,
                backgroundColor: backgroundColor ? backgroundColor : '#ffff'
            }}
        >
            <FlatList
                horizontal
                data={tabs}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                width: Dimensions.get('window').width / tabs.length,
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center', 
                            }}
                        >
                            {
                                item.icone != null && <Image
                                    source={item.icon}
                                    style={{
                                        width:item.size,
                                        height:item.size
                                    }}
                                />
                            }
                            {
                                item.title != null && <Text
                                    style={{
                                        color: '#000'
                                    }}>
                                    {item.title}
                                </Text>
                            }
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

export default CustomBottomNav