import { createSlice } from '@reduxjs/toolkit';
import { SORT_DESC } from '../../utils/constants';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    page: 0,
    tasksCount: 0,
    sort_field: 'id',
    sort_direction: SORT_DESC
  },
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload.tasks;
      state.tasksCount = action.payload.total_task_count;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSortingField: (state, action) => {
      state.sort_field = action.payload;
    },
    setSortingDirection: (state, action) => {
      state.sort_direction = action.payload;
    }
  }
});

export const { setTasks, setPage, setSortingDirection, setSortingField } = tasksSlice.actions;

export const selectPagesCount = state => state.tasks.tasksCount / 3;

export const selectTasks = state => state.tasks.items;

export const selectSortingField = state => state.tasks.sort_field;

export const selectSorting = state => {
  const { sort_field, sort_direction, page } = state.tasks;
  return { sort_field, sort_direction, page };
};

export default tasksSlice.reducer;