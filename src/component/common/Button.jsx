import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    console.log(props.add)
    return (
        <ButtonStyle onClick={props.func}>
            {props.name}
        </ButtonStyle>
    );
};

export default Button;

const ButtonStyle = styled.button`
    background-color : ${props => props.add ? 'white' : 'black'}
`
