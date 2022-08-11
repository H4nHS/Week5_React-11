import styled from "styled-components";
import LeftBox from "../component/common/LeftBox";
import RightBox from "../component/common/RightBox";


function MainLayout({children}) {
  return (
    <FlexContainer>
      <LeftBox />
      { children }
      <RightBox />
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display:flex;
  flex-direction: row;

  margin:0;
`

export default MainLayout;