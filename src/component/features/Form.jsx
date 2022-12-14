import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styled from 'styled-components';
import { asyncAddFetch } from '../../app/slice/CreateSlice';
import useInput from '../../hooks/useInput';

const Form = ({ setRefresh }) => {
    const [author, setAuthor, onAuthorHandler] = useInput('');
    const [title, setTitle, onTitleHandler] = useInput('');
    const [content, setContent, onContentHandler] = useInput('');
    const dispatch = useDispatch()

    return (
        <>
            <FormContainer>
                <InputBlock placeholder='닉네임을 입력해주세요.' type="text" maxLength="20" value={author} onChange={onAuthorHandler} />
                <InputBlock placeholder='포스트 제목을 입력해주세요.' FontSize="1.3rem" maxLength="30" value={title} onChange={onTitleHandler} FontWeight='700' type="text" />
                <InputTextArea placeholder='무슨 일이 일어나고 있나요?' cols="30" rows="10" maxLength="140" value={content} onChange={onContentHandler} />
                <ButtonContainer>
                    <ContentCounter color={140 - content.length < 20 ? "red" : "white" }>{140 - content.length}</ContentCounter>
                    <SubmitButton onClick={(e) => {
                        e.preventDefault();
                        if (author.length < 1)
                            return alert('닉네임을 입력해주십시오.');
                        else if (title.length < 5)
                            return alert('제목은 5글자 이상이어야 합니다.');
                        else if (content.length < 10)
                            return alert('내용은 10글자 이상이어야 합니다.');
                        else {
                            dispatch(asyncAddFetch({ author, title, content, postID: new Date().getTime(), commentList: [] }))
                            setRefresh(true);
                            setAuthor('');
                            setTitle('');
                            setContent('');
                        }
                    }}>포스트하기</SubmitButton>
                </ButtonContainer>
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
    padding:0.7rem 1.2rem;
    margin: 0.7rem 1rem 0.7rem auto;

    cursor: pointer;
    transition: ease 0.2s;

    &:hover{
        background-color:#1d9bf0;
        color:#ffffff;
        transition: ease 0.2s;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ContentCounter = styled.span`
    font-size: 1.5rem;
    margin-left:1.5rem;
    
    color:${props => props.color}
`

export default Form;