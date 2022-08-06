import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { rev, del } from '../../app/slice/CreateSlice';
import { useNavigate, useLocation } from "react-router-dom";

function Content({status, id}) {
  const [content, setContent] = useState();
  const [mode, setMode] = useState("read");
  const [text, setText] = useState({title:"", content:""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(state => state.store);
  const location = useLocation();

  
  if (id === undefined && location !== null) {
    id = location.state.id;
  }

  useEffect(() => {
    const contentData = state.filter(elem => elem.id === id)[0];
    setContent(contentData);
    setText({...text, title:contentData.title, content:contentData.content})
  },[mode])

  // const propid = 5
  // const contentData = async () => {
  //   const json = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json()
  //   setContent(state.filter(elem => elem.id === props.id)[0]);
  // }

  // Home and Detail size changing
  const size = status === "Home" ? '50vh' : '100vh'
  
  //page moving Home to Detail
  
  function intoDetailPage() {
    if (status === 'Home') {
      navigate(`/detail/${id}`, {state: {id:id}})
    }
  }

  // moving Main page
  function backspaceMain() {
    navigate('/');
  }


  // toogle box setting
  function toggleButtonActive (event) {
    const box = event.target.nextElementSibling;
    box.style.display === '' || box.style.display === 'none' ? box.style.display = 'flex' : box.style.display = 'none'
  }

  //read mode setting
  function deleteContent () {
    dispatch(del({id: content.id}))
    navigate('/');
  }
  
  function modifyContent () {
    setMode('modify')
  }

  // modify mode setting
  function modifyCancel () {
    setMode('Read')
  }

  function modifyForm(event) {
    const { name, value } = event.target;
    setText({...text, [name]:value})
  }

  function modifyVerified(event) {
    event.preventDefault();
    dispatch(rev({id: content.id, title: text.title, content: text.content}))
    setMode('Read')
  }

  // if mode === 'Modify' then
  return (content === undefined ? <div> Now Loading... </div> : mode === 'modify' ?
      <ModifyContainer onSubmit={modifyVerified}>
        <ContentHead>
          <HeadProfile>
            <HeadProfileName>{content.email}</HeadProfileName>
            <HeadProfileID>@{content.id}</HeadProfileID>
          </HeadProfile>
        </ContentHead>
        <ContentModifyTitle name="title" value={text.title} onChange={modifyForm} placeholder="수정할 제목을 입력해주세요."></ContentModifyTitle>
        <ContentModifyBody name="content" value={text.content} onChange={modifyForm} placeholder="수정할 내용을 입력해주세요."></ContentModifyBody>
        <ButtonMenu>
          <MenuBoxBtn type="submit">수정</MenuBoxBtn>
          <MenuBoxBtn onClick={modifyCancel}>취소</MenuBoxBtn>
        </ButtonMenu>
      </ModifyContainer>

    :

      // if mode === 'Read' then
      <ContentContainer size={size} cursor={status==="Home" ? 'pointer' : 'arrow'} onClick={intoDetailPage}>
          {status === "Home" ? <></> : <><BackSpaceBtn onClick={backspaceMain}>←　스레드</BackSpaceBtn></>}
        <ContentHead>
          <HeadProfile>
            <HeadProfileName>{content.email}</HeadProfileName>
            <HeadProfileID>@{content.id}</HeadProfileID>
          </HeadProfile>
          {status === "Home" ? <></> : <>
          <ContentMenu type="button" onClick={toggleButtonActive}>· · ·</ContentMenu>
          <MenuBox display="flex">
            <Triangle></Triangle>
            <MenuBoxBtn color='#15202b' radius="5px 5px 0 0" onClick={deleteContent}>내용 삭제하기</MenuBoxBtn>
            <MenuBoxBtn color='#15202b' radius="0 0 5px 5px" onClick={modifyContent}>내용 수정하기</MenuBoxBtn>
          </MenuBox>
          </>}
        </ContentHead>
        <ContentTitle>{content.title}</ContentTitle>
        <ContentBody>{content.content}</ContentBody>
      </ContentContainer>
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
  height: ${props => props.size};

  cursor: ${props => props.cursor};
  box-sizing: border-box;
`

const BackSpaceBtn = styled.button`
  background: none;

  color: #ffffff;
  font-weight: 700;
  font-size: 1.5rem;

  display: block;

  border:none;
  margin: 0;
  margin-top: 1rem;
  margin-right: auto;

  cursor:pointer;
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

const ContentMenu = styled.button`
  background: none;

  color: #ffffff;
  font-weight:900;
  
  border: none;
  
  cursor: pointer;
`

const ContentTitle = styled.h2`
  font-size: 2.2rem;
  text-align: left;
`

const ContentBody = styled.p`
  font-size: 1.3rem;
  text-align: left;
`

const MenuBox = styled.div`
  background-color: #ffffff;

  display: none;
  flex-direction: column;
  position: absolute;

  border: none;
  border-radius: 5px;
  top:70px;
  right:0;

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 5px 5px;
  }
`

const MenuBoxBtn = styled.button`
  background: none;

  color: ${props => props.color || '#ffffff'};
  font-weight: 700;

  border:none;
  padding:0.5rem 1rem;

  cursor: pointer;
  transition: 0.1s ease;

  &:hover{
    background-color: gray;
    border-radius: ${props => props.radius || "5px"};
    color:white;
  }
`

const Triangle = styled.div`
  position: absolute;
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 10px solid #ffffff;;
  margin: 0;

  transform: translateX(93px) translateY(-10px);
`

const ContentModifyTitle = styled.input`
  background-color: #15202b;

  font-size: 1.9rem;
  text-align: left;
  color: #ffffff;

  border:none;
  outline:none;
  border-bottom: 1px solid gray;
  border-radius: 0;

  margin: 0.5rem 0;
  padding: 0.5rem;
`

const ContentModifyBody = styled.textarea`
  background-color: #15202b;

  font-size: 1rem;
  text-align: left;
  color: #ffffff;

  border:none;
  border-bottom: 1px solid gray;
  border-radius: 0;
  outline:none;
  margin: 0.5rem 0;
  padding: 0.5rem;

  height: 200px;
  resize: vertical;
`

const ModifyContainer = styled.form`
  background-color: #15202b;

  display:flex;
  flex-direction: column;
  justify-content: flex-start;

    color: #ffffff;

  border-right:2px solid black;
  border-left:2px solid black;
  padding: 0 2rem;
  padding-top: 4rem;
  margin:auto;

  width: 600px;
  height:100vh;

  box-sizing: border-box;
`

const ButtonMenu = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  gap:1rem;
  margin: 0.5rem 0;
`

export default Content;