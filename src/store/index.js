import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './tasks/taskSlice';
import formSlice from './form/formSlice';
import authSlice from './auth/authSlice';

export default configureStore({
  reducer: {
    tasks: taskSlice,
    form: formSlice,
    auth: authSlice
  }
});