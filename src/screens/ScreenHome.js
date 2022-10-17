import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { TextBox } from '../components/UI/TextBox'
import { Name } from '../context'


export const ScreenHome = () => {
    const { name, setName } = useContext(Name)

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <TextInput onChangeText={setName}>{name}</TextInput>
            <TextBox>Hi {name}</TextBox>
            <TextBox>ScreenHome</TextBox>
        </View>
    )
}
