import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/welcome.png')} style={styles.image} />
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>
        Manage your space, connect with neighbors, and stay informed, in one convenient app
      </Text>
      <Link href="/login" style={styles.buttonResident}>
        <Text style={styles.buttonText}>Sign up as an owner</Text>
      </Link>
      <TouchableOpacity style={styles.buttonOwner}>
        <Text style={styles.buttonTextOwner}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  image: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.9 * (388 / 415), // Adjust based on image aspect ratio
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#007bff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonResident: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    top:30
    
  },
  buttonOwner: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    top:40
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    
  },
  buttonTextOwner: {
    color: '#007bff',
    fontSize: 16,
    paddingLeft:10
  },
});

export default WelcomeScreen;




// import { View, Text, StyleSheet, Image } from 'react-native';
// import React from 'react';
// import COLORS from '@/constants/Colors';
// import { NavigationProp } from '@react-navigation/native';
// import Button from '../Button';

// interface WelcomeProps {
//   navigation: NavigationProp<any>;
// }

// const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image
//           source={require('@/assets/images/welcome.png')}
//           style={styles.image}
//         />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.welcomeText}>Welcome!</Text>
//         <Text style={styles.normalText}>Manage your space, connect with neighbors,</Text>
//         <Text style={styles.normalText}>and stay informed, in one convenient app.</Text>
//         <Button
//           title="Log in as resident"
//           onPress={() => navigation.navigate('Login')}
//         />
//         <View>
//        <Button style={{bottom:0,top:9}}
//           title="Log in as owner"
//           onPress={() => navigation.navigate('OwnerSignup')}
//         />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   imageContainer: {
//     marginTop: 50,
//     marginBottom: 50,
//   },
//   image: {
//     width: 250, // Specify the width of the image
//     height: 320, // Specify the height of the image
//     // resizeMode: 'cover',
//   },
//   textContainer: {
//     paddingHorizontal: 16,
//     position: 'absolute',
//     top: 400,
//     width: '100%',
//   },
//   welcomeText: {
//     fontSize: 35,
//     fontWeight: '500', // fontWeight should be a string
//     color: 'deepskyblue',
//     paddingLeft: 75,
//     marginBottom: 100,
//     marginTop: 0,
//     textShadowColor: 'rgba(0, 240, 0, 0.75)',
//     textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 10,
//   },
//   normalText: {
//     bottom:89,
//   color:'grey',
//   paddingLeft:30,
//   paddingTop:1,
//   },
// });

// export default Welcome;


