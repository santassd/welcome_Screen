import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import COLORS from '@/constants/Colors';

interface ButtonProps {
    title: string;
    onPress: () => void;
    filled?: boolean;
    color?: string;
    style?: StyleProp<ViewStyle>;
  }
  
  const Button: React.FC<ButtonProps> = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = 'deepskyblue';
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ?' White' : COLORS.primary;
  
    return (
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: bgColor },
          props.style,
        ]}
        onPress={props.onPress}
      >
        <Text style={{ fontSize: 18, color: textColor }}>{props.title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      paddingBottom: 16,
      paddingVertical: 10,
      borderWidth: 2,
      borderColor:'lightskyblue',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Button;