import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../values/styles/textBox'


export const Button = (props) => {

    function navigate() {
        props?.status
            ? props.navigation.navigate(props.children, { status: props.status })
            : props.navigation.navigate(props.children)
    }

    return (
        <TouchableOpacity style={{ height: 50, width: "90%" }} onPress={navigate}>
            <View>
                <Text style={{ ...styles.text }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}
