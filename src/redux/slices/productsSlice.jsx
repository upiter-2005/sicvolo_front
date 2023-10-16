import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const  initialState = {
  items: [],
  isLoaded: false,
  currentCat: 1  
  //items: JSON .parse(localStorage.getItem('cart')),
};


export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/getProducts`);
      console.log(data)
      return data;
    } catch (e) {
      console.log(e.message);
    }
  });

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    showCard: (state, action) => {
        state.showCardPopup = action.payload;
    },
    setCurrentCat: (state, action) => {
        state.currentCat = action.payload;
    }
 

    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price * obj.count + sum;
    //   }, 0);
    // },

    // plusItem: (state, action: PayloadAction<string>) => {
    //   const findItem = state.items.find((obj) => obj.id === action.payload);
    //   if (findItem) {
    //     findItem.count++;
    //   }
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price * obj.count + sum;
    //   }, 0);
    // },

    // minusItem: (state, action: PayloadAction<string>) => {
    //   const findItem = state.items.find((obj) => obj.id === action.payload);
    //   if (findItem) {
    //     findItem.count--;
    //   }
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price * obj.count + sum;
    //   }, 0);
    // },
    // removeItem: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter((obj) => obj.id !== action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price * obj.count + sum;
    //   }, 0);
    // },
    // clearItems: (state) => {
    //   state.items = [];
    //   state.totalPrice = 0;
    // },
  },
  extraReducers: {
    //getTree
    [getProducts.pending]: (state) => {
      state.items = [];
      state.isLoaded = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoaded = true;
    },
    [getProducts.rejected]: (state, action) => {},

  },
});



//export const selectTotalPrice = (state) => state.card.totalPrice;
// Action creators are generated for each case reducer function
export const { showCard, setCurrentCat } = productsSlice.actions;

export default productsSlice.reducer;
