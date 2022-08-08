import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ContentBlock({ postData }) {
  const navigate = useNavigate();
  //page moving Home to Detail
  function intoDetailPage() {
    console.log(postData)
    navigate(`/detail/${postData.postID}`, {state: postData})
  }
  

  return (
    <>
      {postData === undefined ? <div> Now Loading... </div> :
        // if mode === 'Read' then
        <ContentContainer onClick={intoDetailPage}>
          <ContentHead>
            <HeadProfile>
              <HeadProfileName>{postData.author}</HeadProfileName>
              <HeadProfileID>@{postData.id}</HeadProfileID>
            </HeadProfile>
          </ContentHead>
          <ContentTitle>{postData.title}</ContentTitle>
          <ContentBody>{postData.content}</ContentBody>
        </ContentContainer>
      }
  </>
  )
}

const ContentContainer = styled.div`
  background-color: #15202b;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;

  color: #ffffff;

  border:1px solid gray;
  /* border-left:2px solid black; */
  padding: 0 2rem;
  margin:auto;

  width: 600px;
  height: 50vh;

  cursor: pointer;
  box-sizing: border-box;
`

const ContentHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  position: relative;

  border-bottom: 3px solid gray;
  padding-top:2rem;
  padding-bottom: 1rem;
`

const HeadProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const HeadProfileName = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
`

const HeadProfileID = styled.span`
  font-size: 0.8rem;
`

const ContentTitle = styled.h2`
  font-size: 2.2rem;
  text-align: left;
`

const ContentBody = styled.p`
  font-size: 1.3rem;
  text-align: left;
`

export default ContentBlock;