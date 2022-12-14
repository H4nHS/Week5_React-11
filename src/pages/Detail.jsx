import React from "react";
import styled from "styled-components";
import Comment from "../component/features/Comment";
import Content from "../component/features/Content";
import MainLayout from "../Layout/MainLayout";

function Detail () {

  return(
    <MainLayout>
      <DetailContainer>
        <Content />
        <Comment />
      </DetailContainer>
    </MainLayout>
  )
}

const DetailContainer = styled.div`
  background-color: #15202b;
  display:flex;
  flex-direction: column;

  color: #ffffff;

  border:1px solid gray;
  margin:auto;

  width: 600px;
  height: 100vh;

  box-sizing: border-box;
`
export default Detail;