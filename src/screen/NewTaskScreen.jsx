import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/todosSlice";
import { CardColor, Repeat, BottomTabs } from "../component/ui/shared/sharedImport";
import { AddButton } from '../component/ui/shared/button';
import { useNavigation } from '@react-navigation/native';


const NewTaskScreen = () => {
    const [todo, setTodo] = useState('');
    const [descripe, setDescripe] = useState('');
    const [emoji, setEmoji] = useState('🌟');
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const selectedColor = useSelector((state) => state.todos.selectedColor);
    const selectedRoutine = useSelector((state) => state.todos.selectedRoutine);
    const selectedDays = useSelector((state) => state.todos.selectedDays);
    
    const handleAddTodo = () => {
        if (todo.trim().length > 0) {
            const today = new Date();
            const date = today.toISOString().split('T')[0]; // YYYY-MM-DD formatında tarih
    
            const newTodo = {
                id: Date.now(),
                text: todo,
                descripe: descripe,
                color: selectedColor || '#FFFFFF',
                emoji: emoji,
                repeat: selectedRoutine,
                days: selectedDays, // Seçilen günleri ekliyoruz
                date: date
            };
    
            console.log('Yeni Görev:', newTodo);
    
            dispatch(addTodo(newTodo));
            navigation.navigate('Todo');
            setTodo('');
            setDescripe('');
        }
    };
    

    return (
        <View className="flex-1 items-center justify-center bg-Blue">
            <View className="absolute top-12 right-5">
                <AddButton onPress={handleAddTodo} />
            </View>
            <View className="flex-1 mt-11  items-center">
                <Text className="text-6xl py-2">{emoji}</Text>
                <Text className="text-3xl font-medium">New Task</Text>
                <TouchableOpacity onPress={() => setEmojiPickerVisible(true)}>
                    <Text className="text-xs text-Placeholder font-light">Click to change the emoji</Text>
                </TouchableOpacity>

                <Modal
                    visible={isEmojiPickerVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
                        <View className="bg-white p-4 rounded-lg w-11/12 h-3/4">
                            <EmojiSelector
                                category={Categories.all}
                                onEmojiSelected={(emoji) => {
                                    setEmoji(emoji);
                                    setEmojiPickerVisible(false);
                                }}
                                theme="light"
                                showTabs={true}
                                showSearchBar={true}
                                showHistory={true}
                                columns={8} // Emoji'lerin daha büyük görünmesi için sütun sayısını azaltın
                            />
                            <TouchableOpacity onPress={() => setEmojiPickerVisible(false)}>
                                <Text className="text-blue-500 text-center mt-4">Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View className="absolute w-full items-center mt-36">
                    <View className="bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center  ">
                        <TextInput
                            placeholder="Name your new tasks"
                            value={todo}
                            onChangeText={setTodo}
                            className="w-full text-Placeholder border-b-0.5 border-custom-border"
                            placeholderTextColor="#1e1c1c"
                        />
                    </View>
                    <View className="bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center">
                        <TextInput
                            placeholder="Describe it"
                            value={descripe}
                            onChangeText={setDescripe}
                            className="w-full text-Placeholder border-b-0.5 border-custom-border"
                            placeholderTextColor="#1e1c1c"
                        />
                    </View>
                    <View className="flex-1 mt-5">
                        <CardColor />
                    </View>
                    <View className="flex-1 mt-5">
                        <Text className="mb-2 text-base font-bold px-3">Repeat</Text>
                        <Repeat />
                    </View>
                </View>

                <View className="absolute bottom-0 w-full">
                    <BottomTabs isLogin={false} />
                </View>
            </View>
        </View>
    );
}

export default NewTaskScreen;