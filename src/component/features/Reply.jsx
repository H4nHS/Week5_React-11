import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncUpdateFetch } from "../../app/slice/CreateSlice";
import Button from "../common/Button";
import styled from "styled-components";

function Reply({ list, data, setRefresh }) {
  const [mode, setMode] = useState("read");
  const [fixComment, setFixComment] = useState("");

  const dispatch = useDispatch();

  function eraseComment(e) {
    dispatch(
      asyncUpdateFetch({
        ...list,
        commentList: list.commentList.filter(
          (elem) => Number(e.target.id) !== Number(elem.id)
        ),
      })
    );
    setRefresh(true);
  }

  function modifyChange(e) {
    setFixComment(e.target.value);
  }

  function changeModifyMode(e) {
    setMode("modify");
  }

  function modifySubmit(e) {
    e.preventDefault();
    // const updateList = list.commentList.map(elem => elem.id === Number(e.target.id) ? {...elem, comment: fixComment} : elem )
    dispatch(
      asyncUpdateFetch({
        ...list,
        commentList: list.commentList.map((elem) =>
          elem.id === Number(e.target.id)
            ? { ...elem, comment: fixComment }
            : elem
        ),
      })
    );
    setFixComment("");
    setMode("read");
    setRefresh(true);
  }
  return (
    <>
      {mode === "read" ? (
        <>
          <Cmtbox>
            <CmtAuthor>{data.author}</CmtAuthor>
            <CmtComment>{data.comment}</CmtComment>
          </Cmtbox>
          <Button st="MdBtn" onClick={changeModifyMode}>
            수정
          </Button>
        </>
      ) : (
        <Mdbox onSubmit={modifySubmit} id={data.id}>
          <MdAuthor>{data.author}</MdAuthor>
          <MdComment
            type="text"
            onChange={modifyChange}
            placeholder={data.comment}
            autoFocus="true"
          />
          <Button st="MdBtn2" type="submit">
            수정
          </Button>
        </Mdbox>
      )}
      <Button st="DelBtn" id={data.id} onClick={eraseComment}>
        삭제
      </Button>
    </>
  );
}

const Cmtbox = styled.div`
  width: 86%;
  height: 1.5em;
  display: inline-flex;
  margin: 1em 0 0 0;
`;

const Mdbox = styled.form`
  width: 87.8%;
  height: 1.5em;
  display: inline-flex;
  margin: 1em 0.45em 0 1.2em;
`;

const CmtAuthor = styled.span`
  width: 7em;
  height: auto;
  justify-content: left;
  margin: auto 0 0 0em;
  padding: 0.2em 0;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 0.5em;
  opacity: 0.5;
`;
const MdAuthor = styled.span`
  width: 7em;
  height: auto;
  justify-content: left;
  margin: auto 0 0 -1.15em;
  padding: 0.2em 0;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 0.5em;
  opacity: 0.9;
`;

const CmtComment = styled.span`
  width: 20em;
  margin: auto 0;
  text-align: left;
  padding-left: 1.5em;
  font-size: 1.1em;
  position: static;
`;

const MdComment = styled.input`
  width: 18em;
  border-radius: 5px;
  margin: auto 2.5em 0 1.2em;
  text-align: left;
  font-size: 1.1em;

  opacity: 0.3;

  &:focus {
    outline: none;
  }
`;

export default Reply;
