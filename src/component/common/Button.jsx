import styled, { css } from "styled-components";

const ST = {
  xs: css`
    --fontSize: 1.5rem;
    --padding: 4px 8px;
    --radius: 2px;
  `,
  BackSpaceBtn: css`
    --bg: none;
    --color: #ffffff;
    --fontWeight: 700;
    --fontSize: 1.5rem;
    --display: block;
    --border: none;
    --margin: 1rem auto 0 0;
    --cousor: pointer;
  `,
  ContentMenu: css`
    --bg: none;
    --color: #ffffff;
    --fontWeight: 900;
    --border: none;
    --cursor: pointer;
  `,
  MenuBoxBtn: css`
    --bg: none;
    --color: ${(props) => props.color || "#ffffff"};
    --fontWeight: 700;
    --border: none;
    --padding: 0.5rem 1rem;
    --cursor: pointer;
    --transition: 0.1s ease;

    &:hover {
     --hoverBgColor: gray;
     --hoverBoderRadius: ${(props) => props.radius || "5px"}
     --hoverBorderColor: white;
    }
  `,
};

function Button({ st, children, onClick, props }) {
  const stStyle = ST[st];

  return (
    <StyledButton stStyle={stStyle} onClick={onClick} props={props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.stStyle}

  margin: var(--margin, 0px 0px 0px 0px);
  border: var(--border, none);
  cursor: var(--cusor, pointer);
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--fontSize, 1rem);
  padding: var(--padding, 12px 16px);
  border-radius: var(--boderRadius, 8px);
  color: var(--color, #ffffff);
  background: var(--bgColor, #0d6efd);
  display: var(--display);
  flex-direction: var(--flexDiretion);
  background: var(--bg);
  font-weight: var(--fontWeight);
  transition: var(--transition);

  &:hover {
    background: var(--hoverBgColor, #025ce2);
    border-radius: var(--hoverBoderRadius);
    color: var(hoverBorderColor);
  }
`;

export default Button;
