import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RightBox () {
  const postList = useSelector(state => state.store);
  const navigate = useNavigate();

  function moveToPost( event ) {
    navigate(`/detail/${event.target.id}`)  
  }

  return (
    <RightSection>
      <SearchBox type="text" placeholder="유니버스 탐색~"/>
      <Trandbox>
        <HeaderText>최근 뜨는 포스트</HeaderText>
        <InfoText>다른 사람들의 요즘 관심사를 구경해보세요.</InfoText>
        {postList.length === 0 ?
          <AlertPost>현재 포스트가 없습니다.</AlertPost>:
            postList.slice(0,4).map(elem=>{
              console.log(elem)
              return <PostBox key={elem.id} id={elem.postID} onClick={moveToPost}>
                <PostHeader id={elem.postID} onClick={moveToPost}>{elem.title.length > 24 ? elem.title.substring(0,23) + "..." : elem.title}</PostHeader>
                <InfoText id={elem.postID} onClick={moveToPost}>{elem.author.length > 24 ? elem.author.substring(0,17) + "..." : elem.author}</InfoText>
              </PostBox>}
            )
          }
        <FooterText></FooterText>
      </Trandbox>
      <IntroText>Made by 항해99 8기 5주차 11조 <br />박종현, 신도윤, 한효승</IntroText>
    </RightSection>
  )
}

const RightSection = styled.div`
  background: #15202b;

  color: #ffffff;
  font-family: "NixgonFonts", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  
  border-left: 1px solid gray;
  margin-left: auto;
  
  width: 330px;
  height: 100vh;

  right:0;
  transform: translateX(-41.5%);
`

const SearchBox = styled.input`
  background: #273340;

  font-family: "NixgonFonts", sans-serif;
  font-size: 1.2rem;
  color: #ffffff;

  border: 1px solid #273340;
  border-radius: 2rem;
  outline:none;
  padding:0.5rem 0.5rem 0.5rem 1rem;
  margin:0.8rem 0;

  width: 280px;
  
  &::placeholder {
    padding-left: 0.5rem;
  }

  &:focus{
    border: 1px solid #1a70ac;
  }

  &::before {
    
  }
`
const Trandbox = styled.div`
  
  background: #1e2732;
  border-radius: 1rem;
  margin: 2rem 0;

  color: #ffffff;

  width: 290px;
`
const HeaderText = styled.div`

  font-size: 1.3rem;
  text-align: left;
  font-family: "NixgonFonts", sans-serif;
  font-weight: 600;

  padding: 1rem 0 0 1rem;
  margin-right: auto;
`

const InfoText = styled.p`
  font-size: 0.8rem;
  text-align: left;
  font-family: "NixgonFonts", sans-serif;

  padding: 0 0.5rem;
  margin: 0.5rem;
`

const AlertPost = styled.div`
  font-size: 1rem;
  text-align: center;
  font-family: "NixgonFonts", sans-serif;

  padding: 1rem;
`

const PostBox = styled.button`
  background: #1e2732;

  text-align: left;
  color:#ffffff;
 
  border: none;
  outline: none;
  width: 290px;

  transition: ease 0.2s;
  z-index: 999;
  cursor: pointer;
  &:hover {
    background: #252e38;
  }
`
const PostHeader = styled.h2`
  font-size: 1.3rem;
  text-align: left;
  font-family: "NixgonFonts", sans-serif;
  font-weight: 600;
  color:#ffffff;

  padding: 1rem 1rem 0 1rem;
  margin:0;
`

const FooterText = styled.div`
  height:1.2rem;
`

const IntroText = styled.div`
  font-family: "NixgonFonts", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.5rem;
  color: #ffffff;

  margin: 3rem 2rem;
  margin-top:auto;
  margin-right:auto;
`

export default RightBox;