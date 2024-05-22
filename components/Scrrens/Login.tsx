import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>

      <Text style={styles.LoginText}>Login</Text>

    </View>
  )
}

export default Login


const styles= StyleSheet.create({
  LoginText:{
  fontSize: 35,
  fontWeight: '500', // fontWeight should be a string
  color: 'deepskyblue',
  paddingLeft: 120,
  marginBottom: 90,
  marginTop: 380,
  textShadowColor: 'rgba(0, 240, 0, 0.75)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10
  }
})