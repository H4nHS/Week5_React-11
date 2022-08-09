import React, { useEffect } from "react";
import Form from '../component/features/Form';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styled from "styled-components";
import ContentBlock from "../component/features/ContentBlock";
import { asyncSaveFetch } from "../app/slice/CreateSlice";

function Home () {
  const contextList = useSelector(state => state.store);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asyncSaveFetch())
}, [contextList])

  
  return(
    <>
      <TextList>
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

  margin:auto;
`

export default Home;
