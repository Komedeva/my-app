import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    let {item, nav:{navigate}} = props;
    console.log(props)

    let onPress = () => {
        console.log('press')
        navigate('UserDetails', {data:item})
    }

    return (
        <View style={[styles.userBox, styles.margines, styles.sizes]}>
            <Text>
                {item.name}
            </Text>
            <Button title={'user details'} onPress={onPress}/>
        </View>
    )
}

export {User}

let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'pink'
    },
    margines: {
        marginBottom: 3,
    },
    sizes: {
        height: 100,
        width: 170
    }

});