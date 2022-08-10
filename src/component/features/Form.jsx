import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styled from 'styled-components';
import { asyncSaveFetch, asyncAddFetch } from '../../app/slice/CreateSlice';

const Form = () => {
    const title = useRef();
    const content = useRef();
    const author = useRef();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncSaveFetch())
    }, [dispatch])

    return (
        <>
            <FormContainer>
                <InputBlock placeholder='닉네임을 입력해주세요.' type="text" ref={author} />
                <InputBlock placeholder='포스트 제목을 입력해주세요.' FontSize="1.3rem" FontWeight='700' type="text" ref={title} />
                <InputTextArea placeholder='무슨 일이 일어나고 있나요?' cols="30" rows="10" ref={content} />
                <SubmitButton onClick={(e) => {
                    e.preventDefault();
                    const current_author = author.current.value;
                    const current_title = title.current.value;
                    const current_content = content.current.value;
                    
                    if (current_author.length < 1)
                        return alert('닉네임을 입력해주십시오.');
                    else if (current_title.length < 5)
                        return alert('제목은 5글자 이상이어야 합니다.');
                    else if (current_content.length < 10)
                        return alert('내용은 10글자 이상이어야 합니다.');
                    else {
                        dispatch(asyncAddFetch({author: current_author, title: current_title, content: current_content, postID: new Date().getTime()}))
                        author.current.value = '';
                        title.current.value = '';
                        content.current.value = '';
                    }
                }}>포스트하기</SubmitButton>
            </FormContainer>
        </>
    );
};

const FormContainer = styled.form`
    background-color: #15202b;
    display:flex;
    flex-direction: column;
    color: #ffffff;

    border:1px solid gray;
  /* border-left:2px solid black; */
    padding:0;
    margin:auto;

    width: 600px;

    box-sizing: border-box;

`

const InputBlock = styled.input`
    background: none;
    background-color: #15202b;

    color:#ffffff;
    font-size:${props => props.FontSize || '1rem'};
    font-family: "AritaDotum", sans-serif;
    font-weight:${props => props.FontWeight || '300'};

    border:none;
    outline: none;
    padding: 0.5rem 1rem;

    &::placeholder{
        color:#b2b2b2;
    }
`

const InputTextArea = styled.textarea`
    background: none;
    background-color: #15202b;

    color:#ffffff;
    font-size:1.2rem;
    font-family: "AritaDotum", sans-serif;

    border:none;
    border-bottom: 1px solid #b2b2b2;
    outline: none;
    padding: 0.5rem 0;
    margin: 0 1rem;

    height:7rem;
    resize: vertical;
`

const SubmitButton = styled.button`
    background-color:#195d8d;

    display:block;

    font-size:1.2rem;
    font-family: "AritaDotum", sans-serif;
    font-weight: 700;
    color:#898f95;

    border: none;
    border-radius: 1.5rem;
    outline: none;
    padding:0.9rem 1.2rem;
    margin: 0.5rem 1rem 0.5rem auto;

    cursor: pointer;
    transition: ease 0.2s;

    &:hover{
        background-color:#1d9bf0;
        color:#ffffff;
        transition: ease 0.2s;
    }
`

export default Form;