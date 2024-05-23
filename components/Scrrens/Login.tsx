import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import COLORS from '@/constants/Colors';
import { Dimensions } from 'react-native';
import Button from '../Button';
import { NavigationProp } from '@react-navigation/native';

interface LoginProps {
  navigation: NavigationProp<any>;
}



const { width, height } = Dimensions.get("window");

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["rgba(0, 166, 255,1)", "rgba(0, 191, 255,-.45)"]} style={{ flex: 1 }}>

        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.headerText}>Log in</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{color:"#D3D3D3",fontSize:20,paddingLeft:18}}>Welcome Resident!</Text>
          <Text style={styles.footerText}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#D3D3D3"
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.footerText}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#D3D3D3"
              secureTextEntry
            />
          </View>
          <Button style={{bottom:0,top:9}}
          title="Log in"
          onPress={() => navigation.navigate('OwnerSignup')}
        />
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    paddingLeft: 20,
    paddingTop: 24
  },
  footer: {
    flex: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  footerText: {
    paddingLeft: 18,
    paddingTop: 22,
    fontSize: 18,
    color: '#000000'
  },
  inputContainer: {
    width: '98%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    marginVertical: 12,
    paddingLeft: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000'
  }
});

export default Login;

