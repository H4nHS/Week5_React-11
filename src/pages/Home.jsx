import React from "react";
import Form from '../component/features/Form';
import { useSelector } from 'react-redux/es/exports';
import styled from "styled-components";
import ContentBlock from "../component/features/ContentBlock";

function Home () {
  const contextList = useSelector(state => state.store);
  console.log(contextList)
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
