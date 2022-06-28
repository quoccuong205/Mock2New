import { createSelector } from '@reduxjs/toolkit';

// trỏ đến state của reducer order
export const selectAllOrder = (state) => state.order;

// trỏ đến item order của orderSlice
export const selectOrder = createSelector(
  [selectAllOrder],
  (orderSlice) => orderSlice?.order,
);

//---------------user--------------------------------

export const selectOrders = createSelector(
  [selectOrder],
  (order) => order?.data?.orders?.result,
);
