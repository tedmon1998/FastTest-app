import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/UI/SerachBar'
import { Button } from '../components/UI/Button'
import { TextBox } from '../components/UI/TextBox'
import { Name } from '../context'
import { createDatabase, updateData, deleteDB, insertInto, select, checkExistenceDB } from '../DB/DBManagment'
// import { Configuration } from '../values/configuraion'
import Directory from '../values/directory'
import PostServer from '../API/PostServer'
import { useFetching } from '../components/hooks/useFetching'
import { openDatabaseAndCreate, getRows } from '../DB/DBManagment'

export const ScreenHome = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const [fetchingAddUser, isLoadingAddUser, errorAddUser] = useFetching(async (name, phone) => {
        const response = await PostServer.addUser(name, phone)
        if (response.res !== false) {
            fetchingGetUser()
            setName("")
            setPhone("")
        }
    })
    const [fetchingDelUser, isLoadingDelUser, errorDelUser] = useFetching(async (id_person) => {
        const response = await PostServer.delUser(id_person)
        if (response.res !== false) {
            fetchingGetUser()
        }
    })
    const [fetchingGetUser, isLoadingGetUser, errorGetUser] = useFetching(async () => {
        const response = await PostServer.getDirectory()
        if (response.res !== false) {
            console.log(`response.res ${JSON.stringify(response.res)}`);
            setdbRows(response.res.map(item => (
                <TouchableOpacity key={item.id_person} onPress={() => fetchingDelUser(item.id_person)}>
                    <Text>{item.name} | {item.phone}</Text>
                </TouchableOpacity>
            )))
        }
    })


    const [dbRows, setdbRows] = useState([])


    return (
        ((isLoadingGetUser === false) ?
            <View style={{ flex: 1 }}>
                <StatusBar />
                <TextInput placeholder='name' onChangeText={setName}>{name}</TextInput>
                <TextInput placeholder='phone' onChangeText={setPhone}>{phone}</TextInput>
                <Button onPress={fetchingGetUser}>getUsers</Button>
                <Button onPress={() => fetchingAddUser(name, phone)}>addUsers</Button>
                <ScrollView>
                    {dbRows?.length > 0 && dbRows}
                </ScrollView>
                <TextBox>ScreenHome</TextBox>
            </View>
            : <TextBox>Loading...</TextBox>
        )
    )
}