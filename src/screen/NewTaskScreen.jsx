import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/todosSlice";
import {CardColor, Repeat ,BottomTabs} from "../component/ui/shared/sharedImport";
import Button,{AddButton} from '../component/ui/shared/button';
import { useNavigation } from '@react-navigation/native';

const NewTaskScreen = () => {
    const [todo, setTodo] = useState(''); // Todo metnini tutmak için bir state oluşturuyoruz.
    const [descripe, setDescripe] = useState('');
    const dispatch = useDispatch(); // Redux dispatch fonksiyonunu kullanmak için hook.
    const navigation = useNavigation();
    const selectedColor = useSelector((state) => state.todos.selectedColor);
    // console.log("Selected Color in NewTaskScreen:", selectedColor);

    const handleAddTodo = () => {
        if (todo.trim().length > 0) {
            dispatch(addTodo({
                id: Date.now().toString(),
                text: todo,
                descripe: descripe,
                color: selectedColor || '#FFFFFF', // Seçilen rengi todo'ya ekliyoruz.
            }));
            navigation.navigate('Todo');
            setTodo('');
            setDescripe('');
        }
    }

    return (
        <View className="flex-1 items-center justify-center bg-blue-400">
            <View className="absolute top-12 right-5  ">
                    <AddButton title="Add" onPress={handleAddTodo} />
                </View>
            <View className="flex-1 mt-10 items-center">
                <Text className="text-6xl py-2">🌟</Text>
                <Text className="text-2xl font-medium">New Task</Text>
                <TouchableOpacity>
                    <Text className="text-xs font-light">Click to change the emoji</Text>
                </TouchableOpacity>
                
                
            <View className="absolute w-full items-center mt-32">
                <View className="bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center border-b border-gray-400">
                    <TextInput
                        placeholder="Name your new tasks"
                        value={todo}
                        onChangeText={setTodo} // Todo metnini güncellemek için.
                        className="w-full pb-0.5 text-base border-b-2 border-slate-400 text-gray-70 "
                        placeholderTextColor="#9ca3af" // Placeholder rengi
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
    )
}

export default NewTaskScreen;
