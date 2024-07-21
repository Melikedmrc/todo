import { configureStore } from '@reduxjs/toolkit';  // Redux Toolkit'ten configureStore fonksiyonunu içe aktarıyoruz.
import todosReducer from './todosSlice';              // Todo slice'ını içe aktarıyoruz.

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;

