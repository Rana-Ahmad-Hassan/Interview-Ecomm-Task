import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("getData", async () => {
    try {
        const response = await axios.get("https://dummyjson.com/products");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const registerUser = createAsyncThunk("postUser", async (data) => {
    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                expiresInMins: data.expiresInMins,
            }),
        });

        const responseData = await response.json();


        localStorage.setItem("user", JSON.stringify(responseData));
        localStorage.setItem("token", responseData);

        return responseData.user;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const initialState = {
    data: [],
    loading: false,
    error: null,
    detail: [],
    cart: [],
    user: JSON.parse(localStorage.getItem("user")) || {},
};

export const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        productDetail: (state, action) => {
            state.detail = action.payload;
        },
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.cart.findIndex(product => product.id === productToAdd.id);

            if (existingProductIndex === -1) {
                state.cart.push(productToAdd);
            } else {
                state.cart[existingProductIndex].quantity++;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.filter((item) => item.id !== id);
        },
        clearUserData: (state) => {
            state.user = {};
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { productDetail, addToCart, removeFromCart, clearUserData } = appSlice.actions;
export default appSlice.reducer;
