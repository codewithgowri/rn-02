import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  day: number
}

const DayListItem = ({ day }: Props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'gold',
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 10,
    borderColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black'
    , fontSize: 70,
    fontFamily: "AmaticBold"

  }
});


export default DayListItem