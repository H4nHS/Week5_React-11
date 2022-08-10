import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const asyncSaveFetch = createAsyncThunk('saves',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_API);
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const asyncAddFetch = createAsyncThunk('add',
    async (payload, thunkAPI) => {
        try {
            await axios.post(process.env.REACT_APP_API, payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const asyncDeleteFetch = createAsyncThunk('delete',
    async (payload, thunkAPI) => {
        try {
            await axios.delete(process.env.REACT_APP_API+`${payload}`)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const asyncUpdateFetch = createAsyncThunk('update',
    async (payload, thunkAPI) => {
        try {
            await axios.put(process.env.REACT_APP_API+`${payload.id}`, payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = []

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    extraReducers: {
        [asyncSaveFetch.fulfilled]: (state, { payload }) => state = payload.sort((a, b) => b.postID - a.postID),
        [asyncAddFetch.fulfilled]: (state, { payload }) => [...current(state), payload],
        [asyncDeleteFetch.fulfilled]: (state, { payload }) => state.filter((post) => post.id !== payload),
        [asyncUpdateFetch.fulfilled]: (state, { payload }) => state.map((list) => list.id === payload.id ? {...list, payload} : [list])
    }
})

export default storeSlice;
