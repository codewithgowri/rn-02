import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

interface Props {
  day: number
}

const DayListItem = ({ day }: Props) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
        {/* <Link href={"/about"}>About</Link> */}
      </Pressable>
    </Link>
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