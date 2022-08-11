import React, { useEffect, useState } from "react";
import Form from '../component/features/Form';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styled from "styled-components";
import ContentBlock from "../component/features/ContentBlock";
import { asyncSaveFetch } from "../app/slice/CreateSlice";
import MainLayout from "../Layout/MainLayout";

function Home() {
  const [refresh, setRefresh] = useState(false);

  const contextList = useSelector(state => state.store);
  const dispatch = useDispatch();

  const clickToTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    dispatch(asyncSaveFetch())
    setRefresh(false)
  }, [dispatch, refresh])


  return (
    <MainLayout>
      <TextList>
        <UptoPage onClick={clickToTopPage}>최신 포스트　▲</UptoPage>
        <Form setRefresh={setRefresh} />
        {contextList.length === 0 ? <LoadingBox>포스트를 가져오고 있습니다...</LoadingBox> : contextList.map(elem => {
          return <ContentBlock key={elem.postID} postData={elem} />
        })}
      </TextList>
    </MainLayout>
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

  border:1px solid gray;
  outline: none;
  padding: 1rem 1rem;
  
  width: 598px;
  height: 50px;
  top:0;
  z-index: 999;
  cursor: pointer;
`

const LoadingBox = styled.h2`
  color: white;
  margin:10rem auto;
`

export default Home;
