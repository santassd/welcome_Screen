import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import COLORS from '@/constants/Colors';
import { Dimensions } from 'react-native';
import Button from '../Button';
import { NavigationProp } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const { width, height } = Dimensions.get("window");

interface SignupProps {
  navigation: NavigationProp<any>;
}

const Signup: React.FC<SignupProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <LinearGradient colors={["rgba(0, 166, 255,1)", "rgba(0, 191, 255,-.45)"]} style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign up</Text>
        </View>
        <View style={styles.footer}>
         <Text style={styles.footerText}>First Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              placeholderTextColor="#D3D3D3"
              keyboardType="default"
            />
          </View>
          <Text style={styles.footerText}>Last Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Last Name"
              placeholderTextColor="#D3D3D3"
            />
          </View>
          <Text style={styles.footerText}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#D3D3D3"
              keyboardType="phone-pad"
            />
          </View>
          <Text style={styles.footerText}>E-mail Adress</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your E-mail Adress"
              placeholderTextColor="#D3D3D3"
              keyboardType="default"
            />
          </View>
          <Button
            style={{ bottom: 0, top: 20 }}
            title="Sign Up"
            onPress={() => navigation.navigate('Verification')}
          />
          <Text style={{ color: "#D3D3D3", top: 30, paddingLeft: 60 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#00BFFF', top: 11, paddingLeft: 219 }}>Log in</Text>
          </TouchableOpacity>
          <Text style={{color:'#00BFFF',top:34,paddingLeft:92}}>Terms and Conditions</Text>
          <Text style={{color:'#00BFFF',top:48,paddingLeft:114}}>Privacy policy</Text>
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
    flex: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  footerText: {
    paddingLeft: 10,
    paddingTop: 18,
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
    paddingLeft: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000'
  },
});

export default Signup;
