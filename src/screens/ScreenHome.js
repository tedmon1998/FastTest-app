import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/UI/SerachBar'
// import { Button } from '../components/UI/Button'
import { TextBox } from '../components/UI/TextBox'
import { Name } from '../context'
// import { createDatabase, updateData, deleteDB, insertInto, select, checkExistenceDB } from '../DB/DBManagment'
// import { Configuration } from '../values/configuraion'
import Directory from '../values/directory'

export const ScreenHome = () => {
    // const { name, setName } = useContext(Name)
    const [searchResult, setSearchResult] = useState(Directory)


    const dispatch = useDispatch()
    const state = useSelector(state => state)


    // function onChange(text) {
    //     // setSearchResult(Directory))
    // }

    function del() {
        dispatch({ type: 'DEL_NAME', payload: searchResult })
        // console.log('del');
    }

    function add() {
        dispatch({ type: 'ADD_NAME', payload: searchResult })
        // console.log('add');
    }

    // useEffect(() => {
    //     console.log(`searchResult: ${JSON.stringify(searchResult)}`);
    // }, [searchResult])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            <SearchBar onChangeText={setSearchResult} delOnPress={del} addOnPress={add} delText='del' addText='add'></SearchBar>
            {state.map((item, i) => <Text key={i}>{item}</Text>)}
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
