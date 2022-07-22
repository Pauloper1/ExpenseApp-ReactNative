import React from 'react'
import { View, StyleSheet, Text } from "react-native";

const NewTrans =()=>{
    return(
        <View style={styles.container}>
            <Text>New Transactions</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default NewTrans