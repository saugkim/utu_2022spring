import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: "column",
        flex: 0.90,
        padding: 5,
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
