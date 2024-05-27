// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity,  Keyboard } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'react-native';
// import COLORS from '@/constants/Colors';
// import { Dimensions } from 'react-native';
// import Button from './Button';
// import {NavigationProp} from '@react-navigation/native';
// import Ionicons from '@expo/vector-icons/Ionicons';

// const { width, height } = Dimensions.get("window");
// interface PasswordProps {
//   navigation: NavigationProp<any>;
// }

// const Password: React.FC<PasswordProps> = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <LinearGradient colors={["rgba(0, 166, 255,1)", "rgba(0, 191, 255,-.45)"]} style={{ flex: 1 }}>
//         <StatusBar hidden />
//            <View style={styles.header}>
//            <TouchableOpacity onPress={() => { console.log("Back button pressed"); navigation.goBack(); }}>
//                   <Ionicons name="arrow-back" size={24} color="#fff" style={styles.backButton} />
//                        </TouchableOpacity>
//                 <Text style={styles.headerText}>Password</Text>
//                 </View>
//         <View style={styles.footer}>
//           <Text style={{ color: "#D3D3D3", fontSize: 14, paddingLeft: 34,top:14 }}>Create a password for your new account</Text>
//           <Text style={styles.footerText}>Password</Text>
//           <View style={styles.inputContainer}>
//           <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           placeholderTextColor="#D3D3D3"
//           keyboardType="default"
//           secureTextEntry={true}
//         />
//         </View>
//         <Text style={styles.footerText}>Confirm password</Text>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm your password"
//               placeholderTextColor="#D3D3D3"
//               keyboardType="default"
//               secureTextEntry={true}

//             />
//           </View>
//           <Button
//             style={{ bottom: 0, top: 50 }}
//             title="Create new account"
//             onPress={() => navigation.navigate('Completeprofile')}
//           />
//         </View>
//               </LinearGradient>
//     </SafeAreaView>
//   )
// }





// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingHorizontal: 20,
//     paddingBottom: 13,
//   },
//   backButton: {
//     marginRight: 10,
//     paddingTop:24,
//     paddingLeft:1
//   },
//   headerText: {
//     fontSize: 24,
//     color: '#ffffff',
//     paddingTop: 24,
//   },
//   footer: {
//     flex: 12,
//     backgroundColor: '#ffffff',
//     paddingHorizontal: 10,
//     paddingVertical: 8
//   },
//   footerText: {
//     paddingLeft: 10,
//     paddingTop: 65,
//     fontSize: 18,
//     color: '#000000'
//   },
//   inputContainer: {
//     width: '98%',
//     height: 48,
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 6,
//     justifyContent: 'center',
//     marginVertical: -2,
//     paddingLeft: 20,
//     bottom:-10
//   },
  
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000000',
  
//   },
//   normalText: {
//     bottom:89,
//     color:'grey',
//     paddingLeft:18,
//     paddingTop:103,
//   },

//   emoji: {
//     fontSize: 24,
//     paddingLeft: 10,
//   }
// });

// export default Password

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import COLORS from '@/constants/Colors';
import { Dimensions } from 'react-native';
import Button from './Button';
import { NavigationProp } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EntryExitTransition } from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");

interface PasswordProps {
  navigation: NavigationProp<any>;
}

const Password: React.FC<PasswordProps> = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["rgba(0, 166, 255,1)", "rgba(0, 191, 255,-.45)"]} style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { console.log("Back button pressed"); navigation.goBack(); }}>
            <Ionicons name="arrow-back" size={24} color="#fff" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Password</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{ color: "#D3D3D3", fontSize: 14, paddingLeft: 34, top: 14 }}>Create a password for your new account</Text>
          <Text style={styles.footerText}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#D3D3D3"
              keyboardType="default"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(!passwordVisible)}>
              <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>Confirm password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#D3D3D3"
              keyboardType="default"
              secureTextEntry={!confirmPasswordVisible}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Ionicons name={confirmPasswordVisible ? "eye-off" : "eye"} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Button
            style={{ bottom: 0, top: 50 }}
            title="Create new account"
            onPress={() => navigation.navigate('Completeprofile')}
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
    paddingTop: 24,
    paddingLeft: 1
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
    paddingTop: 65,
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
    marginVertical: -2,
    paddingLeft: 20,
    bottom: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  normalText: {
    bottom: 89,
    color: 'grey',
    paddingLeft: 18,
    paddingTop: 103,
  },
  emoji: {
    fontSize: 24,
    paddingLeft: 5,
    paddingRight:5
  },
  eyeIcon :{
    padding:10

  }
});

export default Password;




