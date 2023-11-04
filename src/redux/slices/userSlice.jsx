import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const  initialState = {
  isAuth: false,
  user: null,
  wasRegistered: false,
  isSwipe: false,
  addresses: {},
  mobMnu: false,
  searchMob: false
  //items: JSON .parse(localStorage.getItem('cart')),
};

export const registerUser = createAsyncThunk("products/registerUser", async (params) => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/customers/registerCustomer`, params);
      console.log(data)
      return data.response;
    } catch (e) {
      console.log(e.message);
    }
  });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        state.isAuth = action.payload;
    },
    setUser: (state, action) => {
        state.user = action.payload;
    },
    setAditionalDataUser: (state,action) => {
      console.log(action.payload);
      state.user = {...state.user, ...action.payload};
    },
    logout: (state, action)=>{
      state.isAuth = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userPhone");
      localStorage.removeItem("userLastName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userId");
      localStorage.removeItem("rememberMe");
      
    },
    setSwipe: (state, action)=>{
      state.isSwipe = action.payload;

    },
    setmobMnu: (state, action)=>{
      state.mobMnu = action.payload;

    },
    setSearchMob: (state, action)=>{
      state.searchMob = action.payload;

    },
    setAddresses: (state, action)=>{
      state.addresses = action.payload;
    },
    
   
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.user = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.wasRegistered = true;
    },
    [registerUser.rejected]: (state, action) => {},

  },
});



//export const selectTotalPrice = (state) => state.card.totalPrice;
// Action creators are generated for each case reducer function
export const { setAuth, setUser, logout, setAditionalDataUser, setSwipe, setAddresses, setmobMnu, setSearchMob } = userSlice.actions;

export default userSlice.reducer;
