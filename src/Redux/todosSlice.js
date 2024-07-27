import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu tanımlandı.
const initialState = {
  todos: [], 
  selectedColor: 'bg-white',
  selectedRoutine: 'All', 
  selectedCycle: 'Daily', 
  selectedDays: [],
  
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
    // Seçilen rutini güncellemek için bir reducer ekliyoruz
    setSelectedRoutine: (state, action) => {
      state.selectedRoutine = action.payload; // Seçilen rutini güncelliyoruz
    },
    setSelectedDays(state, action) {
      state.selectedDays = Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

// Action'ları ve reducer'ı dışa aktarıyoruz
export const { addTodo, removeTodo, setSelectedColor, setSelectedCycle, setSelectedRoutine, setSelectedDays } = todosSlice.actions;
export default todosSlice.reducer;
