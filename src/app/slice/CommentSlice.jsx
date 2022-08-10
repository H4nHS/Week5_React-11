import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const commentSaveFetch = createAsyncThunk('saves',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_COMMENT_API);
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const commentAddFetch = createAsyncThunk('add',
    async (payload, thunkAPI) => {
        try {
            await axios.post(process.env.REACT_APP_COMMENT_API, payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const commentEraseFetch = createAsyncThunk('erase',
    async (payload, thunkAPI) => {
        try {
            await axios.post(process.env.REACT_APP_COMMENT_API, payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const commentDeleteFetch = createAsyncThunk('delete',
    async (payload, thunkAPI) => {
        try {
            await axios.delete(process.env.REACT_APP_COMMENT_API+`${payload}`)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const commentUpdateFetch = createAsyncThunk('update',
    async (payload, thunkAPI) => {
        try {
            await axios.put(process.env.REACT_APP_COMMENT_API+`${payload.id}`, payload)
            return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = []

const commentSlice = createSlice({
    name: 'CommentSlice',
    initialState,
    extraReducers: {
        [commentSaveFetch.fulfilled]: (state, { payload }) => state = payload.sort((a, b) => b.postID - a.postID),
        [commentAddFetch.fulfilled]: (state, { payload }) => [...current(state), payload],
        [commentEraseFetch.fulfilled]: (state, { payload }) => state.filter((post) => post.commentID !== payload),
        [commentDeleteFetch.fulfilled]: (state, { payload }) => state.filter((post) => post.id !== payload),
        [commentUpdateFetch.fulfilled]: (state, { payload }) => state.map((list) => list.id === payload.id ? {...list, payload} : [list])
    }
})

export default commentSlice;