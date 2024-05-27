import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import COLORS from '@/constants/Colors';
import { Dimensions } from 'react-native';
import Button from '../Button';
import { NavigationProp } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const { width, height } = Dimensions.get("window");

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["rgba(0, 166, 255,1)", "rgba(0, 191, 255,-.45)"]} style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Log in</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{ color: "#D3D3D3", fontSize: 20, paddingLeft: 20, top: 20 }}>Hey there, good to see you again!</Text>
          <Text style={styles.footerText}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#D3D3D3"
              keyboardType="phone-pad"
            />
          </View>
          <Text style={{ paddingLeft: 10, paddingTop: 12, fontSize: 18, color: '#000000' }}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#D3D3D3"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setIsPasswordVisible(prevState => !prevState)}
            >
              <Ionicons
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <Button
            style={{ bottom: 0, top: 40 }}
            title="Log in"
            onPress={() => navigation.navigate('OwnerSignup')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
            <Text style={{ color: '#D3D3D3', top: -55, paddingLeft: 10 }}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#00BFFF', top: 40, paddingLeft: 110 }}>Create new account</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
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
    paddingTop: 24,
    paddingLeft: 1
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
    paddingTop: 54,
    fontSize: 18,
    color: '#000000'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    marginVertical: 8,
    paddingLeft: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000'
  },
  eyeIcon: {
    padding: 10,
  },
});

export default Login;
