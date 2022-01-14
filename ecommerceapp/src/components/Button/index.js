import React from "react";
import { Pressable, Text, StyleSheet, onPress} from "react-native";


const Button = ({text, onpres}) => {
    return (
        <Pressable onPress = {onPress} style={newstyles.root}>
            <Text style={newstyles.text}>{text}</Text>
        </Pressable>
    );
};

const newstyles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b',
    },
    text: {
        fontSize: 16,


    },
})

export default Button;