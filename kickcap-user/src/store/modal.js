import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMain: false,
  isPhone: false,
  isMap: false,
  isInfo: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    ChangeIsMain: (state, action) => {
      state.isMain = action.payload;
    },
    ChangeIsPhone: (state, action) => {
      state.isPhone = action.payload;
    },
    ChangeIsMap: (state, action) => {
      state.isMap = action.payload;
    },
    ChangeIsInfo: (state, action) => {
      state.isInfo = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export const selectIsMain = (state) => state.modal.isMain;
export const selectIsPhone = (state) => state.modal.isPhone;
export const selectIsMap = (state) => state.modal.isMap;
export const selectIsInfo = (state) => state.modal.isInfo;
export default modalSlice.reducer;
