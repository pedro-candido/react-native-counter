import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Home = () => {
  const navigation = useNavigation()
  const handleClick = () => {
    navigation.navigate('Counter')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome to{'\n'}CountApp
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleClick}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(144, 34, 255)',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4
  },
  buttonText: {
    color: 'rgb(144, 34, 255)',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18
  }
})
