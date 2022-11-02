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
import { openDatabaseAndCreate } from '../DB/DBManagment'

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

    const [posts, setPosts] = useState([])

    const [fetchingPost, isLoadingPost, errorPost] = useFetching(async () => {
        const response = await PostServer.getAllPosts()
        setPosts(response.data)
    })

    const [totalCount, setTotalCount] = useState(50)

    const [fetchingOnePagePost, isLoadingOnePagePost, erroOnePagerPost] = useFetching(async (page) => {
        const response = await PostServer.getPagePost(page)
        setTotalCount(response.headers['x-total-count'])
        setPosts(response.data)
    })


    // useEffect(() => {
    //     console.log(`searchResult: ${JSON.stringify(searchResult)}`);
    // }, [searchResult])

    const [page, setPage] = useState(1)

    function newPage(n) {
        if (totalCount >= n + page && n + page >= 0) {
            setPage(old => old + n)
            fetchingOnePagePost(page)
        }
    }


    return (
        (isLoadingOnePagePost === false ?
            <View style={{ flex: 1 }}>
                <StatusBar />
                <Button onPress={openDatabaseAndCreate}>OpenMyOfflineDB</Button>
                {/* <Button onPress={() => fetchingOnePagePost(page)}>GetPost {page}</Button> */}
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button onPress={() => newPage(1)}>+</Button>
                    <Button onPress={() => newPage(-1)}>-</Button>
                </View>
                <ScrollView>
                    {posts.length > 0 && posts.map((item, i) => (
                        <View>
                            <Text key={item.id}>{item.title}</Text>
                            <Text key={i}>--------------------------</Text>
                        </View>
                    ))}
                </ScrollView>
                {/* <SearchBar onChangeText={setSearchResult} delOnPress={del} addOnPress={add} delText='del' addText='add'></SearchBar> */}
                {/* {state.map((item, i) => <Text key={i}>{item}</Text>)} */}
                {/* <Button onPress={() => createDatabase(Configuration.dbName)}>CrateDB</Button>
            <Button onPress={() => updateData(Configuration.dbName, "2", "вопрос 3", "ответ 3")}>updateData</Button>
            <Button onPress={() => deleteDB(Configuration.dbName)}>deleteDB</Button>
            <Button onPress={() => insertInto(Configuration.dbName, "вопрос 1", "ответ 1")}>insertInto</Button>
            <Button onPress={() => select(Configuration.dbName)}>select</Button>
            <Button onPress={() => checkExistenceDB(Configuration.dbName)}>checkExistenceDB</Button> */}
                <Button onPress={() => checkExistenceDB('testDB.sqlite')}>checkExistenceDB</Button>
                <Button onPress={() => select('testDB.sqlite')}>select</Button>
                <Button onPress={() => deleteDB('testDB.sqlite')}>deleteDB</Button>
                <TextBox>ScreenHome</TextBox>
            </View>
            : <TextBox>Loading...</TextBox>
        )
    )
}