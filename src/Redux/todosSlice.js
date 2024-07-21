import { createSlice } from '@reduxjs/toolkit';  // Redux Toolkit'ten createSlice fonksiyonunu içe aktarıyoruz.

//Başlangıç durumu tanımlandı.
const initialState={
  todos:[], 
}

//Todo Slice oluşturuldu.
const todosSlice =createSlice({
  name:'todos', //Slice'ın adı.
  initialState,
  reducers:{
    //Todo eklemek için bir reducer oluşturuyoruz.
    addTodo: (state, action)=>{
      state.todos.push(action.payload); //Yeni todo'yu todos listesine ekliyoruz.
    },
    removeTodo: (state, action)=>{
      state.todos= state.todos.filter(todo=> todo.id!==action.payload); // Belirtilen id'ye sahip todo'yu listeden çıkarıyoruz.
    },
  },
});

// Action'ları ve reducer'ı dışa aktarıyoruz.
export const {addTodo, removeTodo}=todosSlice.actions;
export default todosSlice.reducer;
