import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { asyncSaveFetch, asyncUpdateFetch } from "../../app/slice/CreateSlice";
import Reply from "./Reply";

function Comment() {
  const initialState = { id: 0, author: "", comment: "", modify: false };
  const [comment, setComment] = useState(initialState);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();
  const List = useSelector(state => state.store);
  const params = useParams();

  
  useEffect(()=>{
    dispatch(asyncSaveFetch());
    setRefresh(false)
  },[refresh, dispatch])

  let getData;
  if (List.length !== 0) {
    getData = List.find(elem => elem.postID === Number(params.id))
  }

  function inputChange (event) {
    const { name, value } = event.target;
    setComment({...comment, [name]: value})
  }

  function submitCommentData (e) {
    if (comment.author === "") {
      return alert("닉네임이 입력되지 않았습니다.");
    } else if (comment.comment === "") {
      return alert("댓글 내용이 입력되지 않았습니다.");
    }
    e.preventDefault();
    dispatch(asyncUpdateFetch({...getData, commentList : [...getData.commentList, {...comment, id: new Date().getTime()}]}))
    setComment(initialState);
    setRefresh(true)
  }

  return (
    <CommentContainer>
      <form onSubmit={submitCommentData}>
        <input name="author" type="text" placeholder="닉네임을 입력해주세요." value={comment.author} onChange={inputChange} />
        <input name="comment" type="text" placeholder="댓글을 입력해주세요." value={comment.comment} onChange={inputChange} />
        <button type="submit">등록</button>
      </form>

      <div>
        {getData === undefined || getData.commentList.length === 0 ?
          <div>댓글이 없습니다.</div> : 
            getData.commentList.map((elem) => <Reply list={getData} data={elem} key={elem.id} setRefresh={setRefresh} /> )}
      </div>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:0;
  margin-bottom: auto;
`

export default Comment;