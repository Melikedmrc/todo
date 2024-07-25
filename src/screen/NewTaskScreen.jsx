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

    const handleAddTodo = () => {
        if (todo.trim().length > 0) {
            dispatch(addTodo({
                id: Date.now().toString(),
                text: todo,
                descripe: descripe,
                color: selectedColor || '#FFFFFF',
                emoji: emoji,
                repeat: selectedRoutine,
            }));
            navigation.navigate('Todo');
            setTodo('');
            setDescripe('');
        }
    };

    

    return (
        <View className="flex-1 items-center justify-center bg-blue-400">
            <View className="absolute top-12 right-5">
                <AddButton onPress={handleAddTodo} />
            </View>
            <View className="flex-1 mt-10 items-center">
                <Text className="text-6xl py-2">{emoji}</Text>
                <Text className="text-2xl font-medium">New Task</Text>
                <TouchableOpacity onPress={() => setEmojiPickerVisible(true)}>
                    <Text className="text-xs font-light">Click to change the emoji</Text>
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

                <View className="absolute w-full items-center mt-32">
                    <View className="bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center border-b border-gray-400">
                        <TextInput
                            placeholder="Name your new tasks"
                            value={todo}
                            onChangeText={setTodo}
                            className="w-full pb-0.5 text-base border-b-2 border-slate-400 text-gray-70"
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                    <View className="bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center">
                        <TextInput
                            placeholder="Describe it"
                            value={descripe}
                            onChangeText={setDescripe}
                            className="w-full pb-0.5 text-base border-b-2 border-slate-400 text-gray-700"
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                    <View className="flex-1 mt-5">
                        <CardColor />
                    </View>
                    <View className="flex-1 mt-5">
                        <Text className="mb-2 ml-4">Repeat</Text>
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