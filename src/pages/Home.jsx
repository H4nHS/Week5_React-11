import React from "react";
import Form from '../component/features/Form';
import { useSelector } from 'react-redux/es/exports';
import styled from "styled-components";
import Content from "../component/features/Content";

function Home () {
  const contextList = useSelector(state => state.store);
  console.log(contextList);
  return(
    <>
      <TextList>
      <Form />
      {contextList.map(elem => {
        return <Content key={elem.id} status="Home" id={elem.id} />
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