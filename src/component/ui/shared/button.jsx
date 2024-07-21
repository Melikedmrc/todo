import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native'; 


const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`bg-Button w-44 h-11 rounded-lg  shadow-xl shadow-slate-800  items-center justify-center ${style}`}>
      <Text className={`text-slate-950 text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

export const SuggestionButton = ({ onPress }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Suggestion')} 
      className="bg-white w-12 h-12 rounded-full items-center justify-center "
    >
      <Text className="text-black text-xl">+</Text>
    </TouchableOpacity>
  );
};
