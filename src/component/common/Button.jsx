import styled, { css } from "styled-components";

const ST = {
  OdSubmit: css`
    /* --fontSize: 1rem; */
    --margin: 0px 1rem;
    --width: 3em;

    &:hover {
      --hoverFontWeight: 600;
    }
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
  MdBtn: css`
    --margin: 0 0.6em 0 0;
    --padding: 0 0em 0 0;
    --opacity: 0.5;

    &:hover {
      --hoverFontWeight: bold;
    }
  `,
  DelBtn: css`
    --opacity: 0.5;
    --dispaly: flex;

    &:hover {
      --hoverFontWeight: bold;
    }
  `,
  MdBtn2: css`
    --opacity: 1;
    --padding: 0 0 0 0em;
    --margin: 0 0.6em 0 0em

    &:hover {
      --hoverFontWeight: bold;
      opacity: none;
    }
  `,
};

function Button({ st, children, onClick, props, id }) {
  const stStyle = ST[st];

  return (
    <StyledButton stStyle={stStyle} onClick={onClick} props={props} id={id}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.stStyle}

  margin: var(--margin,);
  border: var(--border, none);
  cursor: var(--cusor, pointer);
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--boderRadius);
  color: var(--color);
  background: var(--bgColor);
  display: var(--display);
  flex-direction: var(--flexDiretion);
  background: var(--bg);
  font-weight: var(--fontWeight);
  transition: var(--transition);
  position: var(--position);
  opacity: var(--opacity);

  &:hover {
    background: var(--hoverBgColor);
    border-radius: var(--hoverBoderRadius);
    color: var(--hoverBorderColor);
    font-size: var(--hoverFontSize);
    font-weight: var(--hoverFontWeight);
  }
`;

export default Button;
