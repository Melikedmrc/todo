import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/todosSlice";
import Button from "../component/ui/shared/button";
import { useNavigation } from '@react-navigation/native';
// import EmojiSelector, {Categories}  from 'react-native-emoji-selector'; // Emoji seçici kütüphanesi


const NewTaskScreen = () => {
    const [todo, setTodo] = useState('');                    // Todo metnini tutmak için bir state oluşturuyoruz.
    const [descripe, setDescripe] = useState('');
    const dispatch = useDispatch();                        // Redux dispatch fonksiyonunu kullanmak için hook.
    const todos = useSelector((state) => state.todos.todos); // Redux store'dan todos listesini seçiyoruz.
    const navigation = useNavigation();

    const handleAddTodo = () => {
        if (todo.trim().length > 0) {
            dispatch(addTodo({
                id: Date.now().toString(),
                text: todo,
                descripe: descripe
            }));
            navigation.navigate('Todo')
            setTodo('');
            setDescripe('');

        }
    }


    return (
        <View className="flex-1 items-center justify-center  bg-blue-400">
            <View className="flex-1 mt-16 items-center ">
                <Text className="text-6xl items-center justify-center py-2 ">🌟</Text>
                <Text className="text-2xl font-medium">New Task</Text>
            <TouchableOpacity>
                <Text className="text-xs font-light">Click to change the emoji</Text>
            </TouchableOpacity>
            </View>
            

            <View className="absolute w-full items-center" >
            <View className="flex bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center border-b border-gray-400">
                <TextInput
                    placeholder="Name your new tasks"
                    value={todo}
                    onChangeText={setTodo} // Todo metnini güncellemek için.
                    className="w-full pb-0.5 text-base border-b-2 border-slate-400 text-gray-700" // Alt padding'i azaltır ve yazı rengini ayarlar
                    placeholderTextColor="#9ca3af" // Placeholder rengi
                />
            </View>
            <View className="flex bg-white my-2 w-11/12 h-14 px-5 rounded-xl items-start justify-center">
                <TextInput
                    placeholder="Describe it"
                    value={descripe}
                    onChangeText={setDescripe} // Todo metnini güncellemek için.
                    className="w-full pb-0.5 text-base border-b-2 border-slate-400 text-gray-700"
                    placeholderTextColor="#9ca3af" // Placeholder rengi
                />
            </View>
            </View>
           


            <Button
                title={"Add"}
                onPress={handleAddTodo}
            />

        </View>
    )
}

export default NewTaskScreen