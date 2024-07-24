import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu tanımlandı.
const initialState = {
  todos: [], 
  selectedColor: 'bg-white', // Varsayılan renk
};

// Todo Slice oluşturuldu.
const todosSlice = createSlice({
  name: 'todos', // Slice'ın adı
  initialState,
  reducers: {
    // Todo eklemek için bir reducer oluşturuyoruz
    addTodo: (state, action) => {
      state.todos.push(action.payload); // Yeni todo'yu todos listesine ekliyoruz
    },
    // Todo'yu silmek için bir reducer oluşturuyoruz
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload); // Belirtilen id'ye sahip todo'yu listeden çıkarıyoruz
    },
    // Seçilen rengi güncellemek için bir reducer oluşturuyoruz
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload; // Seçilen rengi güncelliyoruz
    },
    setSelectedCycle: (state, action) => {
      state.selectedCycle = action.payload;
    },
    addSelectedTag: (state, action) => {
      if (!state.selectedTags.includes(action.payload)) {
        state.selectedTags.push(action.payload);
      }
    },
    removeSelectedTag: (state, action) => {
      state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
    },
  },
});

// Action'ları ve reducer'ı dışa aktarıyoruz
export const { addTodo, removeTodo, setSelectedColor,setSelectedCycle, addSelectedTag,removeSelectedTag} = todosSlice.actions;
export default todosSlice.reducer;
