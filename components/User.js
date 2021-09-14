import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = ({item}) => {
    console.log(item)
    return (
        <View style={[styles.userBox, styles.margines, styles.sizes]}>
            <Text>
                {item.name}
            </Text>
        </View>
    )
}

export {User}
let styles = StyleSheet.create({
    userBox:{
        flex:1,
        backgroundColor:'pink'
    },
    margines:{
        marginBottom:3,
    },
    sizes:{
        height:100,
        width: 170
    }

});