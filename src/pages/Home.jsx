import React, { useEffect } from "react";
import Form from '../component/features/Form';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styled from "styled-components";
import ContentBlock from "../component/features/ContentBlock";
import { asyncSaveFetch } from "../app/slice/CreateSlice";

function Home () {
  const contextList = useSelector(state => state.store);
  const dispatch = useDispatch();

  const clickToTopPage = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  useEffect(() => {
    dispatch(asyncSaveFetch())
}, [contextList])

  
  return(
    <>
      <TextList>
      <UptoPage onClick={clickToTopPage}>최신 포스트　▲</UptoPage>
      <Form />
      {contextList.map(elem => {
        return <ContentBlock key={elem.postID} postData={elem} />
      })}
      </TextList>
    </>
  )
}

const TextList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top:50px;

  margin:auto;
`

const UptoPage = styled.button`
  background-color: #15202b;

  display: flex;
  color: #ffffff;
  font-family:  "AritaDotum", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  position: fixed;

  border: none;
  outline: none;
  padding: 1rem 1rem;
  
  width: 600px;
  height: 50px;
  top:0;
  z-index: 999;
  cursor: pointer;
`

export default Home;
