import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { sumCount, subtCount } from '../../reducers/Counter.reducer'

export const CounterButtons = () => {
  const navigate = useNavigation()
  const dispatch = useDispatch()

  const handleNavigate = () => {
    navigate.goBack()
  }

  const handleSum = () => {
    dispatch(sumCount(1))
  }

  const handleSubt = () => {
    dispatch(subtCount(1))
  }

  return (
    <SafeAreaView>
      <View style={styles.buttonsContainer}>
        <View style={styles.firstButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSum}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubt}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleNavigate}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 4,
    textAlign: 'center',
    width: 40,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'rgb(144, 34, 255)',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 20,
    textAlign: 'center'
  },
  firstButtonContainer: {
    marginRight: 5
  },
  backButton: {
    padding: 10,
    backgroundColor: '#fff',
    maxWidth: 100,
    borderRadius: 5
  },
  backButtonText: {
    color: 'rgb(144, 34, 255)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial'
  },
  backButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
})
