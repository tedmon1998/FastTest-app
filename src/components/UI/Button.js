import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../values/styles/textBox'


export const Button = (props) => {


    return (
        <TouchableOpacity style={{ height: 50, width: "90%" }} onPress={props.onPress}>
            <View>
                <Text style={{ ...styles.text }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}
