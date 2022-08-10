import { useState } from "react"
import { useDispatch } from "react-redux";
import { asyncUpdateFetch } from "../../app/slice/CreateSlice";


function Reply ({ list, data, setRefresh }) {
  const [mode, setMode] = useState("read");
  const [fixComment, setFixComment] = useState("");

  const dispatch = useDispatch();

  function eraseComment (e) {
    dispatch(asyncUpdateFetch({...list, commentList : list.commentList.filter(elem => Number(e.target.id) !== Number(elem.id))}))
    setRefresh(true)
  }

  function modifyChange (e) {
    setFixComment(e.target.value) 
  }

  function changeModifyMode (e) {
    setMode("modify")
  }

  function modifySubmit (e) {
    e.preventDefault();
    // const updateList = list.commentList.map(elem => elem.id === Number(e.target.id) ? {...elem, comment: fixComment} : elem )
    dispatch(asyncUpdateFetch({...list, commentList : list.commentList.map(elem => elem.id === Number(e.target.id) ? {...elem, comment: fixComment} : elem )}))
    setFixComment("")
    setMode("read")
    setRefresh(true)
  }
  return (
    <>
      {mode === "read" ?
        <>
        <div>
            <span>{data.id}</span>
            <span>{data.author}</span>
            <span>{data.comment}</span>
          </div>
          <button onClick={changeModifyMode}>수정</button>
        </>
        :
        
        <form onSubmit={modifySubmit} id={data.id}>
          <span>{data.id}</span>
          <span>{data.author}</span>
          <input type="text" onChange={modifyChange} placeholder={data.comment} />
          <button type="submit">수정</button>
        </form>
      }
      <button id={data.id} onClick={eraseComment}>삭제</button>
    </>
  )
}
export default Reply;