import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const UserDetails = (props) => {
    console.log(props)
    let {route:{params:{data}}, navigation}= props;

    return (
        <View>
            <Text>
                {data.name}-
                {data.id}
                <br/>
                {data.email}
            </Text>
        </View>
    )
}

export {UserDetails}
let styles = StyleSheet.create({});