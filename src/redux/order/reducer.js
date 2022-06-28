import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: [],
  },
  reducers: {
    getAllOrderSuccess: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { getAllOrderSuccess } = orderSlice.actions;
export default orderSlice.reducer;
