import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { CounterButtons } from '../../components'

import { RootState } from '../../store/configureStore.store'

export const Counter = () => {
  const { CounterReducer } = useSelector((state: RootState) => state)
  const { value } = CounterReducer
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.countValue}>{value}</Text>
      <CounterButtons />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(144, 34, 255)',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1
  },
  countValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  }
})
