import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { Button } from '../components/UI/Button'
import { TextBox } from '../components/UI/TextBox'
import { Name } from '../context'
import { createDatabase, updateData, deleteDB, insertInto, select, checkExistenceDB } from '../DB/DBManagment'
import { Configuration } from '../values/configuraion'

export const ScreenHome = () => {
    const { name, setName } = useContext(Name)


    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            {/* <Button onPress={() => createDatabase(Configuration.dbName)}>CrateDB</Button>
            <Button onPress={() => updateData(Configuration.dbName, "2", "вопрос 3", "ответ 3")}>updateData</Button>
            <Button onPress={() => deleteDB(Configuration.dbName)}>deleteDB</Button>
            <Button onPress={() => insertInto(Configuration.dbName, "вопрос 1", "ответ 1")}>insertInto</Button>
            <Button onPress={() => select(Configuration.dbName)}>select</Button>
            <Button onPress={() => checkExistenceDB(Configuration.dbName)}>checkExistenceDB</Button> */}
            <TextBox>ScreenHome</TextBox>
        </View>
    )
}
