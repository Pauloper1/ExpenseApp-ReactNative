import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    ImageBackground,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../assets/colors/colors'

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

const backgroundImageSelector = (bgImage) => {
    ;
    switch (bgImage) {
        case 'Shopping':
            return require("../assets/images/shoppingBg.jpg");
        case 'Travelling':
            return (require('../assets/images/TravellingBg.jpg'))
        case 'Food':
            return require("../assets/images/foodBg.jpg");
    }
}
const TransDetails = ({ route, navigation }) => {
    const item = route.params.item
    // console.log(item)
    return (
        <SafeAreaView style={{backgroundColor:colors.width}}>
            <ImageBackground
                source={backgroundImageSelector(item.subject)}
                // styleImage={styles.bgStyle}
                style={styles.bgStyle}
            >
                <View style={styles.container}>

                    <View style={styles.commonWrapper}>
                        <Text style={styles.dateText}>{item.Did}</Text>
                    </View>

                    <View style={styles.commonWrapper}>
                        {/* <Text style={styles.title}>Subject</Text>  */}
                        <Text style={styles.subjectText}>{item.subject}</Text>
                    </View>

                    <View style={styles.DescriptionWrapper}>
                        {/* <Text style={styles.title}>description</Text>  */}
                        <Text style={styles.DescriptionText}>{item.description}</Text>
                    </View>

                    <View style={[styles.amountWrapper]}>
                        {/* <Text style={styles.title}>Amount</Text>  */}
                        <Text style={styles.RupeeSymbol}> ₹ </Text>
                        <Text style={styles.amountText}>{item.amount}</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: winHeight * 0.9,
        alignItems: "center",
        justifyContent: "space-around",
        // backgroundColor:colors.gray,
        marginHorizontal: winWidth * 0.05,
        marginTop: winWidth * 0.1,
    },
    bgStyle: {
        height: winHeight * 0.6,
        width: winWidth,
        borderBottomRightRadius: 10,
    },
    commonWrapper: {
        
        height: winWidth * 0.13,
        width: winWidth * 0.7,
        justifyContent: "center",
        borderRadius: winWidth * 0.02,
        paddingLeft: 10,
        backgroundColor: colors.white,
    },
    dateText: {
        fontFamily: "latoRegular",
        fontSize: 17,
    },
    
    subjectText: {
        fontFamily: "latoRegular",
        fontSize: 17,
    },
    DescriptionText: {
        fontFamily: "latoRegular",
        fontSize: 17,
    },
    DescriptionWrapper: {
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    DescriptionText: {
        padding: 20,
        
    },
    
    amountWrapper:{
        flexDirection:'row',
        backgroundColor: colors.white,
        height: winWidth * 0.13,
        width: winWidth * 0.7,
        // justifyContent: "center",
        alignItems:'center',
        borderRadius: winWidth * 0.02,
        paddingLeft: 10,
    },
    amountText: {
        fontFamily: "latoRegular",
        fontSize: 17,
    },
    RupeeSymbol: {
        fontFamily:'latoBold',
        fontSize:24,
    },
});

export default TransDetails;