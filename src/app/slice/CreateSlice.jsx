import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const asyncSaveFetch = createAsyncThunk('saves',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get("http://localhost:4000/info");
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })

export const asyncAddFetch = createAsyncThunk('add',
    async (payload, thunkAPI) => {
        try {
            await axios.post("http://localhost:4000/info", payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const asyncDeleteFetch = createAsyncThunk('delete',
    async (payload, thunkAPI) => {
        try {
            await axios.delete(`http://localhost:4000/info/${payload.postID}`)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)



const initialState = []

export const storeSlice = createSlice({
    name: 'storeSlice',
    initialState,
    reducers: {
        // : 추가
        add: (state, action) => {
            state.push({
                author: action.payload.author,
                title: action.payload.title,
                content: action.payload.content,
                id: action.payload.id,
                date: new Date().getTime()
            })
        },
        // payload로 id 전달해야함 : 삭제
        del: (state, action) => {
            return current(state).filter((value) => value.id !== action.payload.id)
        },
        // id, title, content 전달 : 수정 
        rev: (state, action) => {
            return current(state).map((value) => {
                if (value.id === action.payload.id) {
                    return value = { ...value, title: action.payload.title, content: action.payload.content }
                } else {
                    return value
                }
            })
        }
    },
    extraReducers: {
        //이게 맞나?
        [asyncSaveFetch.fulfilled]: (state, { payload }) => state = payload,
        [asyncAddFetch.fulfilled]: (state, { payload }) => [...current(state), payload],
        [asyncDeleteFetch.fulfilled]: (state, { payload }) => {
            return current(state).filter((value) => value.postID !== payload.postID)
        }
    }

})

export const { add, rev, del } = storeSlice.actions
