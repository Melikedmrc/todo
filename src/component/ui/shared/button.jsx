import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';


const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`bg-Button w-44 h-11 rounded-lg  shadow-xl shadow-slate-800  items-center justify-center ${style}`}>
      <Text className={`text-slate-950 text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
