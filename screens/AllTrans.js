import React from 'react'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo'

import colors from '../assets/colors/colors';

import transData from '../assets/data/transData'
import DayTrans from '../assets/data/DayTrans'
import {useFonts} from 'expo-font'


const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width
const AllTrans =({navigation})=>{
    // loading Fonts 
    const [loaded] = useFonts({
        latoBlack: require('../assets/font/Lato-Black.ttf'),
        latoRegular: require('../assets/font/Lato-Regular.ttf'),
        latoBold: require('../assets/font/Lato-Bold.ttf'),
    })
    if (!loaded) {
        return null
    }

//---------------------------------------------------------------


const renderDayTrans=({item})=>{
    return(
        <View style={styles.itemWrapper}>
                <Text style={styles.itemDate}>{item.Did}</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('AllDayTrans',
                {
                    item:item
                })}
                style={styles.transcationShadow}
                >
                <View style={[styles.itemContentWrapper,]}>
                    <View style={styles.itemDay}>
                        <Text style={styles.itemDayText}>{item.Did.slice(0,2)}</Text>
                    </View>
    
                    <View style={styles.transAmountWrapper}>
                        <Text style={styles.transAmounText}>Total Transaction</Text>
                        <Text style={styles.itemText}>{item.totaltrans}</Text>
                    </View>
    
                    <View style={styles.transAmountWrapper}>
                        <Text style={styles.transAmounText}>Amount</Text>
                        <Text style={styles.itemText}>₹{item.totalAmount}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
    
    )
}


//---------------------------------------------------------------


    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.yearWrapper}>
            <View style={styles.yearItem}>
                <Text>Year</Text>
                <Entypo name='chevron-down' size={20}/>
            </View>
        </View>
        <View>
            <FlatList
            style={{height:winHeight-130,
                    }}
            data={DayTrans}
            renderItem={renderDayTrans}
            keyExtractor={(item)=>{item.Did}}
            showsVerticalScrollIndication={false}
            >
            </FlatList>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.white
    },
    yearWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    yearItem:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:colors.white,
        padding:10,
        borderRadius:10,
        borderWidth:2,
        borderColor:colors.black,
        width:152,
    },
    itemWrapper:{
        marginTop:20,
        marginHorizontal:25,
        // backgroundColor:colors.gray,
        
    },
    itemDate:{

    },
    itemContentWrapper:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        height:100,
        width:winWidth*0.85,
        shadowColor: "#000",
            },

            itemDay:{

    },
    itemDayText:{
        fontFamily:'latoBold',
        fontSize:32,
    },
    transAmountWrapper:{
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:colors.gray,
        
        
    },
    transAmounText:{
        fontFamily:'latoRegular',
        fontSize:13,
    },
    itemText:{
        paddingTop:5,
        fontFamily:'latoBold',
        fontSize:24,

    },
    transcationShadow:{
        // backgroundColor:'red',
        selevation: 7,
        shadowColor: "black",
        shadowOffset: { width: 10 },
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})

export default AllTrans;