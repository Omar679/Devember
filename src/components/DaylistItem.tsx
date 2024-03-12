import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type IDaylistItem = {
    day:number
}

const DaylistItem = ({day}:IDaylistItem) => {
  return (
    <View  style={styles.box}>
            <Text style={styles.text}> {day}</Text>
          </View>
  )
}

export default DaylistItem

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#f9ede3",
        flex: 1,
        aspectRatio: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderBlockColor: "#9b4521",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        color: "#9b4521",
        fontSize: 70,
      },
})