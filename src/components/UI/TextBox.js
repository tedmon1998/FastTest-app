import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../values/styles/textBox'


export const TextBox = ({ children }) => {

    return (
        <View style={{ ...styles.container }}>
            <Text style={{ ...styles.text }}>{children}</Text>
        </View>
    )
}
