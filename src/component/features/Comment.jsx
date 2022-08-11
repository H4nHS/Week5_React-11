import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { asyncSaveFetch, asyncUpdateFetch } from "../../app/slice/CreateSlice";
import Reply from "./Reply";
import Button from "../common/Button";

function Comment() {
  const initialState = { id: 0, author: "", comment: "", modify: false };
  const [comment, setComment] = useState(initialState);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();
  const List = useSelector((state) => state.store);
  const params = useParams();

  useEffect(() => {
    dispatch(asyncSaveFetch());
    setRefresh(false);
  }, [refresh, dispatch]);

  let getData;
  if (List.length !== 0) {
    getData = List.find((elem) => elem.postID === Number(params.id));
  }

  function inputChange(event) {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  }

  function submitCommentData(e) {
    if (comment.author === "") {
      return alert("닉네임이 입력되지 않았습니다.");
    } else if (comment.comment === "") {
      return alert("댓글 내용이 입력되지 않았습니다.");
    }
    e.preventDefault();
    dispatch(
      asyncUpdateFetch({
        ...getData,
        commentList: [
          ...getData.commentList,
          { ...comment, id: new Date().getTime() },
        ],
      })
    );
    setComment(initialState);
    setRefresh(true);
  }

  return (
    <CommentContainer>
      <InputForm onSubmit={submitCommentData} autoComplete="off">
        <NicknameInput
          name="author"
          type="text"
          placeholder="닉네임"
          value={comment.author}
          onChange={inputChange}
          maxLength="7"
        />
        <CommentInput
          name="comment"
          type="text"
          placeholder="댓글을 입력해주세요."
          value={comment.comment}
          onChange={inputChange}
        />
        <Button st="OdSubmit" type="submit">
          등록
        </Button>
      </InputForm>

      <div>
        {getData === undefined || getData.commentList.length === 0 ? (
          <NoReply>댓글이 없습니다.</NoReply>
        ) : (
          getData.commentList.map((elem) => (
            <Reply
              list={getData}
              data={elem}
              key={elem.id}
              setRefresh={setRefresh}
            />
          ))
        )}
      </div>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: auto;
  padding: 0 0.3em;
`;
const InputForm = styled.form`
  display: flex;
  width: 100%;
  margin: 1em 0 0 0;
`;

const NicknameInput = styled.input`
  background: #444d56;
  height: 30px;
  width: 9.5em;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  margin: 0 0.75em 0 0.6em;
  padding-left: 1em;

  &:focus {
    outline: 1px solid white;
  }
`;

const CommentInput = styled.input`
  background: #444d56;
  height: 30px;
  width: 26.5em;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding-left: 1em;

  &:focus {
    outline: 1px solid white;
  }
`;

const NoReply = styled.div`
  margin-top: 6rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: gray;
`;

export default Comment;
