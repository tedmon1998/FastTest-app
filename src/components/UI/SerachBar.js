import { TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native";

function SearchBar(props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TextInput style={styles.text} onChangeText={props.onChangeText}>{props.children}</TextInput>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={props.delOnPress} style={styles.button}>
                        <Text style={styles.text}>{props?.delText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.addOnPress} style={styles.button}>
                        <Text style={styles.text}>{props?.addText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: 'black',
        height: 30,
        width: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'gray',
        borderRadius: 15,
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    wrapper: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 15
    }
})

export default SearchBar;
