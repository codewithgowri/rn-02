import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2' }} />
      <Text>day2</Text>
    </View>
  )
}

export default index