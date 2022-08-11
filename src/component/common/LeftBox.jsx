import styled from "styled-components";

function LeftBox () {

  return (
    <LeftSection>
      <LogoContainer>
        <img src="https://cdn-icons-png.flaticon.com/512/2086/2086453.png" style={{width:"48px", margin:"1rem"}} alt="UNiVERSE logo image" />
        <LogoLabel>UNiVERSE</LogoLabel>
      </LogoContainer>
      <MenuList>
        <MenuBtn>🏠 홈</MenuBtn>
        <MenuBtn>🔍 탐색하기</MenuBtn>
        <MenuBtn>🔔 알림</MenuBtn>
        <MenuBtn>📮 쪽지</MenuBtn>
        <MenuBtn>🔖 북마크</MenuBtn>
        <MenuBtn>📇 리스트</MenuBtn>
        <MenuBtn>👤 친구 찾기</MenuBtn>
      </MenuList>
      <InfoText> 🙇 메뉴와 검색창은<br />작동되지 않습니다!</InfoText>
    </LeftSection>
  )
}

const LeftSection = styled.div`
  position: fixed;
  background: #15202b;
  color: #ffffff;
  
  width: 330px;
  height: 100vh;
  border-right: 1px solid gray;

  margin-left: auto;
  transform: translateX(42%);
`
// 이렇게 고정해도 창을 줄이면 망가짐.. 유의하자.

const LogoContainer= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1rem;
`
const LogoLabel = styled.label`
  color:#ffffff;
  font-family: "AritaDotum", sans-serif;
  font-weight: 900;
  font-size: 2rem;

  margin:0;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  gap: 0.5rem;
  
  padding-left:1rem;
`

const MenuBtn = styled.button`
  background: none;
  
  color: #ffffff;
  font-size: 1.5rem;
  font-family: "NixgonFonts", sans-serif;
  text-align: left;
  font-weight: 500;

  border: none;
  border-radius: 3rem;
  outline: none;
  padding: 0.8rem 1.5rem;
  margin-right:auto;

  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    border-radius: 3rem;
    background: #2c3640;
    transition: 0.3s ease;
  }
`


const InfoText = styled.div`
  font-family: "NixgonFonts", sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  text-align: left;
  color: #ffffff;

  padding-left:3rem;
  margin: 3rem 0;
`
export default LeftBox;