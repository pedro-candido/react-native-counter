import React from 'react'

import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
    text: string
}

export const Button = ({ text, ...rest }: ButtonProps) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button} 
                {...rest}
            >
                {text}
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        color: 'purple',
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        fontFamily: 'Arial'
    }
})