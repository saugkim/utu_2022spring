import { StyleSheet } from "react-native"

//flexDirection, alignItems, and justifyContent

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 8,
        justifyContent: "space-around",
    },

    scrollView: {
        flexDirection: "column",
        flex: 0.9,
        padding: 5,
    },

    button: {
        flex: 0.1,
        marginStart:30,
        marginEnd:30,
    },

    noteView: {
        backgroundColor: 'yellow',
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 6,
        margin: 2,
        textAlign: 'left'
    },

    textInput: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 15,
        padding: 10,
        margin: 5
    },

});

export default styles;
