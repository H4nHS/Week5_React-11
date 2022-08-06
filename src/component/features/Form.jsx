import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { add } from '../../app/slice/CreateSlice';

const Form = () => {
    const title = useRef();
    const content = useRef();
    const author = useRef();
    const dispatch = useDispatch()
    const user = useSelector(state => state.store)
    console.log("user")

    return (
        <>
            <form style={{ display: 'flex', flexFlow: 'column', width: '200px' }}>
                <input type="text" ref={author} />
                <input type="text" ref={title} />
                <textarea cols="30" rows="10" ref={content} />
                <button onClick={(e) => {
                    e.preventDefault();
                    const current_author = author.current.value;
                    const current_title = title.current.value;
                    const current_content = content.current.value;
                    current_title.length < 10 ? alert('제목이 10글자 이하입니다 !') :
                        dispatch(add({ author: current_author, title: current_title, content: current_content, id: Math.random() * 10000 }));
                    title.current.value = '';
                    content.current.value = '';
                }}>submit</button>
            </form>
            <div>
                {user.map((value) => {
                    return (
                        <div key={value.id}>
                            {value.title}<br />
                            {value.content}
                        </div>)
                })}
            </div>
        </>

    );
};

export default Form;