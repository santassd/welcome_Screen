import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,  Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import COLORS from '@/constants/Colors';
import { Dimensions } from 'react-native';
import Button from './Button';
import {NavigationProp} from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get("window");

interface VerificationsProps {
  navigation: NavigationProp<any>;
}

const Verifications: React.FC<VerificationsProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient colors={["rgba(0, 166, 255,1)", "rgba(0, 191, 255,-.45)"]} style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Verification</Text>
        </View>
        <View style={styles.footer}>
        <Text style={{color:'grey',paddingLeft:60,top:20}}>Check your email inbox and spam</Text>
        <Text style={{color:'grey',paddingLeft:80,top:24}}>folder for the code sent to</Text>
        <Text  style={{color:'grey',paddingLeft:99,top:28}}>san**50@gmail.com</Text>
        </View>
        <View style={styles.footer}>
                <Text style={{top:-180,paddingLeft:10,fontSize:18}}>Enter the Code</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Code goes here"
                    placeholderTextColor="#D3D3D3"
                    keyboardType="phone-pad"
                  />
                </View>
                <Text style={{color:'grey',paddingLeft:280,top:-211}}>Resend</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
                <Text style={{color:'deepskyblue',paddingLeft:96,top:-100}}>Use mobile number instead</Text>
                </TouchableOpacity>
                <Button
                  style={{ bottom: 0, top:-190 }}
                  title="Confirm"
                  onPress={() => navigation.navigate('Password')}
                />
              </View>
        </LinearGradient>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      paddingBottom: 13,
    },
    backButton: {
      marginRight: 10,
      paddingTop:24,
      paddingLeft:1
    },
    headerText: {
      fontSize: 24,
      color: '#ffffff',
      paddingTop: 24,
    },
    footer: {
      flex: 12,
      backgroundColor: '#ffffff',
      paddingHorizontal: 10,
      paddingVertical: 8
    },
    footerText: {
      paddingLeft: 10,
      paddingTop: 22,
      fontSize: 18,
      color: '#000000'
    },
    inputContainer: {
      width: '98%',
      height: 48,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 6,
      justifyContent: 'center',
      marginVertical: 6,
      paddingLeft: 20,
      bottom:170
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#000000',
    
    },
    normalText: {
      bottom:89,
      color:'grey',
      paddingLeft:18,
      paddingTop:103,
    },
  });
  
 
  

export default Verifications;