import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import COLORS from '@/constants/Colors';
import { NavigationProp } from '@react-navigation/native';
import Button from '../Button';

interface WelcomeProps {
  navigation: NavigationProp<any>;
}

console.log('check username');
console.log('check email');

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/welcome.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.normalText}>Manage your space, connect with neighbors,</Text>
        <Text style={styles.normalText}>and stay informed, in one convenient app.</Text>
        <Button
          title="Log in as resident"
          onPress={() => navigation.navigate('Login')}
        />
        <View>
       <Button style={{bottom:0,top:9}}
          title="Log in as owner"
          onPress={() => navigation.navigate('OwnerSignup')}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    width: 250, // Specify the width of the image
    height: 320, // Specify the height of the image
    // resizeMode: 'cover',
  },
  textContainer: {
    paddingHorizontal: 16,
    position: 'absolute',
    top: 400,
    width: '100%',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: '500', // fontWeight should be a string
    color: 'deepskyblue',
    paddingLeft: 75,
    marginBottom: 100,
    marginTop: 0,
    textShadowColor: 'rgba(0, 240, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  normalText: {
    bottom:89,
  color:'grey',
  paddingLeft:30,
  paddingTop:1,
  },
});

export default Welcome;
