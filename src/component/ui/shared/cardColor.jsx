import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedColor } from "../../../Redux/todosSlice";

const colors = [
  '#FFB3BA', // Pembe
  '#FFDFBA', // Turuncu
  '#FFFFBA', // Sarı
  '#BAFFC9', // Açık Yeşil
  '#BAE1FF', // Açık Mavi
  '#D4A5A5', // Soft Kırmızı
  '#A5D4D4', // Soft Turkuaz
  '#D4A5D4'  // Soft Mor
];

const ColorItem = ({ color, isSelected, onPress }) => (
  <TouchableOpacity onPress={() => onPress(color)}>
    <View
      className={`h-8 w-8 m-2 p-1 rounded-full border-2 ${isSelected ? 'border-gray-500' : 'border-white'}`}
      style={{ backgroundColor: color }}
    />
  </TouchableOpacity>
);

const CardColor = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.todos.selectedColor); // Seçili rengi Redux store'dan alıyoruz
  const [localSelectedColor, setLocalSelectedColor] = useState(selectedColor);

  const handleColorPress = (color) => {
    setLocalSelectedColor(color); // Yerel seçili rengi güncelliyoruz
    dispatch(setSelectedColor(color)); // Renk seçimini Redux state'ine kaydediyoruz
  };

  return (
    <View>
      <Text className="text-base font-bold px-5">Card Color</Text>
      <View className="flex-1 justify-center items-center">
        <FlatList
          data={colors}
          renderItem={({ item }) => (
            <ColorItem
              color={item}
              isSelected={item === localSelectedColor}
              onPress={handleColorPress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          className="w-full"
        />
      </View>
    </View>
  );
};

export default CardColor;
