import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import categoryData from '../assets/data/CategoryData';
import transData from '../assets/data/transData';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../assets/colors/colors';


const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

// console.log(winHeight)
// console.log(winWidth)

const IconSelector = (Icon)=>{
    switch(Icon){
        case 'Shopping':
            return(require('../assets/images/Shop.png'))
        case 'Travelling':
            return(require('../assets/images/Travel.png'))
        case 'Food':
            return(require('../assets/images/Food.png'))
    }
}


const AllDayTrans =({route,navigation})=>{
    // console.log(route)
    const AllTrans = route.params.item
    // console.log(route.params.item.Did);
    // console.log(AllTrans);


    const renderTransaction=({item})=>{
        // console.log(item)
        if(AllTrans.Did == item.Did)
        return(
            <TouchableOpacity
                onPress={() => navigation.navigate('Details',
                {
                    item:item
                })}
                style={styles.transcationShadow}
                >
                <View style={[styles.itemContentWrapper]}>
                    <View style={styles.itemIcon}>
                        <Image source={(IconSelector(item.subject) )}
                        style={styles.imageStyle}
                        />
                    </View>
    
                    <View style={styles.subjectWrapper}>
                        <Text style={styles.subjectText}>Subject</Text>
                        <Text style={styles.itemText}>{item.subject}</Text>
                    </View>
    
                    <View style={styles.AmountWrapper}>
                        <Text style={styles.amount}>Amount</Text>
                        <Text style={styles.itemAmount}>₹{item.amount}</Text>
                    </View>
                </View>
                </TouchableOpacity>

        )
    }


    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity 
                onPress={()=>{navigation.goBack()}}>
                <Entypo name='chevron-left' size={32} />
                </TouchableOpacity>
            </View>
        <View style={styles.DayTransactionWrapper}>
            <Text style={styles.DayTransactionText}>{AllTrans.Did}</Text>
        </View>
        <View>
            <FlatList
            data={transData}
            renderItem={renderTransaction}
            keyExtractor={(item)=>{item.Tid}}
            
            showsVerticalScrollIndicator={false}
            ></FlatList>
        </View>


            <TouchableOpacity
            style={styles.addIconWrapper}
            onPress={()=>{navigation.navigate('NewTrans')}}
            >
                <Entypo name='plus' size={32} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    

    //Date Style
    DayTransactionWrapper:{
        marginHorizontal:winHeight*0.04
    },
    DayTransactionText:{
        fontFamily:'latoRegular',
        fontSize:13,
    },

    transcationShadow:{},
    
    //Trasaction Wrapper
    itemContentWrapper:{
        flexDirection:'row',
        
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:20,
        height:100,
        marginTop:10,
        marginHorizontal:winWidth*0.05,
        borderWidth:1
    },

    //Icon Style
    itemIcon:{
        height:winHeight*0.1,
        width:44,
        
        paddingRight:winHeight*0.07,
        borderRightColor: 'black',
        borderRightWidth: 1,
        // alignItems:'center',
        justifyContent:'center',
    },
    imageStyle:{
        height:34,
        width:34,

    },


    //Subject Style
    subjectWrapper:{
        
        alignItems:'center',
        justifyContent:'space-around',
        height:winHeight*0.08,
        
    },
    subjectText:{
        fontFamily:'latoRegular',
        fontSize:13,
    },
    itemText:{
        paddingTop:5,
        fontFamily:'latoBold',
        fontSize:24,
    },
    
    //Amount Style
    AmountWrapper:{
        alignItems:'center',
        justifyContent:'space-around',
        height:winHeight*0.08,
    },
    amount:{
        fontFamily:'latoRegular',
        fontSize:13,
    },
    itemAmount:{
        paddingTop:5,
        fontFamily:'latoBold',
        fontSize:24,
    },

    //Add Icon Style
    addIconWrapper:{
        backgroundColor:colors.gray,
        position:'absolute',
        top:winHeight*0.7,
        left:winWidth*0.44,
        height:winWidth*0.17,
        width:winWidth*0.17,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:winHeight,
    },
    
})

export default AllDayTrans;