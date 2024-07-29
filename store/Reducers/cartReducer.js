const { createSlice, createSelector } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
    removeItems: (state, action) =>{
      return state.filter(item => item.name !== action.payload.name);
    },
    removeAllItems:(state)=>{
      return []
    }
  },
});



export const { addItems , removeItems , removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
