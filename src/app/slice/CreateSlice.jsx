import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
    {
        title: '초기값 입니다',
        content: '초기값 입니다',
        id: 0
    }
]

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
                date: new Date()
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
    }
})

export const { add, rev, del } = storeSlice.actions 
