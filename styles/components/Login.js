import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    width: 30%;
    
    input{
        width: 80%;
        height: 50px;
        border: 0;
        outline: none;
        border-radius: 5px;
        padding: 5px 10px;
        box-shadow: inset 3px 3px 10px rgba(0,0,0,0.5);
    }

    button{
        width: 40%;
        height: 50px;
        border-radius: 10px;
        color: white;
        border: none;
        background-color: #1A8CD8;
        padding: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: 0.5s;
    }
`