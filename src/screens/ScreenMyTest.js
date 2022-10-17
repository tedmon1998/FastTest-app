import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { TextBox } from '../components/UI/TextBox'
import { Name } from '../context'



export const ScreenMyTest = () => {
    const { name, setName } = useContext(Name)


    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <TextBox>Hi {name}</TextBox>
            <TextBox>ScreenMyTest</TextBox>
        </View>
    )
}
