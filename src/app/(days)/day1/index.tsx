import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <Text style={{ fontFamily: 'AmaticBold' }}>day1</Text>
    </View>
  )
}

export default index